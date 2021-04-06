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

<form action="/" class="d-flex flex-column w-25 mx-auto d-none" id="todoForm">
<label for="title" class="form-label">Title</label>
<input type="text" id="title" class="form-control" required>

<label for="description" class="form-label">Description</label>
<input type="text" id="description" class="form-control" required>

<label for="dueDate" class="form-label">Due Date</label>
<input type="date" id="dueDate" class="form-control" required>

<label for="priority" class="form-label">Priority</label>
<select id="priority" name="priority" class="form-control" required>
  <option value="low">low</option>
  <option value="mid">Mid</option>
  <option value="high">High</option>
</select>

<input type="submit" id="submit-btn" value="Create a new To Do" class="btn btn-primary">
</form> 




<div id="todoCont" class="w-75"></div>

`;

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
    Store.removeTask(e.target.parentElement.firstChild.nextElementSibling.textContent, todoArr);
    e.target.parentElement.parentElement.remove(); 
 }
});

export default todoArr;



