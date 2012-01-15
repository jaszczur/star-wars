var StarWars = {};

StarWars.trueHeight = 0;

StarWars.initialize = function() {
  StarWars.trueHeight = StarWars.measureTrueHeight();
  StarWars.setupAudio();
}

StarWars.measureTrueHeight = function() {
  var tempObj = $('#textContainer') // starting with truncated text div container
      .clone().contents() // duplicate contents
      .wrapAll('<div id="content"/>') // wrap them in a container
      .parent().appendTo('#scene') // add this to the dom
      .css('top','-1000px'); // but put it far off-screen
  var result = tempObj.height(); // measure it
  tempObj.remove(); // clean up
  return result;
}

StarWars.setupAudio = function() {
  var audio = document.getElementById("song");
  audio.addEventListener("playing", function() {
    StarWars.startAnimation();
  });
  audio.play();
}

StarWars.startAnimation = function() {
  var shiftDistance = 2 * StarWars.trueHeight - $("#textContainer").height(); // how far to move
  var normalizedTime = parseInt(shiftDistance / 100, 10) * 2000; // speed
  $("#textContainer").contents().wrapAll('<div id="content">').parent() // wrap in div
    .animate({
      top: -shiftDistance
    }, normalizedTime, 'linear'); // and move the div within its "viewport"
}


$(document).ready(function() {
  StarWars.initialize();
});


