// 15/03/2024, Luuk
// based on: https://jupyterbook.org/en/stable/advanced/html.html#custom-css-or-javascript
console.log("test is in")
//const eng_locatie = 'https://polslab.tnw.tudelft.nl/dictaat/Deel1/testkees.html';
var currentUrl = window.location.href;

//extract navbar from document and create button
let navbar = document.getElementsByClassName("article-header-buttons");
let button = document.createElement("BUTTON");

//copy style of button
button.classList.add("btn", "btn-sm", "navbar-btn");

// Set text of button
button.innerText = "EN";

// Set location of button
button.onclick = () => {
    location.href=eng_locatie;
}

// Execute once page is loaded
// document.addEventListener("DOMContentLoaded", () => {
//     fetch('_static/custom_launch.json')
//     .then((response) => response.json())
//     .then((json) => console.log(json));
//     navbar = document.getElementsByClassName("article-header-buttons");
//     navbar[0].prepend(button);
// });




// Find the last '/' in the URL
var lastSlashIndex = currentUrl.lastIndexOf('/');

// Check if '/' is found in the URL
if (lastSlashIndex !== -1) {
  // Construct the modified URL by inserting "/EN/" before the last part
  var modifiedUrl = currentUrl.slice(0, lastSlashIndex + 1) + "EN/" + currentUrl.slice(lastSlashIndex + 1);

  // Log the modified URL to the console
  eng_locatie = modifiedUrl;
} 


// doel: 
// zoeken naar NL en replace by EN
// Check if "/Deel1/" is found in the URL
//   if (deel1Index !== -1) {
//   // Insert "/EN/" after "/Deel1/"
//  var modifiedUrl = currentUrl.slice(0, deel1Index + 7) + "EN" + currentUrl.slice(deel1Index + 7);

