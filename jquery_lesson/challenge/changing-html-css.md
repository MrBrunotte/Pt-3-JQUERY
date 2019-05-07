# Changing HTML and CSS using the DOM 

## Changing CSS with JQuery. Use the .css(); function

To see the background-color of the p element:

    $("p").css("background-color"); 
    "rgba(0, 0, 0, 0)"

To change color of all <li> to red we add a second parameter!

    $("li").css("color", "red");
    Object { 0: li#logoNav, 1: li#stream1_btn, 2: li#stream2_btn, 3: li#stream3_btn, length: 4, prevObject: Object(1) }

To change all <h2> to underline!

    $("h2").css("text-decoration", "underline");
    Object { 0: h2.card_head, 1: h2.card_head, 2: h2.card_head, 3: h2.card_head, 4: h2.card_head, 5: h2.card_head, length: 6, prevObject: Object(1) }

Add a solid 1 pixel border to the <ul> selector:

    $("ul").css("border", "solid 1px red");
    Object { 0: ul, length: 1, prevObject: Object(1) }

## changing HTML content with JQuery. Use the .html(); function

Retrives the html from id="my_footer"
    $("#my_footer").html();
    
        "<p id=\"copyright\">Copyright Infomation</p>"

We can also replace HTML:

    $("#my_footer").html("<h1>This is my fancy new content. Thanks JQuery, you're the best!</h1>");
    Object [ div#my_footer ]

## If we just want to change the text we use the .text(); function

If I just want to change the text!

    $("#my_footer").text("this is my new fancy text!");

## Inserting elements in the DOM. .append(); function adds an element.

Insert a new span in the footer section:
    $("#my_footer").append("<span> &copy; 2017.</span>");

## Removing elements in the DOM. .remove(); function removs an element.