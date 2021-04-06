

const PrintTask = (list) => {
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

    return taskCard;
  });
}

export default PrintTask;