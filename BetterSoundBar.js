'use strict';

var bars = [];
var baseOrigin;

let amp = 450;				// The m value in f(x) = m∛(x + a) - m∛a.
let addin = 60;				// The a value in f(x) = m∛(x + a) - m∛a.
let cutoff = Math.pow(addin, 0.333) * (amp);

let barWidth = 1;			// The width of each bar.
let horizontalSpacing = 14;	// Space between bars horizontaly, set to zero for a vertical bar.
let verticalSpacing = 0;	// Space between bars verticaly, set to zero for a horizontal bar.
let barAngle = 0;			// Angle of the bars, set to 0 for horizontal bars, and 90 for vertical ones.

let barsAmount = 64;		// The number of bars in your visualizer, only 16, 32, and 64 are valid numbers.
let audioData = engine.registerAudioBuffers(barsAmount);

export function update() 
{
	var origin = baseOrigin.copy();
	var scale = new Vec3(barWidth);
 
	for (var i = 0; i < barsAmount; ++i) 
	{
		let amt = audioData.average[i] + addin; 
		// You can change ausioData.average[i] to ausioData.right[i] or ausioData.left[i]
		// to get the right and left stereo channels respectively.
		let bar = bars[i];

		scale.y = (Math.pow(amt, 0.333) * amp) - cutoff;

		if (scale.y < 1) scale.y = 0.8;

		origin.x += horizontalSpacing;
		origin.y += verticalSpacing;

		bar.scale = scale;
		bar.origin = origin;
	}
}
 
export function init() 
{
	bars.push(thisLayer);
	let thisIndex = thisScene.getLayerIndex(thisLayer);

	for (var i = 1; i < barsAmount; ++i) 
	{
		let newBar = thisScene.createLayer('models/bar.json');
		thisScene.sortLayer(newBar, thisIndex);
		newBar.parallaxDepth = new Vec2(0,0);
		bars.push(newBar);
	}
 
	for (var i = 0; i < barsAmount; ++i) 
	{
		let bar = bars[i];
		bar.angles = new Vec3(0, barAngle, 0);
	}

	baseOrigin = thisLayer.origin;
}