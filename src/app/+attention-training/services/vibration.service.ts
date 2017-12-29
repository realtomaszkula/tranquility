import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class VibrationService {
  vibrate() {
    window.navigator.vibrate(100);
  }
}
