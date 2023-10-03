var todo = []
const addto = () => {
  let inputtext = tasker.value;
  let btn = (document.querySelector(".addbutton"));
  btn.addEventListener("click", () => let newItem = document.createElement('li'))
  newItem.innerHTML = "New item"
  todo.appendChild(newItem);
}
console.log(inputtext)
console.log(todo)