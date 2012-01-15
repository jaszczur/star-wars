var StarWars = {};

StarWars.startAnimation = function() {
  var shift_distance = 2 * StarWars.trueHeight - $("#textContainer").height(); // how far to move
  var time_normalized = parseInt(shift_distance / 100, 10) * 2000; // speed
  $("#textContainer").contents().wrapAll('<div id="content">').parent() // wrap in div
    .animate({
      top: -shift_distance
    }, time_normalized, 'linear'); // and move the div within its "viewport"
}

//StarWars.

StarWars.trueHeight = 0;

$(document).ready(function() {
  StarWars.trueHeight = ( function(){
    var $tempobj = $('#textContainer') // starting with truncated text div container
      .clone().contents() // duplicate the text
      .wrapAll('<div id="content"/>') // wrap it in a container
      .parent().appendTo('#scene') // add this to the dom
      .css('top','-1000px'); // but put it far off-screen
    var result = $tempobj.height(); // measure it
    $tempobj.remove(); // clean up
    return result;
  })();
  
  var audio = $("#song").get(0);
  audio.play();
  StarWars.startAnimation();
  
  
  
});


