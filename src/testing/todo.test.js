import Todo from '../todos';

test('Check Todos object´s key-value', () => {
  const obj = new Todo('one', 'one', '06/05/21', 'low');
  expect(obj.title).toBe('one');
  expect(obj.description).toBe('one');
  expect(obj.dueDate).toBe('06/05/21');
  expect(obj.priority).toBe('low');
});
