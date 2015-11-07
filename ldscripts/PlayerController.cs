using UnityEngine;
using System.Collections;

public class PlayerController : MonoBehaviour {

	public float speed=15f;
	public float padding=1f;
	public GameObject projectile;
	public float projectileSpeed=10f;
	public float firingRate=0.2f;
	float xmin=-5f;
	float xmax=5f;
	public float health=250f;
	public AudioClip fireSound;

	// Use this for initialization
	void Start () {
		float distance = transform.position.z - Camera.main.transform.position.z;
		Vector3 leftmost = Camera.main.ViewportToWorldPoint(new Vector3(0f,0f,distance));
		Vector3 rightmost = Camera.main.ViewportToWorldPoint(new Vector3(1f,0f,distance));
		xmin = leftmost.x + padding;
		xmax = rightmost.x - padding;
	}

	// Update is called once per frame
	void Update () {
		if (Input.GetKeyDown (KeyCode.Space)) {
			InvokeRepeating("Fire", 0.000001f, firingRate);
		} else if (Input.GetKeyUp (KeyCode.Space)){
			CancelInvoke("Fire");
		}
		if (Input.GetKey (KeyCode.LeftArrow)) {
			transform.position += Vector3.left * speed * Time.deltaTime;
		} else if (Input.GetKey (KeyCode.RightArrow)) {
			transform.position += Vector3.right * speed * Time.deltaTime;
		}
		float newX = Mathf.Clamp (transform.position.x, xmin, xmax);
		transform.position = new Vector3 (newX, transform.position.y, transform.position.z);
	}

	void Die(){
		LevelManager man = GameObject.Find ("LevelManager").GetComponent<LevelManager> ();
		man.LoadLevel ("Win Screen");
		Destroy(gameObject);
	}

	void Fire(){
		GameObject beam = Instantiate(projectile, transform.position, Quaternion.identity) as GameObject;
		beam.GetComponent<Rigidbody2D>().velocity = new Vector2(0f, projectileSpeed);
		AudioSource.PlayClipAtPoint (fireSound, transform.position);
	}

	void OnTriggerEnter2D(Collider2D other) {
		Projectile missle = other.gameObject.GetComponent<Projectile> ();
		if (missle) {
			health-=missle.GetDamage();
			missle.Hit();
			if (health<=0){
				Die();
			}
		}
	}
}
