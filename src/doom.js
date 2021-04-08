import Todo from "./todos.js";

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

    static printTask(arr) {
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
        arr.forEach((item) => {
          if(item.title === title) {
            let list = document.getElementsByClassName(`${item.title}`);
            for (let item of list) {
              item.classList.toggle('none');
          }
          }
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
}

export default UI;




/*
    static printTask(list) {
        let todoCont = document.querySelector("#todoCont");
        todoCont.innerHTML = '';
        list.forEach((task) => {
          let taskCard = document.createElement('div');
          taskCard.classList.add('card', 'm-5', 'border', 'border-dark', 'border-2', 'text-center');
          taskCard.innerHTML = 
          `
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><strong>Task:</strong>${task.title}</li>
            <li class="list-group-item"><strong>Description:</strong>${task.description}</li>
            <li class="list-group-item"><strong>Due Date:</strong>${task.dueDate}</li>
            <li class="list-group-item"><strong>Priority:</strong>${task.priority}</li>
            <button class="delete-btn btn-danger">DONE</button>
          </ul>
          `;
          todoCont.appendChild(taskCard);
        });
      }
*/

