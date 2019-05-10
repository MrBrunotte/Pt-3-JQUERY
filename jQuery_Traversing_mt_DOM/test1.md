# Challenge 1

Add some links to the card paragraphs that don’t need to go anywhere (href=”#”).
Add a script that performs the following:
When a paragraph is clicked, all the links within it are highlighted in yellow.

1) Start by adding the a tag and href dummy link to the paragraphs, in the html file.

2) Add a script in the script file that is highlited in yellow when clicked.

    $(document).ready(function() {
        //sets <a> element within paragraph  to yellow  
        $("p").click(function () {
		$(this).children("a").css("background-color", "yellow").css("color", "red");
	});
});
