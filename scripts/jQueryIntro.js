console.log( 'jQueryIntro.js sourced' );
//global var to count clicks
var clicks = 0;

$( document ).ready( function(){
  console.log( 'doc ready' );

  // clickMe button
  $( '#clickMe' ).on( 'click', function(){
    console.log( 'clickMe on click');
    // add to clicks
    clicks++;
    // display clicks count
    console.log( 'clicks: ', clicks );
    var outputText = 'clicks: ' + clicks;
    // outputtext as HTML of element with id "outputP"
    $( '#outputP' ).html( outputText );
  }); // end clickMe clicked

  $( '#nameIn' ).on( 'keyup', function(){
    var nameNow = $( '#nameIn' ).val();
    console.log( 'key up:', nameNow );
  });

  $( '#outputP' ).on( 'click', function(){
    console.log( 'in outputP on click' );
    clicks = 0;
    console.log( 'clicks: ', clicks );
  });

});
