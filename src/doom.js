import Todo from "./todos.js";
import todoArr from "./index";
import Store from "./storage"

class UI {
    static addTodo(e) {
        const form = document.querySelector("#todoForm");
        e.preventDefault();

        const title = document.querySelector("#title");
        const description = document.querySelector("#description");
        const dueDate = document.querySelector("#dueDate");
        const priority = document.querySelector("#priority");
        let newTodo = new Todo(title.value, description.value, dueDate.value, priority.value);
        todoArr.push(newTodo);
        Store.tasksFromStorage(todoArr);
        UI.printTask(todoArr);
        form.reset();
    }

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
}

export default UI;






