const $inputTodo = document.querySelector('.input-todo');
const $todos = document.querySelector('.todos');
const $customCheckbox = document.querySelector('.custom-checkbox');
const $btn = document.querySelector('.btn');
const $completedTodo = document.querySelector('.completed-todos');
const $activeTodos = document.querySelector('.active-todos');

let todos = [
  { id: 1, content: 'HTML', completed: true },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'Javascript', completed: false }
];

function render() {
  let html = '';
  todos.forEach(function ({ id, content, completed }) {
    html += `<li id="${id}" class="todo-item"><input class="custom-checkbox" type="checkbox" ${completed ? 'checked' : ''} id= "ck-${id}"><label for="ck-${id}">${content}</label><i class="remove-todo far fa-times-circle"></i></li>`;
  });
  $todos.innerHTML = html;
}

function countNumber() {
  const countCompleted = [];

  todos.forEach(function (todo) {
    if (todo.completed === true) {
      countCompleted.push(todo.completed);
    }
  });
  $completedTodo.innerHTML = countCompleted.length;
}

function countLefted() {
  const countLeftitem = [];

  todos.forEach(function (todo) {
    if (todo.completed === false) {
      countLeftitem.push(todo.completed);
    }
  });
  $activeTodos.innerHTML = countLeftitem.length;
}

function generatedId() {
  return todos.length ? Math.max(...todos.map(todo => todo.id + 1)) : 1;
}


$todos.addEventListener('click', function (e) {
  if (!e.target.classList.contains('remove-todo')) return;
  todos = todos.filter(function (todo) {
    return todo.id !== +e.target.parentNode.id;
  });
  countLefted();
  countNumber();
  render();
});

$todos.addEventListener('change', function (e) {
  const id = +e.target.parentNode.id;
  todos = todos.map(function (todo) {
    return todo.id === id ? Object.assign({}, todo, { completed: !todo.completed }) : todo;
  });
  countLefted();
  countNumber();
  render();
});

$inputTodo.addEventListener('keyup', function (e) {
  const content = $inputTodo.value.trim();
  if (content === '' || e.keyCode !== 13) return;

  todos = [{ id: generatedId(), content, completed: false }, ...todos];
  render();
});

$customCheckbox.addEventListener('click', function (e) {
  if (!e.target.classList.contains('custom-checkbox')) return;
  if ($customCheckbox.checked) {
    todos = todos.map(function (todo) {
      return !todo.completed ? Object.assign({}, todo, { completed: true }) : todo;
    });
  } else {
    todos = todos.map(function (todo) {
      return todo.completed ? Object.assign({}, todo, { completed: false }) : todo;
    });
  }
  countLefted();
  countNumber();
  render();
});

$btn.addEventListener('click', function () {
  todos = todos.filter(function (todo) {
    return (!todo.completed);
  });
  countLefted();
  countNumber();
  render();
});

countNumber();
countLefted();
render();
