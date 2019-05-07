# Enable jQuery on pages that havent loaded

We can also use the console to temporarily enable jQuery on pages that don’t already have it loaded. Run the following three commands in the console, to manually add jQuery to the page’s DOM:

## 1 Go to eir.ie Load jQuery and use it to:

Load jQuery and use it to change the following:

1) Create a new scripe element:

    var script = document.createElement('script');

2) Set the src attribute of the new script element:

    script.src = "//code.jquery.com/jquery-latest.min.js";

3) Append the new script element to the head element of the page:

    document.head.appendChild(script);

4) find out the font-family used for paragraphs:

    $("p").css("font-family");
    "gt-walsheim-regular"

5) find out the font-family used for <h2>’s:

    $("h2").css("font-family");
    "eir-medium"

6) change the text of each paragraph (i.e. the <p> element) to your name:

    $("p").text("Stefan Brunotte");
    
## 2 Go to Stack Overflow:

Load jQuery and use it to change the following:

1) Create a new scripe element:

    var script = document.createElement('script');

2) Set the src attribute of the new script element:

    script.src = "//code.jquery.com/jquery-latest.min.js";

3) Append the new script element to the head element of the page:

    document.head.appendChild(script);

4) background-color:

    $("body").css("background-color", "red");

5) font-family for paragraph:

    $("p").css("font-family", "sans-serif");