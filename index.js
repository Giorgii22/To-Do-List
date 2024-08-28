const input = document.getElementById("inputbx");
const ul = document.getElementById("List");

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13 && input.value !== "") {
    createListItem();
  }
});

ul.addEventListener("click", function(event) {
  if (event.target.tagName === "BUTTON") {
    event.target.parentElement.remove();
  } else if (event.target.tagName === "LI") {
    event.target.classList.toggle("completed");
  }
});

function createListItem() {
  const li = document.createElement("li");
  const text = document.createElement("span");
  text.textContent = input.value;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  li.appendChild(text);
  li.appendChild(deleteBtn);
  ul.appendChild(li);

  input.value = "";
}
