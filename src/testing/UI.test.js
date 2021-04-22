import UI from '../doom';

let obj1 = {title: "todo1", description: "desc1", dueDate: "2021-04-29", priority: "low"}
let obj2 = {title: "todo1", description: "desc1", dueDate: "2021-04-29", priority: "medium"}
let obj3 = {title: "todo1", description: "desc1", dueDate: "2021-04-29", priority: "high"}

test('Return a new To Do object', () => {

  expect(UI.setPriority(obj1)).toBe("low")
  expect(UI.setPriority(obj2)).toBe("medium")
  expect(UI.setPriority(obj3)).toBe("high")
})