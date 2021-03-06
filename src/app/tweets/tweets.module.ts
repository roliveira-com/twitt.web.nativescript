import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TweetsRoutingModule } from './tweets.routes';
import { TweetsComponent } from './tweets.component';


@NgModule({
  declarations: [
    TweetsComponent
  ],
  imports: [
    CommonModule,
    TweetsRoutingModule
  ]
})
export class TweetsModule { }
