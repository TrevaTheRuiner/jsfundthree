var reminder = [];
var todo = document.getElementById("tasker")
// var listBox = document.getElementById("cabinet")
// todo.listBox

const addto = () => {
      if(typeof todo.value == 'string') {
      let temptodo = todo.value
      reminder.push(temptodo)
      stuff ();
      } else {
      alert("Did you forget to type something?")
      }
}

const stuff = () => {
      for (let i = 0; i < reminder.length; i++) {
        let shelflist = document.querySelector('#shelf1')
        let newItem = document.createElement('input')
        newItem.innerHTML = reminder[i]
        shelflist.appendChild(newItem)
        }
}

const remove = () => {

  if {

  } else {

  }

}

console.log(reminder);



//2.3
/*
let newLi = document.createElement('li');
        newLi.innerHTML = todo.value;
        newLi.appendChild(li)
*/



/*
console.log(inputtext)
console.log(todo)

let inputtext = tasker.value;
let btn = (document.querySelector(".addbutton"));
btn.addEventListener("click", () => let newItem = document.createElement('li'))
newItem.innerHTML = "New item"
todo.appendChild(newItem);

*/