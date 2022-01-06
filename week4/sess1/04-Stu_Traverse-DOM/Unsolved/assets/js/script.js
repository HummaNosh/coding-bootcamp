// Access element using id
var articlesDiv = document.getElementById("articles");
var headerDiv = document.getElementById("header");

// Change style by accessing style object's properties

// check console log what isnt working....which is the number of children.
// chnaged children from 1 to 0 and added children 1, because article is 1st child of div and h3 is 1st child
articlesDiv.children[0].children[1].style.fontSize = "50px";
//added children 0 for h1
headerDiv.children[0].style.color = "white";
