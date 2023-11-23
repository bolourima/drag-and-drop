let item = document.getElementById("item-1");
console.log(item);
let box1 = document.getElementById("box-1");
let box2 = document.getElementById("box-2");

let dragStart = (e) => {
  console.log("dragging", e.target.id);
  e.dataTransfer.setData("text/plain", e.target.id);
};
let dragOver = (e) => {
  console.log("dragover");
  e.preventDefault();
};
let dropItem = (e) => {
  e.preventDefault();
  const dropId = e.dataTransfer.getData("text/plain");
  const dragable = document.getElementById(dropId);
  e.target.appendChild(dragable);
};
item.addEventListener("dragstart", dragStart);
box2.addEventListener("dragover", dragOver);
box2.addEventListener("drop", dropItem);

item.addEventListener("dragover", dragOver);
box1.addEventListener("dragover", dragOver);
box1.addEventListener("drop", dropItem);

// // When the element is dragged and dropped onto the zone, display an alert.

// let dragMe = document.getElementById("drag-me");
// dragMe.style.backgroundColor = "rgb(0, 174, 255)";
// let dropHere = document.getElementById("drop-here");
// dropHere.style.border = "dotted 1px green";

// // console.log(dragMe, "drag-me")
// // console.log(dropHere, "drop-here")

// dragMe.addEventListener("dragstart", () => {
//   console.log("drag-start");
// });
// dragMe.addEventListener("drag", () => {
//   // console.log('drag')
// });
// dragMe.addEventListener("dragend", () => {
//   console.log("dragend");
// });
// dragMe.addEventListener("dragstart", () => {
//   console.log("drag-start");
// });
// dropHere.addEventListener("dragenter", () => {
//   console.log("dragenter");
// });
// dropHere.addEventListener("dragover", (e) => {
//   e.preventDefault();
//   e.target.style.border = "dotted 1px red"
//   // console.log('dragover')
// });
// dropHere.addEventListener("dragleave", (e) => {
//   console.log("dragleave");
//   e.target.style.border = "dotted 1px green";
// });
// dropHere.addEventListener("drop", (event) => {
//   console.log("drop");
//   dropHere.appendChild(dragMe);
//   event.target.style.border = "dotted 1px green";
// //   event.target = alert("alert ugj bn");
//   // dropHere.innerHTML = dragMe.innerHTML
// });
