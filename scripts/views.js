import { gridTable2x2, gridTable3x3, rowsTable } from './lucide.js';

const views = document.querySelector('.views');
const todoList = document.querySelector('.todo-list');

views.appendChild(rowsTable);
views.appendChild(gridTable2x2);
views.appendChild(gridTable3x3);

const onChangeView = (view) => {
  todoList.style.gridTemplateColumns = view;
  localStorage.setItem('view', view);
};

onChangeView(localStorage.getItem('view'));

rowsTable.onclick = () => onChangeView('1fr');
gridTable2x2.onclick = () => onChangeView('1fr 1fr');
gridTable3x3.onclick = () => onChangeView('1fr 1fr 1fr');
