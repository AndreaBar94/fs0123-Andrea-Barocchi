//qui definisco il costruttore
class ToDoList{
  constructor(list){
      this.todolist = list;
  }

//qui le funzioni che creano e rimuovono la ul
      addToList(content){
      let list = document.querySelector('#ulList');
      let li = document.createElement("li");
      li.textContent = content;
      list.appendChild(li)
      let delButton = document.createElement('button')
  }
  
 /* removeFromList(){
          delButton.addEventListener('click', function(){
              
          })
          li = document.getElementById('li')
          let updated = document.getElementById("ulList");
          updated.onclick = elemento.removeFromList(li.innerText)
      }*/
  
      addToDo(){
          let content = document.getElementById("input").value;
          elemento.addToList(content);
      }


}

let elemento = new ToDoList()

let button = document.getElementById('button')

button.addEventListener('click', () => elemento.addToDo())
//ho studiato di nuovo il costruttore dal vecchio progetto, snellendo il codice e cercando di capire le funzioni passo passo, ne risulta un js più corto e funzionale, manca ancora la funzione per eliminare e il css