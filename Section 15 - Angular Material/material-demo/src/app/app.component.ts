import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //Task 2 - Create Categories List:
  categories = [
    {name: 'Beginner'},
    {name: 'Intermediate'},
    {name: 'Advanced'}
  ];

  selectCategory(category: any)
  {
    //Filter Selected Item from Deselection process.
    this.categories
    .filter(c => c != category)
    .forEach(c => c['selected'] = false); 
    //C has no definition of Selected, need to use [magicstrings]

    //Finally Set our Item.
    category.selected = !category.selected;
  }
}
