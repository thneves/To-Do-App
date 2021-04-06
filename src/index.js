import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./doom";
import Todo from "./todos.js";
import UI from "./doom";
import PrintTask from './printTask';

let todoArr = [];

const mainDiv = document.querySelector("#content");

mainDiv.innerHTML = `

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

`;

let tasksFromStorage = () => {
  localStorage.setItem('myTasksStorage', JSON.stringify(todoArr));
  todoArr = JSON.parse(localStorage.getItem('myTaksStorage'));
  PrintTask(todoArr);
}

const form = document.getElementById("todoForm");

//console.log(form);

form.addEventListener('submit', () => {
  todoArr.push(UI.addTodo());
  console.log(todoArr);
  tasksFromStorage();
});



