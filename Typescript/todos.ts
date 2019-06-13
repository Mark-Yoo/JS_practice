interface todoElement {
  id: number,
  content: string,
  completed: boolean,
}

let todoList: todoElement[] = [
  { id: 1, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true }
];

class Todolist {
  $todos: HTMLElement;
  $completeAll: HTMLElement;
  $activeTodos: HTMLElement;
  todos: any;

  constructor(todoList: object = []) {
    this.todos = todoList;
    this.$todos = document.querySelector('.todos');
    this.$completeAll = document.querySelector('.complete-all');
    this.$activeTodos = document.querySelector('.active-todos');

    this.render();

  }

  render() {
    let html: string = '';
    this.todos.forEach(todo => 
      html += `
      <li id="${todo.id}" class="todo-item">
        <input class="custom-checkbox" type="checkbox" ${todo.completed ? 'checked' : ''} id= "ck-${todo.id}">
        <label. for="ck-${todo.id}">${todo.content}</label.>
        <i class="remove-todo far fa-times-circle"></i>
      </li>`);
      this.$todos.textContent = html;
  }
  
  
}