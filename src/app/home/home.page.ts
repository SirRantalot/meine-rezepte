import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { DayNightComponent } from '../day-night/day-night.component';
import { BatteryComponent } from '../battery/battery.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, DayNightComponent, BatteryComponent],
})
export class HomePage {
  constructor() {}
}
