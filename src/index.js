import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./doom";
import UI from "./doom";
import Project from "./projects";
import Store from './storage';

let todoArr = ["hola", "hello"];

let defaultProject = new Project("Default Project", todoArr);

let projectArr = [defaultProject];

const mainDiv = document.querySelector("#content");
mainDiv.classList.add('d-flex');
mainDiv.innerHTML = `
<div id="projects" class="w-25">
<button id="addProject" class="btn btn-primary">+Add</button>
<ul id="projectLits"></ul>
</div>
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
</div>
`;





let projects = document.getElementById("projects");

let addProject = () => {
  let newProject = new Project("Project1", [])
  projectArr.push(newProject);
  printProjects();
}

let printProjects = () => {
  let projectList = document.getElementById("projectLits");
  projectList.innerHTML = '';
  projectArr.forEach( (project, index) => {
    let li = document.createElement("li");
    li.innerHTML = `
    <a href="#" id="project${index}" class="projectLinks">${project.name}</a>
    `;
    projectList.appendChild(li);
  })
}

document.getElementById('projectLits').addEventListener('click', (e) => {
  //console.log(e.target.textContent);
  if (e.target.classList.contains('projectLinks')) {
    projectArr.forEach(project => {
      if(project.name === e.target.textContent) {
        console.log(project.todoList);
        UI.printTask(project.todoList);
      }
    })
  } 
});

document.getElementById("addProject").addEventListener("click", addProject);






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
    todoArr = Store.removeTask(e.target.parentElement.nextElementSibling.textContent, todoArr);
    e.target.parentElement.parentElement.remove(); 
 }
});

document.getElementById('todoCont').addEventListener('click', (e) => {
  if (e.target.classList.contains('details-btn')) {
  UI.seeDetails(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent, todoArr);
 }
});

document.getElementById("btnForm").addEventListener('click', () => {
  document.getElementById("formCont").classList.toggle('none');
});

export default todoArr;



