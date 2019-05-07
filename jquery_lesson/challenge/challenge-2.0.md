# Change all the content of all the paragraphs on the page in one go!

## Change all the content in one go.

Changes all the content in all the paragraphs in one go!
    $("p").text("this changes all the text in the <p> elements on the whole page!");

## Change the background-color in the <p> element.

Changes the background-color to grey:

    $("p").css("background-color", "grey");
    Object { 0: p.card_para, 1: p.card_para, 2: p.card_para, 3: p.card_para, 4: p.card_para, 5: p.card_para, 6: p#copyright, length: 7, prevObject: Object(1) }

## from the solution:

// Modify the contents of all of the paragraph elements on the page
$("p").text("New text");