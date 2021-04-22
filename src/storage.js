
class Store {
  static tasksFromStorage(arr) {
    localStorage.setItem('myTasksStorage', JSON.stringify(arr));
  }

  static removeProject(projectName, arr) {
    arr.forEach((project, index) => {
      if (project.name === projectName) {
        arr.splice(index, 1);
      }
    });
    return arr;
  }

  static removeTask(taskName, arr) {
    arr.forEach((project) => {
      project.todoList.forEach((task, index) => {
        if (task.title === taskName) {
          project.todoList.splice(index, 1);
        }
      });
    });
    return arr;
  }
}

export default Store;