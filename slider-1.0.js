/*	
 *	Slider
 *	Version 1.0
 *	Slideshow for multiple stacking elements.
 *
 *	Gilbert Chu
 */

(function(undefined) {
	var slideArray = []; //Define array of file paths. You will need to use something like an AJAX call if you want to get files from a directory.
	var slideA = document.getElementById('slideA'); //First sliding element
	var slideB = document.getElementById('slideB'); //Second sliding element
	var sliderButton = document.getElementById('sliderButton'); //Button to toggle sliding
	var slidingDelay = 2; //Delay while sliding;
	var slidingDistance = 5; //Unit sliding distance;
	var intermittentDelay = 3000; //Delay between sliding;
	var imax = slideArray.length, slider = 0, i, delay;
	if (imax>1) {
		i = (imax>2)? 2:0;
		slider = setTimeout(slide,3000);
	} else {
		sliderButton.style.display='none';
	}
	function slide() {
		delay = slidingDelay;
		slideB.style.left = parseInt(slideB.style.left) - slidingDistance + 'px';
		if (parseInt(slideB.style.left) <= 0) {
			slideA.style.backgroundImage = 'url(' + slideArray[i] + ')';
			slideA.style.left = '495px';
			slideA.style.zIndex = '2';
			slideB.style.zIndex = '1';
			i++;
			if (i >= imax) i=0;
			var x = slideA;
			slideA = slideB;
			slideB = x;
			delay = intermittentDelay;
		}
		clearTimeout(slider);
		slider = setTimeout(slide,delay);
	}
	function slideStatus() {
		if (slider===0) {
			slide();
			sliderButton.innerHTML = 'Pause Slider';
		} else {
			clearTimeout(slider);
			slider = 0;
			sliderButton.innerHTML = 'Resume Slider';
		}
	}
})();
