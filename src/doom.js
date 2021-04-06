import Todo from "./todos.js";

class UI {
    static addTodo(e) {
        const form = document.querySelector("#todoForm");
        e.preventDefault();

        const title = document.querySelector("#title");
        const description = document.querySelector("#description");
        const dueDate = document.querySelector("#dueDate");
        const priority = document.querySelector("#priority");

        console.log(title.value, description.value, dueDate.value, priority.value);

        var newTodo = new Todo(title.value, description.value, dueDate.value, priority.value);

        form.reset();
    }
}

export default UI;






