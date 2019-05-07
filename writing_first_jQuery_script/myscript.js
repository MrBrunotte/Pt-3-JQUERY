/* We use the document.ready.function
    The reason we use this is that its bad practice to run jQuery before the page is fully loaded, because we might be trying to  manipulate somehting that has not yet been rendered on the webpage.

    These changes will happen as soon as the page is fully loaded and the CSS changes will be made.
*/

$(document).ready(function () {
    $("tr:odd").addClass("odd");
    $("tr:even").addClass("even");
});