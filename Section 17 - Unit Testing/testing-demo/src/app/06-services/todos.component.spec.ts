import { TodosComponent } from './todos.component'; 
import { TodoService } from './todo.service'; 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);

    //Passing Mock
    component = new TodosComponent(service);
  });

  //Test Case 1:
  it('Should set Todos to items returned from Server', () => {
    let todos = [1, 2, 3];
    //Arrange
    spyOn(service, 'getTodos').and.callFake(() => {
      return Observable.from([todos]);
    });

    //Act
    component.ngOnInit();

    //Assert
    expect(component.todos).toBe(todos);
  });
});


/* We can Implment our Spy like so, but it really doesn't provide any value, just noise into our code.
    We are only testing that NgOnInit populate the list, we don't care with what.
spyOn(service, 'getTodos').and.callFake(() => {
      return Observable.from([[
        {id: 1, title: 'One'},
        {id: 2, title: 'Two'},
        {id: 3, title: 'Three'},
      ]]);
    });
*/