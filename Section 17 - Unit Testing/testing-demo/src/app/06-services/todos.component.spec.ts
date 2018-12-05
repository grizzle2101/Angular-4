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

    //Passing Mock
    component = new TodosComponent(service);
  });

  //Test Case 1 - NgOnInit
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

  //Task 1 - Implment Add Tests:
  //-ToDo is sent to Service
  //-After Add, the DOM is Updated.
  //-Failing the Add, an Error is returned.

  //Scenario 1 - Verify it makes Server Call
  it('Should Sent Correct ToDo item to Server', () => {
    //Arrange
    let spy = spyOn(service, 'add').and.callFake(t => {
      return Observable.empty();
    });

    //Act
    component.add();

    //Assert
    //We just need to ensure the Spy was called the Act part is done.
    expect(spy).toHaveBeenCalled();
  });


    //Scenario 2 - Verify it adds the Item returned from server, into DOM.
    it('Should Add Item returned from Server into the Todo List.', () => {
      //Arrange
      let todo = {id: 1};
      let spy = spyOn(service, 'add').and.returnValue(Observable.from([todo]));

      //Act
      component.add();
  
      //Assert
      expect(component.todos.length).toBe(1);
    });

     //Scenario 3 - Verify on Failure, we put that error in the Message property.
     it('Should update the message property on failure from the service.', () => {
      //Arrange
      let error = 'error from the server';
      let spy = spyOn(service, 'add').and.returnValue(Observable.throw(error));

      //Act
      component.add();
  
      //Assert
      expect(component.message).toBe(error);
    });

});
