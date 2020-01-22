import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.scss']
})
export class TweetsComponent implements OnInit {

  constructor(private router: Router) {
    router.events.subscribe((
      event => {
        if (event instanceof RouteConfigLoadStart) {
          console.log('START');
        }
        if (event instanceof RouteConfigLoadEnd) {
          console.log('FINISH');
        }
      }));
  }

  ngOnInit() {
  }

}
