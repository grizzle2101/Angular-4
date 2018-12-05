import { TodoFormComponent } from './todo-form.component'; 
import { FormBuilder } from '@angular/forms';

describe('TodoFormComponent', () => {
  var component: TodoFormComponent; 

  //Task 1 - Setup
  //Import Instance of FormBuilder Class
  beforeEach(() => {
    component = new TodoFormComponent(new FormBuilder());
  });

  //Task 2 - Defint Test Cases
  //Test Case 1 - Should create 2 form control objecs Name & Email
  it('Should create 2 form control objects', () => {
    //Assert
    expect(component.form.contains('name')).toBeTruthy(); //Expect Name in Form
    expect(component.form.contains('email')).toBe(true); //Expect Email in Form
  });

  //Test Case 2 - Test the Validator:
  it('Should make the form control name Required', () => {
    //Arrange
    let control = component.form.get('name');

    //Act
    control.setValue('');

    //Assert
    expect(control.valid).toBeFalsy();
  });
});