import Project from '../projects';

test("Check Project object's key-values", () => {
  const obj = new Project('project', []);
  expect(obj.name).toBe('project');
  expect(obj.todoList).toEqual([]);
});