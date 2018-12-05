import { TodosComponent } from './todos.component'; 
import { TodoService } from './todo.service'; 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';


describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });


  it('Should set Todos to items returned from Server', () => {
    //Arrange
    let todos = [1, 2, 3];
    spyOn(service, 'getTodos').and.callFake(() => {
      return Observable.from([todos]);
    });

    //Act
    component.ngOnInit();

    //Assert
    expect(component.todos).toBe(todos);
  });


  it('Should Sent Correct ToDo item to Server', () => {
    //Arrange
    let spy = spyOn(service, 'add').and.callFake(t => {
      return Observable.empty();
    });

    //Act
    component.add();

    //Assert
    expect(spy).toHaveBeenCalled();
  });


    it('Should Add Item returned from Server into the Todo List.', () => {
      //Arrange
      let todo = {id: 1};
      let spy = spyOn(service, 'add').and.returnValue(Observable.from([todo]));

      //Act
      component.add();
  
      //Assert
      expect(component.todos.length).toBe(1);
    });


     it('Should update the message property on failure from the service.', () => {
      //Arrange
      let error = 'error from the server';
      let spy = spyOn(service, 'add').and.returnValue(Observable.throw(error));

      //Act
      component.add();
  
      //Assert
      expect(component.message).toBe(error);
    });


    //Delete Tests:
    //Scenario 1 - Should call Delete if User confirms
    it('Should call the server to delete a todo item if user confirms', () => {
      //Arrange
      let todo = 1;
      spyOn(window, 'confirm').and.returnValue(true);
      let spy = spyOn(service, 'delete').and.returnValue(Observable.empty());

      //Act
      component.delete(todo)

      //Assert
      expect(spy).toHaveBeenCalledWith(todo);
    });


    //Scenario 2 - If User Cancel, should not Delete.
    it('Should NOT call the server to delete a todo item if user cancels', () => {
      //Arrange
      let todo = 1;
      spyOn(window, 'confirm').and.returnValue(false);
      let spy = spyOn(service, 'delete').and.returnValue(Observable.empty);

      //Act
      component.delete(todo)

      //Assert
      expect(spy).not.toHaveBeenCalled();
    });
});
