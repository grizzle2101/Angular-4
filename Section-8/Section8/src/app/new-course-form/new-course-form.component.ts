import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent
{
  //Task 2 - Create Form Group w FormArray
  form = new FormGroup ({
    topics: new FormArray([])
  });


  //Task 3 - AddTopic to Array
  addTopic(topic: HTMLInputElement)
  {
    this.topics.push(new FormControl(topic.value));
    topic.value='';
  }

  //Task 5 - Refactor - add Getter
  get topics()
  {
    return this.form.get('topics')  as FormArray;
  }

  //Task 6 - Remove Topics
  removeTopic(topic: FormControl)
  {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }
}
