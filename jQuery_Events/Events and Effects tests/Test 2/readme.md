# Toggle to alter a buttons behaviour

When the button is clicked, the paragraph vanishes.
When the button is clicked again, the paragraph reappears.

Hint: Give the paragraph an id!

Target the mysql button.

## What I did wrong and then corrected

I started with giving the paragraph an ID# (id="hide").
What I missed in the beginning was that I used this same id for the method target and in the function!

I need to target the paragraph with the method and then in the function i tell the function what to should happen. Therefore I gave the button an id (id="mysql_button") and set the toggle to 2 milliseconds.

    $("#mysql_button").click(function () {
        $("#hide").toggle("2000");
    });
