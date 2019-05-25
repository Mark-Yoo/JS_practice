const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function countCompletedTodos() {
  // const onlyTrue = [];
  // todos.map(function (item) {
  //   if (item.completed === true) {
  //     onlyTrue.push(item.completed);
  //   }
  // });
  // return onlyTrue.length;
  const onlyTrue = [];
  todos.map((item) => {
    if (item.completed === true) {
      onlyTrue.push(item.completed);
    }
  });
  return onlyTrue.length;
}

console.log(countCompletedTodos()); // 1
