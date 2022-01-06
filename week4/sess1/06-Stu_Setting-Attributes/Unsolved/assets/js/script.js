var site1El = document.querySelector(".site1");
var site2El = document.querySelector(".site2");
var site3El = document.querySelector(".site3");

site1El.children[0].textContent = "Site 1";
site1El.children[1].setAttribute("href", "https://google.com");
site1El.children[1].children[0].setAttribute(
  "src",
  "assets/images/image_1.jpg"
);
site1El.children[1].children[0].setAttribute("alt", "man working");
site1El.children[1].children[0].setAttribute("style", "padding:10px;");

site2El.children[0].textContent = "Site 2";
site2El.children[1].setAttribute("href", "https://twitter.com");
site2El.children[1].children[0].setAttribute(
  "src",
  "assets/images/image_2.jpg"
);
site2El.children[1].children[0].setAttribute("alt", "group brainstorm");
site2El.children[1].children[0].setAttribute("style", "padding:10px;");

site3El.children[0].textContent = "Site 3";
site3El.children[1].setAttribute("href", "https://instagram.com");
site3El.children[1].children[0].setAttribute(
  "src",
  "assets/images/image_3.jpg"
);
site3El.children[1].children[0].setAttribute("alt", "women working");
site3El.children[1].children[0].setAttribute("style", "padding:10px;");

// Write Your Code Below

// 1st line is to make all h4s under 1 variable
var allh4s = document.querySelectorAll("h4");
// bottom function to change color and size, you can do style.color too
for (let i = 0; i < allh4s.length; i++) {
  const element = allh4s[i];
  element.setAttribute("style", "color:blue; font-size:30px");
}

// padding added to title
var titleEl = document.querySelector("h1");
titleEl.style = "padding-left:10px; margin: 0px";
