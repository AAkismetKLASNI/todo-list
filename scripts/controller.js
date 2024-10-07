const todoList = document.querySelector('.todo-list');
const mainWrapper = document.querySelector('#main-wrapper');

async function getTasks() {
  const response = await fetch('http://localhost:3000/todos');
  const todos = await response.json();

  if (!todos.length) {
    const noTodos = document.createElement('div');
    noTodos.classList.add('no-todos');
    noTodos.textContent = 'Здесь пока ничего нет )';
    mainWrapper.appendChild(noTodos);
  }

  todos.reverse().forEach(({ id, title, isCompleted }) => {
    const li = document.createElement('li');
    li.setAttribute('checked', isCompleted);
    li.setAttribute('data-id', id);
    li.classList.add('todo');
    const operations = document.createElement('div');
    const textarea = document.createElement('textarea');

    if (isCompleted) {
      li.classList.add('todo-completed');
      // textarea.setAttribute('disabled', true);
    }

    textarea.value = title;
    textarea.placeholder = 'Необходимо заполнить!';
    operations.classList.add('operations');
    li.appendChild(textarea);
    li.appendChild(operations);
    todoList.appendChild(li);
  });
}

async function createTask(content) {
  await fetch('http://localhost:3000/todos', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      title: content,
      isCompleted: false,
    }),
  });
}

async function removeTask(id) {
  await fetch(`http://localhost:3000/todos/${id}`, { method: 'DELETE' });
}

async function editTask(id, task) {
  await fetch(`http://localhost:3000/todos/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      ...task,
    }),
  });
}

getTasks();

export { createTask, editTask, removeTask, getTasks };
