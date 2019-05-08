# jQuery effects

Use fadeTo in conjunction with mouseenter and mouseleave to modify the button. Fade to 50% opacity on mouseenter and fade back to 100% on mouseleave.

Since Im targeting the jQuery button here I give it an ID (jquery_button) and then I set the Jquery method mouseenter and mouseleave. In the method I use the function fadeTo() to set the speed and opacity when the mouse enters and leaves the button!

    $("#jquery_button").mouseenter(function () {
            $("#jquery_button").fadeTo(1000, 0.5);
        });
        $("#jquery_button").mouseleave(function () {
            $("#jquery_button").fadeTo(1000, 1);
        });
