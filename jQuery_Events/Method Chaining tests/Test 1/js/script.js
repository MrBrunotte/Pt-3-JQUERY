$(document).ready(function () {

    //! Challenge 1
    $("#button1").mouseenter(function () {
        $("#button1").removeClass("make-red").addClass("make-border");
    });

    $("#button1").mouseleave(function () {
        $("#button1").removeClass("make-border").addClass("make-red");
    });

    //! Challenge 2

    $("#button1").click(function () {
        $("#slide-up").slideToggle("medium");
    });

    /*
    $("#button1").click(function () {
        $("#slide-up").slideToggle(2000);
    });
    */

    //! Challenge 3

    $("#button1").click(function () {
        $("p").hide(2000).show("fast");
    });

    $("#button1").click(function () {
        $("p").fadeIn().fadeOut();
    });

    //! Challenge 4

//! $("a").attr("href","https://codeinstitute.net/");



}); 
