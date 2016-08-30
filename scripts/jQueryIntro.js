console.log( 'jQueryIntro.js sourced' );
//global var to count clicks
var clicks = 0;

$( document ).ready( function(){
  console.log( 'doc ready' );

  $( '#clearP' ).on( 'click', function(){
    console.log( 'in clearP on click');
    $( '#outputP' ).fadeToggle();
  }); // end clearP on click

  // clickMe button
  $( '#clickMe' ).on( 'click', function(){
    console.log( 'clickMe on click');
    // add to clicks
    clicks++;
    // display clicks count
    console.log( 'clicks: ', clicks );
    // display clicks
    displayClicks();
    // chillMode
    chillMode();
  }); // end clickMe clicked

  $( '#nameIn' ).on( 'keyup', function(){
    var nameNow = $( '#nameIn' ).val();
    console.log( 'key up:', nameNow );
  }); // end nameIn keyup

  $( '#outputP' ).on( 'click', function(){
    console.log( 'in outputP on click' );
    clicks = 0;
    console.log( 'clicks: ', clicks );
    displayClicks();
    panicMode();
  }); // end outputP click
}); // end document ready

var chillMode = function(){
  console.log( 'log chillMode' );
  $( '.problem' ).html( 'all good...' );
}; // end chillMode

var displayClicks = function(){
  console.log( 'in displayClicks' );
  var outputText = 'clicks: ' + clicks;
  // outputtext as HTML of element with id "outputP"
  $( '#outputP' ).html( outputText );
} // end displayClicks

var panicMode = function(){
  console.log( 'log panicMode' );
  $( '.problem' ).html( '<img src="https://pmcvariety.files.wordpress.com/2014/06/gene-wilder-dead.jpg">' );
}; // end panicMode
