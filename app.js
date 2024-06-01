const inputbox = document.getElementById("input-box");
const list = document.getElementById("ul");

function addTask() {
  if (inputbox.value === "") {
    alert("you must be write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    list.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "&#x2716;";
    li.appendChild(span);
  }
  inputbox.value = "";
}

list.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
  },
  false
);
