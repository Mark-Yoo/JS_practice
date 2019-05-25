const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function toggleCompletedById(id) {
  // return todos.map(function (item) {
  //     return item.id === id ? Object.assign(item, { completed: !item.completed }) : item;
  // });
  return todos.map(item => (item.id === id ? Object.assign(item, { completed: !item.completed }) : item));
}

toggleCompletedById(2);

console.log(todos);
/*
[
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: false },
  { id: 1, content: 'Javascript', completed: false }
]
*/
