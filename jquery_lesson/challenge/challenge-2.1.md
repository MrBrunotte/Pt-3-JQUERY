# Add, Remove and Empty

## Appende a span element to every paragraph, use the .append(); function.
Append a span element to every paragraph already on the page. (Some lorem ipsum text will be ok).

    $("p").append("<span></span>");

    $("p").append("<span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate nesciunt est non molestias. Cum perspiciatis commodi delectus aspernatur culpa vitae possimus voluptates incidunt. Reiciendis, nostrum.</span>");

## Remove all links (not the link element but the anchor element which also is a link!) from the page, use the .remove(); function.

    $("a").remove();

## Empty all divs with class .card, use the .empty(); function.

    $("div.card").empty();

    or

    $("div.card").text("");

