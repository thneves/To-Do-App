import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./doom";
import UI from "./doom";
import Store from './storage';

let todoArr = [];

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
          <th>Title</th>
          <th>Due Date</th>
        </tr>
      </thead>
      <tbody id="todoBody">
      </tbody>
    </table>  
  </div>
  <button id="btnForm" class="btn btn-primary">Add +</button>
</div>
`;

UI.printForm();

if (localStorage.getItem('myTasksStorage') === null) {
    todoArr = [];
  } else {
    todoArr = JSON.parse(localStorage.getItem('myTasksStorage'));
    UI.printTask(todoArr);
  }


// Events

document.getElementById("todoForm").addEventListener("submit", UI.addTodo);

document.getElementById('todoCont').addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-btn')) {
    //Store.removeTask(e.target.parentElement.firstChild.nextElementSibling.textContent, todoArr);
    console.log(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
    Store.removeTask(e.target.parentElement.previousElementSibling.previousElementSibling.textContent, todoArr);
    e.target.parentElement.parentElement.remove(); 
 }
});

document.getElementById("btnForm").addEventListener('click', () => {
  document.getElementById("formCont").classList.toggle('none');
});

export default todoArr;



