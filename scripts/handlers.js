import { arrow, minus, plus, trash, pencil, check } from './lucide.js';
import { randomPlaceholders } from './randomPlaceholder.js';
import { createTask, editTask, removeTask } from './controller.js';
const todoList = document.querySelector('.todo-list');
const createTodo = document.querySelector('.create-todo');
const input = document.createElement('input');

createTodo.appendChild(plus);

plus.onclick = () => {
  input.placeholder = randomPlaceholders();
  createTodo.appendChild(input).focus();
  createTodo.appendChild(arrow);
  createTodo.style.backgroundColor = '#141414';
  createTodo.insertBefore(minus, input);
  plus.remove();
};

minus.onclick = () => {
  input.remove();
  minus.remove();
  arrow.remove();
  createTodo.style.backgroundColor = '#111111';
  createTodo.classList.remove('shake');
  createTodo.appendChild(plus);
};

arrow.onclick = async () => {
  if (!input.value) {
    input.placeholder = 'Заполните поле!';
    createTodo.classList.add('shake');
    return;
  }

  await createTask(input.value);
};

trash.onclick = async (event) => {
  const id = event.target.closest('.todo').getAttribute('data-id');

  await removeTask(id);
};

pencil.onclick = async (event) => {
  const todo = event.target.closest('.todo');

  if (!todo.firstChild.value) {
    todo.classList.add('shake');
    return;
  }

  const id = todo.getAttribute('data-id');
  const newContent = todo.firstChild.value;

  if (!newContent) return;

  let isCompleted = todo.getAttribute('checked');

  isCompleted === 'true' ? (isCompleted = true) : (isCompleted = false);

  if (isCompleted) return;

  await editTask(id, { id, title: newContent, isCompleted });
};

check.onclick = async (event) => {
  const todo = event.target.closest('.todo');
  const title = todo.firstChild.value;

  if (!title) return;

  const id = todo.getAttribute('data-id');
  let isCompleted = todo.getAttribute('checked');

  isCompleted === 'true' ? (isCompleted = true) : (isCompleted = false);

  await editTask(id, { id, title, isCompleted: !isCompleted });
};

todoList.onclick = (event) => {
  const isTodo = event.target.closest('.todo');

  if (isTodo) {
    const isOperations = isTodo.lastChild;
    isTodo.firstChild.focus();

    isOperations.appendChild(check);
    isOperations.appendChild(pencil);
    isOperations.appendChild(trash);
  }
};
