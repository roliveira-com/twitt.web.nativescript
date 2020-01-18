import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { TweetCardComponent } from './tweet-card/tweet-card.component';


@NgModule({
  declarations: [
    NavbarComponent,
    TweetCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    TweetCardComponent
  ]
})
export class ComponentsModule { }
