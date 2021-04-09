import Todo from "./todos.js";
import Project from "./projects"

class UI {
    static addTodo() {
        const form = document.querySelector("#todoForm");
        
        const title = document.querySelector("#title");
        const description = document.querySelector("#description");
        const dueDate = document.querySelector("#dueDate");
        const priority = document.querySelector("#priority");
        let newTodo = new Todo(title.value, description.value, dueDate.value, priority.value);
        form.reset();
        return newTodo
    }

    static printTask(arr, projectName) {

        let name = document.getElementById("projectTitle");
        name.innerHTML = "";
        name.innerHTML = projectName;

        let todoBody = document.getElementById("todoBody");
        todoBody.innerHTML = '';
        arr.forEach((task, index) => {
          let taskCard = document.createElement("tr");
          taskCard.innerHTML = 
          `
            <th scope="row">${index + 1}</th>
            <td><button class="delete-btn btn-danger">DONE</button></td>
            <td>${task.title}</td>
            <td>${task.dueDate}</td>
            <td  class="none ${task.title}">${task.description}</td>
            <td  class="none ${task.title}">${task.priority}</td>
            <td><button class="details-btn btn-secondary">See details</button></td>
            
          `;
          todoBody.appendChild(taskCard);
        });
      }

      static seeDetails(title, arr) {
        arr.forEach((project) => {
          project.todoList.forEach(item =>{
            if(item.title === title) {
              let list = document.getElementsByClassName(`${item.title}`);
              for (let item of list) {
                item.classList.toggle('none');
            }
          }
          })
        })
      }

      static addProject() {
        const projectName = document.getElementById("projectName");
        let newProject = new Project(projectName.value, [])
        return newProject
      }

      static printProjects(arr) {
        let projectList = document.getElementById("projectLits");
        projectList.innerHTML = '';
        arr.forEach((project, index) => {
          let li = document.createElement("li");
          li.innerHTML = `
          <a href="#" id="project${index}" class="projectLinks">${project.name}</a>
          `;
          projectList.appendChild(li);
        })
      }

      static printHome() {
        const mainDiv = document.querySelector("#content");
        mainDiv.classList.add('d-flex');
        mainDiv.innerHTML = `
        <div id="projects" class="w-25">
          <button id="addProject" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">+Add</button>
          <ul id="projectLits"></ul>
        </div>
        <div id="todos"class="w-75"> 
          <h1 id="projectTitle"></h1>
          
          <!--TODO TABLE-->
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

          <!--TODO FORM-->
          <div id="formCont" class="none">
            <form action="/" class="d-flex flex-column w-25 mx-auto" id="todoForm">
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
          </div>
        </div>

        <!--PROJECT FORM-->
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form role="form" action="/" id="projectForm">
                  <input type="hidden" name="_token" value="">
                  <div class="form-group">
                      <label class="control-label">Project Name</label>
                      <div>
                          <input type="text" class="form-control input-lg" name="password" id="projectName" required>
                      </div>
                  </div>
                  <div class="form-group">
                      <div>
                          <button type="submit" class="btn btn-info btn-block">Create Prject</button>
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
