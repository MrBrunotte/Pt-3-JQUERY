# Selector techniques

$("a"); is equal to jQuery("a");

## Hints

I select items similarly to CSS.

$( '#header' ); // select the element with an ID of 'header'
$( 'li' );      // select all list items on the page
$( 'ul li' );   // select list items that are in unordered lists
$( '.person' ); // select all elements with a class of 'person'

In the code snippet above you can see how elements can be selected in various ways.

## Select the following:

### All images, based on the element type

    $("img");

### The card_image class

    $(".card_image");

### The footer, using its id

    $("#my_footer");

### All paragraph tags within the footer

    $("#my_footer>p");

### All header elements (<h1> through <h6>)

There are only h2 header elements in the index file!

    $(":header");

### The first element on the page

we use the pseudo selectors :first to find it!

    $(":first");

### The last div on the page

we use the pseudo selectors :last to find it!

    $("div:last");

### The last image on the page

we use the pseudo selectors img:last to find it!

    $("img:last");

### All elements with an href attribute

    $("[href]");