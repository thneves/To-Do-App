
class Store {
    static tasksFromStorage(arr) {
        localStorage.setItem('myTasksStorage', JSON.stringify(arr));
        arr = JSON.parse(localStorage.getItem('myTasksStorage'));
      }

      static removeProject(projectName, arr) {
        arr = JSON.parse(localStorage.getItem('myTasksStorage'));
        arr.forEach((project, index) => {
          if (project.name === projectName) {
            arr.splice(index, 1);
          } 
        });
      
        localStorage.setItem('myTasksStorage', JSON.stringify(arr));
        return arr;
      
      }

      static removeTask(taskName, arr) {
        arr = JSON.parse(localStorage.getItem('myTasksStorage'));
        arr.forEach(project => {
          project.todoList.forEach((task, index) => {
            if (task.title === taskName) {
               project.todoList.splice(index, 1);
             } 
           });
        });
        localStorage.setItem('myTasksStorage', JSON.stringify(arr));
        return arr;
      }
}

export default Store;