//get list of elements in the They can be droped in the dropzone
const items = document.querySelectorAll(".item");
//get drop zones element
const dropZone = document.querySelectorAll(".dropable-items");
//Temperorary variable to store the element that is being dragged
let draggedItem = null;

for (let i = 0; i < items.length; i++) {
  const item = items[i];
  //add drag event listener to each element
  items[i].addEventListener("dragstart", () => {
    draggedItem = item;
    //to remove the element from the drag zone or list of elements in html
    setTimeout(() => (item.style.display = "none"), 0);
  });
  //add dragend event listener to each element
  items[i].addEventListener("dragend", () => {
    setTimeout(() => {
      //show the element dropped in drop zone
      item.style.display = "block";
      draggedItem = null;
    }, 0);
  });
  for (let j = 0; j < dropZone.length; j++) {
    const list = dropZone[j];
    //handle drop event api for selected element

    list.addEventListener("dragover", (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
    });
    //handle selected element when it enter in the drop zone
    list.addEventListener("dragenter", (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
      //for hover drop zone
      list.style.backgroundColor = "rgba(0,0,0,0.2)";
    });

    //remove hovered drop zone style
    list.addEventListener("dragleave", (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
      list.style.backgroundColor = "";
    });

    list.addEventListener("drop", (e) => {
      e.preventDefault();
      list.append(draggedItem);
    });
  }
}
