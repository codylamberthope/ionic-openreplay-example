import { Injectable, NgZone } from '@angular/core';
import { Platform } from '@ionic/angular';
import OpenReplay from '@openreplay/tracker';

@Injectable({
  providedIn: 'root'
})
export class EventTrackingService {

  constructor(private ngZone: NgZone, private platform: Platform) { }

  tracker: OpenReplay | null = null;

   
  public start(): void {
    this.ngZone.runOutsideAngular(() => {
      this.tracker = new OpenReplay({
        projectKey: "environment.openreplayProjectKey",
        ingestPoint: "environment.openreplayIngestUrl",
        captureIFrames: true,
        defaultInputMode: 0,
        inlineCss: 3,
      });
     
      // start tracker
      this.tracker.start({
        metadata: {
          user: 'dummy@outlook.com',
        },
      })
      .then((startedSession) => {
        if (startedSession.success) {
          this.tracker!.setUserID('dummy@outlook.com');
        }
        
      });
    });
  }

  trackEvent(eventType: string){
      // log event to OpenReplay
      this.tracker!.event(eventType, {
        user_device: this.platform.platforms().join(", "),
        url: this.platform.url()
      });
  }
}
