import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'calendar-calendar',
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {
  constructor(private activatedRoute: ActivatedRoute) {
    console.log('Activated Route Snapshot', this.activatedRoute.snapshot);
  }
}
