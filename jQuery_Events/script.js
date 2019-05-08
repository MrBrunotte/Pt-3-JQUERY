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
    //!------------- challenge nr 1 ---------------

    //! click on the text and it turns red!
    $("p").on("click", function () {
        $("p").addClass("highlight_text");
    });

    //! Hover over <h2> header and all headers turn lightblue
    $("h2").hover(function () {
        $("h2").addClass("header_background");
    });

    //! Change font-size of specific h2 header change from 1em to 3em
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

    //! When a button is hovered, the background color of the body turns black, when mouse is moved it changes back to grey.
    $(".bottom_button").mouseenter(function () {
        $("body").css("background-color", "black");
    });
    $(".bottom_button").mouseleave(function () {
        $("body").css("background-color", "#eee");
    });
});
