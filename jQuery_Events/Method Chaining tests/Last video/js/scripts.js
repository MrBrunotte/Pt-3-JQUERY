$("button").mouseenter(function () {
    $("this").removeClass("makeRedNow").addClass("makeBlueNow");
});

$("button").mouseleave(function () {
    $("this").removeClass("makeBlueNow").addClass("makeRedNow");
});
