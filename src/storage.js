import todoArr from ".";

class Store {
    static tasksFromStorage(arr) {
        localStorage.setItem('myTasksStorage', JSON.stringify(arr));
        arr = JSON.parse(localStorage.getItem('myTasksStorage'));
      }

      static removeTask(taskName, arr) {
        arr = JSON.parse(localStorage.getItem('myTasksStorage'));
      
        arr.forEach((task, index) => {
          if (task.title === taskName) {
            arr.splice(index, 1);
          }
        });
      
        localStorage.setItem('myTasksStorage', JSON.stringify(arr));
      }
}

export default Store;