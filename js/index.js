// Your code goes here

// 1.
const headingChangeToGreen = document.querySelector(".logo-heading");
headingChangeToGreen.addEventListener("mouseenter", () => {
  headingChangeToGreen.style.color = "green";
});

// 2.
const headingChangeToOriginal = document.querySelector(".logo-heading");
headingChangeToOriginal.addEventListener("mouseleave", () => {
  headingChangeToOriginal.style.color = "black";
});

// 3.
const selectingText = document.querySelector(".intro h2");
selectingText.addEventListener("dblclick", () => {
  selectingText.style.textAlign = "center";
});

// 4.
const alive = document.querySelector(".intro p");
alive.addEventListener("mouseover", () => {
  alive.style.color = "white";
});

// 5.
const removeImg = document.querySelector(".intro img");
removeImg.addEventListener("click", (event) => {
  removeImg.style.visibility = "hidden";

  //stopped propagation
  event.stopPropagation();
});

// 6.
const bringBackImg = document.querySelector(".text-content");
bringBackImg.addEventListener("wheel", () => {
  bringBackImg.style.color = "blue";
});

// 7.
const bodyText = document.querySelector(".text-content");
bodyText.addEventListener("copy", () => {
  bodyText.style.color = "white";
});

// 8.
const contentDestination = document.querySelector(".content-destination p");
contentDestination.addEventListener("contextmenu", () => {
  contentDestination.style.color = "brown";
});

// 9.
const test1 = document.querySelector(".destination h4");
test1.addEventListener("mouseup", () => {
  test1.style.color = "purple";
});

// 10.
document.querySelectorAll(".destination p").forEach((item) => {
  item.addEventListener("mouseout", () => {
    item.style.color = "yellow";
  });
});

//event propagation line 32
const body = document.querySelector("body");
body.addEventListener("click", () => {
  body.style.backgroundColor = "red";
});

//preventDefault()
