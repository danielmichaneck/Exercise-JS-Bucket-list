/* ##### Get list ##### */
const list = document.querySelector(".list");



/* ##### First wish ##### */
const firstWish = document.createElement("p");
firstWish.innerText = "Live in a cabin in the woods.";
list.appendChild(firstWish);



/* ##### Second wish ##### */
const secondWish = document.createElement("p");
secondWish.innerText = "Adopt five hundred cats.";
// This adds the paragraph at the end, but within the section.
list.insertAdjacentElement("beforeend", secondWish);



/* ##### Log list inner html ##### */
console.log(list.innerHTML);



/* ##### Third wish ##### */
const thirdWish = "<p>Buy a motorcycle.</p>";

// Writing:
// list.innerHTML = thirdWish;
// will overwrite the previous paragraphs.

// Writing:
// list.innerHtml += thirdWish;
// would work.

// Adds the html to the beginning of the list.
list.insertAdjacentHTML("afterbegin", thirdWish);



/* ##### 3 more wishes ##### */
const newWishes = ["Attain peace of mind.", "Go on a trip around the world.", "Have UNLIMITED CHOCOLATE."];
for (let i = 0; i < newWishes.length; i++){
    const wishToAdd = document.createElement("p");
    wishToAdd.innerText = newWishes[i];
    list.insertAdjacentElement("beforeend", wishToAdd);
}



/* ##### How many items are there in the bucket list now? ##### */
// 7 items.
console.log(list.children);


/* ##### My name is not Bucky! ##### */
const owner = document.querySelector(".owner");
owner.innerText = "Daniel's";


/* ##### Replace the first item in the list ##### */
const newWishInsteadOfMotorcycle = document.createElement("p");
newWishInsteadOfMotorcycle.innerText = "Be given 5 tons of cat food.";
list.replaceChild(newWishInsteadOfMotorcycle, list.firstChild);



/* ##### Replace an item in the middle of the list with a new one ##### */
const newItem = document.createElement("p");
newItem.innerText = "Buy a UHD Blu-ray player.";
// Made it random!
const index = Math.floor(Math.random() * list.children.length);
list.replaceChild(newItem, list.children[index]);
// Note that this element will be removed if index is 6, since the next method removes the last child.



/* ##### Remove last item ##### */
list.removeChild(list.lastChild);