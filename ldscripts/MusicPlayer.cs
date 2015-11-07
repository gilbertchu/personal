using UnityEngine;
using System.Collections;

public class MusicPlayer : MonoBehaviour {

	static MusicPlayer instance = null;
	public AudioClip start;
	public AudioClip game;
	public AudioClip end;
	AudioSource music;

	void Start () {
		if (instance != null && instance != this) {
			Destroy (gameObject);
			print ("Duplicate music player self-destructing!");
		} else {
			instance = this;
			GameObject.DontDestroyOnLoad(gameObject);
			music=GetComponent<AudioSource>();
			music.clip=start;
			music.loop=true;
			music.Play();
		}
	}

	void OnLevelWasLoaded(int level){
		Debug.Log ("MusicPlayer: loaded level "+level);
		music.Stop ();
		switch (level) {
		case 0: music.clip = start; break;
		case 1: music.clip = game; break;
		case 2: music.clip = end; break;
		}
		music.Play ();
	}
}
