import Todo from './todos';
import Project from './projects';

class UI {
  static addTodo() {
    const form = document.querySelector('#todoForm');

    const title = document.querySelector('#title');
    const description = document.querySelector('#description');
    const dueDate = document.querySelector('#dueDate');
    const priority = document.querySelector('#priority');
    const newTodo = new Todo(title.value, description.value, dueDate.value, priority.value);
    form.reset();
    return newTodo;
  }

  static printTask(arr, projectName) {
    const name = document.getElementById('projectTitle');
    name.innerHTML = '';
    name.innerHTML = projectName;
    const todoBody = document.getElementById('todoBody');
    todoBody.innerHTML = '';
    arr.forEach((task, index) => {
      const taskCard = document.createElement('tr');
      taskCard.innerHTML = `
            <th scope="row">${index + 1}</th>
            <td><button class="delete-btn btn-light rounded border-2">&#x2713</button></td>
            <td>${task.title}</td>
            <td>${task.dueDate}</td>
            <td  class="none des" id="${task.title}1">${task.description}</td>
            <td  class="none pri" id="${task.title}2">${task.priority}</td>
            <td><button class="details-btn btn-secondary rounded border border-3">See details</button></td>          `;
      const prior = UI.setPriority(task);
      taskCard.classList.add(prior);
      todoBody.appendChild(taskCard);
    });
  }

  static setPriority(task) {
    if (task.priority === 'low') {
      return 'low';
    } if (task.priority === 'medium') {
      return 'medium';
    }
    return 'high';
  }

  static seeDetails(title, arr) {
    let des; let
      pri;
    arr.forEach((project) => {
      project.todoList.forEach((item) => {
        if (item.title === title) {
          des = document.getElementById(`${item.title}1`);
          pri = document.getElementById(`${item.title}2`);
          des.classList.toggle('none');
          pri.classList.toggle('none');
        }
      });
    });
    return des;
  }

  static addProject() {
    const projectName = document.getElementById('projectName');
    const newProject = new Project(projectName.value, []);
    return newProject;
  }

  static printProjects(arr) {
    const projectList = document.getElementById('projectLits');
    projectList.innerHTML = '';
    arr.forEach((project, index) => {
      const li = document.createElement('li');
      li.classList.add('list-group-item');
      li.setAttribute('id', `li${index}`);
      li.innerHTML = `
          <div class="d-flex justify-content-between align-items-center">
            <a href="#" id="project${index}" class="projectLinks">${project.name}</a>
            <button class="delete-project btn-danger" id="deleteBtnProject${index}">X</button>
          </div>
          `;

      projectList.appendChild(li);
      document.getElementById('li0').classList.add('active');
      document.getElementById('deleteBtnProject0').classList.add('none');
    });
  }

  static printHome() {
    const mainDiv = document.querySelector('#content');
    mainDiv.classList.add('d-flex');
    mainDiv.innerHTML = `
        <div id="projects" class="w-25">
          <div class="m-3 d-flex justify-content-between align-items-center">
            <h2>Projects</h2>
            <button id="addProject" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">+ Add</button>
          </div>
          <ul id="projectLits" class="p-3 list-group"></ul>
        </div>
        <div id="todos"class="w-75 ml-5 mt-3"> 
          <h1 id="projectTitle"></h1>
          
          <!--TODO TABLE-->
          <div id="todoCont" class="">
            <table class="table" id="todoTable">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Complete</th>
                  <th>Task</th>
                  <th>Due Date</th>
                  <th>Description</th>
                  <th>Priority</th>
                </tr>
              </thead>
              <tbody id="todoBody">
              </tbody>
            </table>  
          </div>
          <button id="btnForm" class="btn btn-primary">Add New Task +</button>

          <!--TODO FORM-->
          <div id="formCont" class="none">
            <form action="/" class="d-flex flex-column w-25 mx-auto border border-2 rounded border-primary p-3" id="todoForm">
              <label for="title" class="form-label mt-1">Task</label>
              <input type="text" id="title" class="form-control" required>
              <label for="description" class="form-label mt-1">Description</label>
              <input type="text" id="description" class="form-control" required>
              <label for="dueDate" class="form-label mt-1">Due Date</label>
              <input type="date" id="dueDate" class="form-control" required>
              <label for="priority" class="form-label mt-1">Priority</label>
              <select id="priority" name="priority" class="form-control" required>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
              <input type="submit" id="submit-btn" value="Create New Task" class="btn btn-primary mt-3">
            </form> 
          </div>
        </div>

        <!--PROJECT FORM-->
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Project Name</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form role="form" action="/" id="projectForm">
                  <input type="hidden" name="_token" value="">
                  <div class="form-group">

                      <div>
                          <input type="text" class="form-control input-lg" name="password" id="projectName" required>
                      </div>
                  </div>
                  <div class="form-group">
                      <div>
                          <button type="submit" class="btn btn-info btn-block">Create Project</button>
                      </div>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
        `;
  }
}

export default UI;
