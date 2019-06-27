import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './todo.interface';
import { navItem } from './navitem.type';

@Pipe({
  name: 'todosfilter'
})
export class TodosfilterPipe implements PipeTransform {

  transform(todos: Todo[], navStatus: navItem): Todo[] {
    console.log(todos);
    return todos.filter(todo => {
      if (navStatus === 'Active') { return !todo.completed };
      if (navStatus === 'Completed') { return todo.completed };
      return true;
    })
  }

}
