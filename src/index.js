import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import "./doom";
import UI from "./doom";
import Project from "./projects";
import Store from './storage';

let projectArr = [];

UI.printHome();

if (localStorage.getItem('myTasksStorage') === null && projectArr.length == 0) {
  let defaultProject = new Project("Today", []);
  projectArr.push(defaultProject);
  Store.tasksFromStorage(projectArr);
  UI.printProjects(projectArr);
  UI.printTask(defaultProject.todoList, defaultProject.name);

} else {
  projectArr = JSON.parse(localStorage.getItem('myTasksStorage'));
  UI.printProjects(projectArr);
}

UI.printTask(projectArr[0].todoList, projectArr[0].name);

// EVENTS

document.getElementById("todoForm").addEventListener("submit", (e) => {
  e.preventDefault();
  projectArr.forEach(project => {
    if (project.name === e.target.parentElement.parentElement.firstChild.nextElementSibling.textContent) {
      project.todoList.push(UI.addTodo());
      Store.tasksFromStorage(projectArr);
      UI.printTask(project.todoList, project.name);
    }
  })
  document.getElementById("formCont").classList.toggle('none');
});

// DELETE BUTTONS

document.getElementById('todoCont').addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-btn')) {
    projectArr = Store.removeTask(e.target.parentElement.nextElementSibling.textContent, projectArr);
    e.target.parentElement.parentElement.remove();
  }
});

document.getElementById('projects').addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-project')) {
    projectArr = Store.removeProject(e.target.previousElementSibling.textContent, projectArr)
    e.target.parentElement.remove();
  }
});

// SEE DETAILS BUTTON

document.getElementById('todoCont').addEventListener('click', (e) => {
  if (e.target.classList.contains('details-btn')) {
    UI.seeDetails(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent, projectArr);
  }
});

document.getElementById("btnForm").addEventListener('click', () => {
  document.getElementById("formCont").classList.toggle('none');
});

document.getElementById("printArr").addEventListener('click', () => {
  console.log(projectArr);
});

document.getElementById("projectForm").addEventListener("submit", (e) => {
  projectArr.push(UI.addProject());
  Store.tasksFromStorage(projectArr);
  UI.printProjects(projectArr);
});

document.getElementById('projectLits').addEventListener('click', (e) => {
  if (e.target.classList.contains('projectLinks')) {
    projectArr.forEach(project => {
      if (project.name === e.target.textContent) {
        UI.printTask(project.todoList, project.name);
      }
    })
  }
});
