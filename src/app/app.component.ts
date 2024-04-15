import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'calendar-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'calendar';
  currentDate: Date = new Date();

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    // this.activatedRoute.url.subscribe((queryParams) => {
    // })
    console.log('Activated Route Snapshot', router.url);

    if (router.url === '/') {
      router.navigate([this.currentDate.getFullYear(),this.currentDate.getMonth()]);
    } else {
    }
  }
}
