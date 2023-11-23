import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { DayNightComponent } from '../day-night/day-night.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, DayNightComponent],
})
export class Tab1Page {
  constructor() {}
}
