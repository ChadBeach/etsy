import {items} from './results.js';
import $ from "jquery";

console.log(items);



// Q: How do you get the first item?
var first_item = items.results[0];


// console.log("The first item is: ");
// console.log(first_item);
// console.log("The store speaks this language: " + first_item.Shop.languages[0])

// Q: If you have an item, what pieces do you need for the HTML?
// At least: item title, item url, store url, store name, image, price, what kind of currency.
var firstItem = {};
firstItem.name = "basketball mom"


// var tagsarray = []
// var tagobject = {
//   title: "";
//   price: "",
//
// }
// function addToPAge ()
// //alternately, write
// var interestingParts = {
//   image: first_item.Images[0].url_170x135
// }

// console.log(interestingParts);

// Look at how I looped over the items on lines 9-21 and generated HTML for them.
// https://github.com/tiy-atl-js-june-2016/tacky/blob/master/src/js/main.js#L9

function itemTemplate (obj){
  return `
  <div class="etsy-item">

  <img src="${obj.Images[0].url_170x135}">
<div class="title">${obj.title}</div>
  </div>
  `;
};

// document.querySelector("img")

function addToPage (item) {
  var node = $(".content");
  var imageHtml = itemTemplate(item);
  node.append(imageHtml);
};

items.results.forEach(addToPage);

//items.forEach(function (x) {
  // CODE GOES HERE
//});
