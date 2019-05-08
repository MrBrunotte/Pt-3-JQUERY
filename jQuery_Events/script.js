$(document).ready(function () {
    $("#stream1_btn").on("click", function () {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream1").addClass('highlight_stream');
    });
    $("#stream2_btn").on("click", function () {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
    });
    $("#stream3_btn").on("click", function () {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
    });

    //!------------- challenge nr 0 ---------------

    // click on the text and it turns red!
    $("p").on("click", function () {
        $("p").addClass("highlight_text");
    });

    // Hover over <h2> header and all headers turn lightblue
    $("h2").hover(function () {
        $("h2").addClass("header_background");
    });

    // Change font-size of specific h2 header change from 1em to 3em
    $("#html").hover(function () {
        $("#mysql").removeClass("h2_font_size");
        $("#python").removeClass("h2_font_size");
        $("#jquery").removeClass("h2_font_size");
        $("#django").removeClass("h2_font_size");
        $("#css").removeClass("h2_font_size");
        $("#html").addClass("h2_font_size");
    });
    $("#mysql").hover(function () {
        $("#html").removeClass("h2_font_size");
        $("#python").removeClass("h2_font_size");
        $("#jquery").removeClass("h2_font_size");
        $("#django").removeClass("h2_font_size");
        $("#css").removeClass("h2_font_size");
        $("#mysql").addClass("h2_font_size");
    });
    $("#python").hover(function () {
        $("#html").removeClass("h2_font_size");
        $("#mysql").removeClass("h2_font_size");
        $("#jquery").removeClass("h2_font_size");
        $("#django").removeClass("h2_font_size");
        $("#css").removeClass("h2_font_size");
        $("#python").addClass("h2_font_size");
    });
    $("#jquery").hover(function () {
        $("#html").removeClass("h2_font_size");
        $("#mysql").removeClass("h2_font_size");
        $("#python").removeClass("h2_font_size");
        $("#django").removeClass("h2_font_size");
        $("#css").removeClass("h2_font_size");
        $("#jquery").addClass("h2_font_size");
    });
    $("#django").hover(function () {
        $("#html").removeClass("h2_font_size");
        $("#mysql").removeClass("h2_font_size");
        $("#python").removeClass("h2_font_size");
        $("#jquery").removeClass("h2_font_size");
        $("#css").removeClass("h2_font_size");
        $("#django").addClass("h2_font_size");
    });
    $("#css").hover(function () {
        $("#html").removeClass("h2_font_size");
        $("#mysql").removeClass("h2_font_size");
        $("#python").removeClass("h2_font_size");
        $("#django").removeClass("h2_font_size");
        $("#jquery").removeClass("h2_font_size");
        $("#css").addClass("h2_font_size");
    });

    // When a button is hovered, the background color of the body turns black, when mouse is moved it changes back to grey.
    $("bottom_button").mouseenter(function () {
        $("body").css("background-color", "black");
    });
    $("bottom_button").mouseleave(function () {
        $("body").css("background-color", "#eee");
    });


    //!------------- challenge nr 1 - Hide ---------------

    $("#html_button").click(function () {
        $("#html_button").hide("medium");
        //$("#html_button").hide(3000);
    });

    //!------------- challenge nr 2 - Show, Hide and Toggle ---------------

    $("#mysql_button").click(function () {
        $("#hide").toggle("2000");
    });

    //!------------- challenge nr 3 - Slide ---------------

    $("#python_button").click(function () {
        $("#slide").slideToggle("3000");
    });

    //!------------- challenge nr 4 - Fade to, mouseenter, mouseleave ---------------

    $("#jquery_button").mouseenter(function () {
        $("#jquery_button").fadeTo(1000, 0.5);
    });
    $("#jquery_button").mouseleave(function () {
        $("#jquery_button").fadeTo(1000, 1);
    });


    //! closing brackets for the document.ready.function()
});
