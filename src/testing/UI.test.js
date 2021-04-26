import UI from '../doom';

let arr; let obj1; let obj2; let obj3; let
  getElementByIdMock;

beforeEach(() => {
  obj1 = {
    title: 'todo1', description: 'desc1', dueDate: '2021-04-29', priority: 'low',
  };
  obj2 = {
    title: 'todo2', description: 'desc1', dueDate: '2021-04-29', priority: 'medium',
  };
  obj3 = {
    title: 'todo3', description: 'desc1', dueDate: '2021-04-29', priority: 'high',
  };
  arr = [{ name: 'Today', todoList: [obj1, obj2, obj3] }];

  getElementByIdMock = jest.spyOn(document, 'getElementById').mockImplementation(() => {
    const des = document.createElement('td');
    des.classList.add('none');
    return des;
  });
});

test('Throw an error because addTodo depends on the DOM ', () => {
  expect(() => UI.addTodo()).toThrow();
});

test('Setting low-medium-high priorities', () => {
  expect(UI.setPriority(obj1)).toBe('low');
  expect(UI.setPriority(obj2)).toBe('medium');
  expect(UI.setPriority(obj3)).toBe('high');
});

test('None class toggle on td tag', () => {
  const detail = UI.seeDetails('todo1', arr);
  expect(getElementByIdMock).toHaveBeenCalled();
  expect(detail.getAttribute('class')).not.toBe('none');
});

test('There is no classes on td tag', () => {
  const detail = UI.seeDetails('todo1', arr);
  expect(detail.getAttribute('class')).toBe('');
});
