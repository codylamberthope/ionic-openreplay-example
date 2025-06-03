import { Component } from '@angular/core';
import { EventTrackingService } from '../services/event-tracking.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor(private eventTrackingService: EventTrackingService) {}


  menuOpened(){
    this.eventTrackingService.trackEvent("MENU_OPENED");
  }
}
