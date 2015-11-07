using UnityEngine;
using System.Collections;

public class EnemySpawner : MonoBehaviour {

	public GameObject enemyPrefab;
	public float width=14f;
	public float height=4f;
	public float ypos=2f;
	public float speed=5f;
	bool movingRight=true;
	float xmin;
	float xmax;
	public float spawnDelay=0.5f;

	// Use this for initialization
	void Start () {
		float distanceToCamera = transform.position.z - Camera.main.transform.position.z;
		Vector3 leftBoundary = Camera.main.ViewportToWorldPoint (new Vector3 (0f, 0f, distanceToCamera));
		Vector3 rightBoundary = Camera.main.ViewportToWorldPoint (new Vector3 (1f, 0f, distanceToCamera));
		xmin = leftBoundary.x;
		xmax = rightBoundary.x; 
		SpawnUntilFull ();
	}

	void SpawnEnemies(){
		foreach (Transform child in transform) {
			GameObject enemy = Instantiate (enemyPrefab, child.position, Quaternion.identity) as GameObject;
			enemy.transform.parent = child;
		}
	}

	void SpawnUntilFull(){
		Transform freePos = NextFreePosition ();
		if (freePos) {
			GameObject enemy = Instantiate (enemyPrefab, freePos.position, Quaternion.identity) as GameObject;
			enemy.transform.parent = freePos;
		}
		if (NextFreePosition()) {
			Invoke("SpawnUntilFull",spawnDelay);
		}
	}

	void OnDrawGizmos(){
		Gizmos.DrawWireCube (new Vector3(transform.position.x, ypos, transform.position.z), new Vector2(width, height));
	}
	
	// Update is called once per frame
	void Update () {
		if (movingRight) {
			transform.position += Vector3.right * speed * Time.deltaTime;
		} else {
			transform.position += Vector3.left * speed * Time.deltaTime;
		}

		float leftEdgeOfFormation = transform.position.x - (0.5f * width);
		float rightEdgeOfFormation = transform.position.x + (0.5f * width);
		if (leftEdgeOfFormation <= xmin) {
			movingRight = true;
		} else if (rightEdgeOfFormation >= xmax) {
			movingRight = false;
		}

		if (AllMembersDead()) {
			SpawnUntilFull();
		}
	}

	Transform NextFreePosition(){
		foreach (Transform childPos in transform) {
			if (childPos.childCount==0){
				return childPos;
			}
		}
		return null;
	}

	bool AllMembersDead(){
		foreach (Transform childPos in transform) {
			if (childPos.childCount>0){
				return false;
			}
		}
		return true;
	}
}
