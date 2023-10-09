const input = document.querySelector("input");
const btnAdd = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

btnAdd.addEventListener("click", (e) => {
  e.preventDefault();
  const text = input.value;

  if (text !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");

    p.textContent = text;

    li.appendChild(p);
    ul.appendChild(li);
    li.appendChild(addDeleteBtn());

    input.value = "";
    empty.style.display = "none";
  }
});

function addDeleteBtn() {
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);
    const items = document.querySelectorAll("li");

    if (!items.length) {
      empty.style.display = "block";
    }
  });
  return deleteBtn;
}
