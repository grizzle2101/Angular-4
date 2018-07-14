import { Component } from '@angular/core';
import { FavouriteChangedEventArgs } from './star/star.component';
import { LikeEventArgs } from './like/like.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tweet = {
    title: "Tweet Title",
    isLiked: true,
    likeCount: 10
  }
  onLike(eventArgs : LikeEventArgs)
  {
    console.log("Toastr Message: Tweet Liked!" , eventArgs.newValue);
  }
}
