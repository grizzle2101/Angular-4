import { Component } from '@angular/core';
import { FavouriteChangedEventArgs } from './star/star.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: "Title",
    isFavourite: false
  }
  onFavouriteChange(eventArgs: FavouriteChangedEventArgs)
  {
    console.log("Favourite Changed - " , eventArgs);
  }
}
