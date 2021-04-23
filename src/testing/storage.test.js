import Store from '../storage';

let arr = [];

beforeEach(() => {
  arr = [{ name: 'Today', todoList: [] }, {
    name: 'project1',
    todoList: [{
      title: 'todo1', description: 'desc1', dueDate: '2021-04-29', priority: 'medium',
    }, {
      title: 'todo2', description: 'des2', dueDate: '2021-04-30', priority: 'high',
    }],
  }];
});

test('Delete the right project', () => {
  expect(Store.removeProject('project1', arr)).not.toContain({
    name: 'project1',
    todoList: [{
      title: 'todo1', description: 'desc1', dueDate: '2021-04-29', priority: 'medium',
    }, {
      title: 'todo2', description: 'des2', dueDate: '2021-04-30', priority: 'high',
    }],
  });
});

test('Delete the right todo', () => {
  expect(Store.removeTask('todo2', arr)).not.toContain({
    title: 'todo2', description: 'des2', dueDate: '2021-04-30', priority: 'high',
  });
});