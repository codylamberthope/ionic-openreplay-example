import { Component, OnInit } from '@angular/core';
import { EventTrackingService } from './services/event-tracking.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent implements OnInit {
  constructor(private eventTrackingService: EventTrackingService) {}
  
  ngOnInit(): void {
    this.eventTrackingService.start();
  }

  
}
