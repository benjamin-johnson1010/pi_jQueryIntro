Pi JQuery Intro
===============
jquery.com

General JQ rulez:
* source JQuery script prior to any scripts that use JQuery

targeting elements:
* .class
* #id

ex that targets an element with id of "outputDiv":
$( '#outputDiv' )

JQ to JS helper
.html() = innerHTML
.val() = .value

previously on JavaScript...
document.getElementById( 'outputDiv' ).innerHTML = 'asdf';

this week on JQuery...
$( '#outputDiv' ).html( 'asdf' );

//////////////////////////////
$( '#ELEMENT' ).on( 'click', function(){
  // code for when element with id is clicked
}); // end

for the "on" method of an element we have some other really useful options.

Click is cool, but here's it's brethren
* click
* keyup
* mouseenter
* mouseleave
* hover
* focus
* change
