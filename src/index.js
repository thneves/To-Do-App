import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'; 
import "./doom";
import UI from "./doom";
import Project from "./projects";
import Store from './storage';

//let todoArr = [];

//let defaultProject = new Project("Default Project", todoArr);

let projectArr = [];

const mainDiv = document.querySelector("#content");
mainDiv.classList.add('d-flex');
mainDiv.innerHTML = `
<div id="projects" class="w-25">
  <button id="addProject" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">+Add</button>
  <ul id="projectLits"></ul>
</div>
<div id="todos"class="w-75"> 
  <h1 id="projectTitle"></h1>
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
  <button id="printArr" class="btn btn-primary">printArr</button>
</div>
`;





let projects = document.getElementById("projects");

let addProject = (e) => {
  e.preventDefault();
  const projectName = document.getElementById("projectName");
  let newProject = new Project(projectName.value, [])
  projectArr.push(newProject);
  Store.tasksFromStorage(projectArr);
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
  if (e.target.classList.contains('projectLinks')) {
    projectArr.forEach(project => {
      if(project.name === e.target.textContent) {
        UI.printTask(project.todoList, project.name);
      }
    })
  } 
});

document.getElementById("submitProject").addEventListener("click", addProject);






if (localStorage.getItem('myTasksStorage') === null) {
    projectArr = [];
  } else {
    projectArr = JSON.parse(localStorage.getItem('myTasksStorage'));
    printProjects(projectArr);
  }   

//localStorage.setItem('myTasksStorage', JSON.stringify(todoArr));

  UI.printForm();

// Events

document.getElementById("todoForm").addEventListener("submit", (e) => {
  e.preventDefault();
  projectArr.forEach(project => {
    if(project.name === e.target.parentElement.parentElement.firstChild.nextElementSibling.textContent) {
      project.todoList.push(UI.addTodo());
      Store.tasksFromStorage(projectArr);
      UI.printTask(project.todoList, project.name);
    }
  })
});

document.getElementById('todoCont').addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-btn')) {
    projectArr = Store.removeTask(e.target.parentElement.nextElementSibling.textContent, projectArr);
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

document.getElementById("printArr").addEventListener('click', () => {
  console.log(projectArr);
});




