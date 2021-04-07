import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./doom";
import UI from "./doom";
import Store from './storage';

let todoArr = [];

function findIndex(title) {
  todoArr.forEach((item) => {
    if(item.title === title) {
      document.getElementById(`${item.title}`).classList.toggle('none');
    }
  })
}


const mainDiv = document.querySelector("#content");
mainDiv.classList.add('d-flex');
mainDiv.innerHTML = `
<div id="projects" class="w-25"></div>
<div id="todos"class="w-75"> 
  <div id="todoCont" class="">
    <table class="table" id="todoTable">
      <thead>
        <tr>
          <th>#</th>
          <th>Status</th>
          <th>Title</th>
          <th>Due Date</th>
        </tr>
      </thead>
      <tbody id="todoBody">
      </tbody>
    </table>  
  </div>
  <button id="btnForm" class="btn btn-primary">Add +</button>
  <button id="printArr" class="btn btn-primary">Print Array</button>
</div>
`;


if (localStorage.getItem('myTasksStorage') === null) {
    todoArr = [];
  } else {
    todoArr = JSON.parse(localStorage.getItem('myTasksStorage'));
    UI.printTask(todoArr);
  }

  UI.printForm();

// Events

document.getElementById("todoForm").addEventListener("submit", (e) => {
  e.preventDefault();
  todoArr.push(UI.addTodo());
  Store.tasksFromStorage(todoArr);
  UI.printTask(todoArr);
});

document.getElementById('todoCont').addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-btn')) {
    //Store.removeTask(e.target.parentElement.firstChild.nextElementSibling.textContent, todoArr);
    // console.log(e.target.parentElement.nextElementSibling.textContent)
    todoArr = Store.removeTask(e.target.parentElement.nextElementSibling.textContent, todoArr);
    e.target.parentElement.parentElement.remove(); 
 }
});

document.getElementById('todoCont').addEventListener('click', (e) => {
  if (e.target.classList.contains('details-btn')) {
    // console.log(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent)
  //  console.log(findIndex(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent))
  //  document.getElementById(`detail${findIndex(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent)}`).classList.toggle('none');
  //  document.getElementById(`detail${index}`).classList.toggle('none');
  findIndex(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent)
 }
});

document.getElementById("btnForm").addEventListener('click', () => {
  document.getElementById("formCont").classList.toggle('none');
});

document.getElementById("printArr").addEventListener('click', () => {
  console.log(todoArr);
});

export default todoArr;



