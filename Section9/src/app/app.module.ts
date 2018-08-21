import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';
import { MyErrorHandler } from './common/app-error-handler';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    PostService,
    //Task 2 - Replace Stock ErrorHandler w Custom
    {provide: ErrorHandler, useClass: MyErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
