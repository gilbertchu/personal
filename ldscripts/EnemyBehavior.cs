using UnityEngine;
using System.Collections;

public class EnemyBehavior : MonoBehaviour {

	public GameObject projectile;
	public float projectileSpeed=10f;
	public float shotsPerSecond=0.5f;
	public float health=150f;
	public int scoreVal=150;
	ScoreKeeper scoreKeeper;
	public AudioClip fireSound;
	public AudioClip deathSound;

	void Start(){
		scoreKeeper = GameObject.Find ("Score").GetComponent<ScoreKeeper> ();
	}

	void Update(){
		float probability = Time.deltaTime * shotsPerSecond;
		if (Random.value < probability) {
			Fire();
		}
	}

	void Fire(){
		GameObject missle = Instantiate (projectile, transform.position, Quaternion.identity) as GameObject;
		missle.GetComponent<Rigidbody2D> ().velocity = new Vector2 (0f, -projectileSpeed);
		AudioSource.PlayClipAtPoint (fireSound, transform.position);
	}

	void OnTriggerEnter2D(Collider2D other) {
		Projectile missle = other.gameObject.GetComponent<Projectile> ();
		if (missle) {
			health-=missle.GetDamage();
			missle.Hit();
			if (health<=0){
				AudioSource.PlayClipAtPoint (deathSound, transform.position);
				scoreKeeper.Score(scoreVal);
				Destroy(gameObject);
			}
		}
	}
}
