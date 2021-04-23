import UI from '../doom';

const obj1 = {
  title: 'todo1', description: 'desc1', dueDate: '2021-04-29', priority: 'low',
};
const obj2 = {
  title: 'todo2', description: 'desc1', dueDate: '2021-04-29', priority: 'medium',
};
const obj3 = {
  title: 'todo3', description: 'desc1', dueDate: '2021-04-29', priority: 'high',
};
const arr = [{ name: 'Today', todoList: [obj1, obj2, obj3] }];

test('Return a new To Do object', () => {
  expect(UI.setPriority(obj1)).toBe('low');
  expect(UI.setPriority(obj2)).toBe('medium');
  expect(UI.setPriority(obj3)).toBe('high');
});

test('Check if none class toggle', () => {
  const getElementByIdMock = jest.spyOn(document, 'getElementById').mockImplementation(() => {
    const des = document.createElement('td');
    des.classList.add('none');
    return des;
  });

  const detail = UI.seeDetails('todo1', arr);
  expect(getElementByIdMock).toHaveBeenCalled();
  expect(detail.getAttribute('class')).not.toBe('none');
});
