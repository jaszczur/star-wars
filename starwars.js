
$(document).ready(function() {
  console.log("di");
  var true_height = ( function(){
    var $tempobj = $('#textContainer') // starting with truncated text div container
      .clone().contents() // duplicate the text
      .wrap('<div id="content"/>') // wrap it in a container
      .parent().appendTo('#scene') // add this to the dom
      .css('top','-1000px'); // but put it far off-screen
    var result = $tempobj.height(); // measure it
    $tempobj.remove(); // clean up
    return result;
  })();

    var shift_distance = 2 * true_height - $("#textContainer").height(); // how far to move
    var time_normalized = parseInt(shift_distance / 100, 10) * 1000; // speed
    $("#textContainer").contents().wrap('<div id="content">').parent() // wrap in div
      .animate({
        top: -shift_distance
      }, time_normalized, 'linear'); // and move the div within its "viewport"
});


