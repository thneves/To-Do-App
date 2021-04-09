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

      static printForm() {
        const todos = document.querySelector("#todos");
        let form = document.createElement("div");
        form.classList.add("none");
        form.setAttribute("id", "formCont");
        form.add
        form.innerHTML = `

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

        `;
        todos.appendChild(form);
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
}

export default UI;

