import {
  createElement,
  BadgePlus,
  BadgeMinus,
  CircleChevronRight,
  Trash2,
  Pencil,
  BadgeCheck,
  Rows3,
  Grid2X2,
  Grid3X3,
} from '/web_modules/lucide.js';

const plus = createElement(BadgePlus);
const minus = createElement(BadgeMinus);
const arrow = createElement(CircleChevronRight);
const trash = createElement(Trash2);
const pencil = createElement(Pencil);
const check = createElement(BadgeCheck);
const rowsTable = createElement(Rows3);
const gridTable2x2 = createElement(Grid2X2);
const gridTable3x3 = createElement(Grid3X3);

plus.setAttribute('stroke', '#cfcfcf');
trash.setAttribute('stroke', '#E44332');
minus.setAttribute('stroke', '#E44332');
arrow.setAttribute('stroke', '#E44332');
pencil.setAttribute('stroke', '#17A43F');
check.setAttribute('stroke', '#cfcfcf');
rowsTable.setAttribute('stroke', '#cfcfcf');
gridTable2x2.setAttribute('stroke', '#cfcfcf');
gridTable3x3.setAttribute('stroke', '#cfcfcf');

export {
  plus,
  minus,
  arrow,
  trash,
  pencil,
  check,
  rowsTable,
  gridTable2x2,
  gridTable3x3,
};
