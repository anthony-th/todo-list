import { Component, ViewEncapsulation } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Guid } from "guid-typescript";
import { TodoArr } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  todos: TodoArr[] = [
    new TodoArr(Guid.create(), 'Turn on the computer', false),
    new TodoArr(Guid.create(), 'Read something in English for one hour (minimum)', false),
    new TodoArr(Guid.create(), 'Study MDN all your free time', false), 
    new TodoArr(Guid.create(), 'Turn off the computer and go to sleep', false),
    new TodoArr(Guid.create(), 'Repeat the previous day', false),
    new TodoArr(Guid.create(), 'Sleep more than 5 hours', true),
  ]

  onSubmit(form: NgForm) {
    if (!form.value.title) {
      alert('Your todo is empty');
    }
    else if (form.value.title.replace(/\s/g,"") == "") {
      alert('your todo have only space');
    } else {
      let todo = new TodoArr(Guid.create(), form.value.title, false);
      this.todos.push(todo);
      form.resetForm();
    }
  }

  onComplete(id: Guid) {
    let todo = this.todos.filter( x => x.id === id)[0];
    todo.isComplete = true;
  }

  onDelete(id: Guid) {
    let todo = this.todos.filter( x => x.id === id)[0];
    let index = this.todos.indexOf(todo, 0);
    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }
}
