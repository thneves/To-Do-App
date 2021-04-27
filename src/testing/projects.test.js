import Project from '../projects';

let project;

beforeEach(() => {
  project = new Project('project1', []);
});

test("Check Project object's key-values", () => {
  expect(project.name).toBe('project1');
  expect(project.todoList).toEqual([]);
});

test('Create a Project object', () => {
  expect(project).toBeInstanceOf(Project);
});