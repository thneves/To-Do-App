import Todo from "./todos.js";
import todoArr from "./index";

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
        UI.PrintTask(todoArr);
        form.reset();
    }

    static PrintTask(list) {
        let todoCont = document.querySelector("#todoCont");
        todoCont.innerHTML = '';
        list.forEach((task) => {
          let taskCard = document.createElement('div');
          taskCard.classList.add('card', 'm-5', 'border', 'border-dark', 'border-2', 'text-center');
          taskCard.innerHTML = 
          `
          <ul class="list-group list-group-flush">
            <li class="list-group-item">${task.title}</li>
            <li class="list-group-item">${task.description}</li>
            <li class="list-group-item">${task.dueDate}</li>
            <li class="list-group-item">${task.priority}</li>
            <button class="delete-btn btn-danger">X</button>
          </ul>
          `;
          todoCont.appendChild(taskCard);
        });
      }
}

export default UI;






