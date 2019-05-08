# Edit a tags and button elements

Edit your html file to change all the a tags to button elements. Don’t forget the closing tag and to remove the href attribute. Make the first button hide when clicked. 

On the same button, try the slow, medium, fast, and a number in milliseconds (you will need to refresh to get the button back).

    $("#html_button").click(function () {
        $("#html_button").hide("medium");
        //$("#html_button").hide(3000);
    });

The last line is commented out, but remember that the milliseconds only have numbers (its not a string!)
