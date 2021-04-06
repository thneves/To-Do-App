
class Store {
    static tasksFromStorage(arr) {
        localStorage.setItem('myTasksStorage', JSON.stringify(arr));
        arr = JSON.parse(localStorage.getItem('myTaksStorage'));
      }
}

export default Store;