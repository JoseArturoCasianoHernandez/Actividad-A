import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
// import { CommentsPipe } from './comments.pipe';



@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    HomeComponent,
    // CommentsPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AboutComponent,
    ContactComponent,
    HomeComponent,
  ]
})
export class PagesModule { }
