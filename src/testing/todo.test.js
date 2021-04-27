import Todo from '../todos';

let todo;

beforeEach(() => {
  todo = new Todo('one', 'one', '06/05/21', 'low');
});

test("Check todo object's key-values", () => {
  expect(todo.title).toBe('one');
  expect(todo.description).toBe('one');
  expect(todo.dueDate).toBe('06/05/21');
  expect(todo.priority).toBe('low');
});

test('Create a project object', () => {
  expect(todo).toBeInstanceOf(Todo);
});