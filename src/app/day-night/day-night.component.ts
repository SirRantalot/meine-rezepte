import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-day-night',
  templateUrl: './day-night.component.html',
  styleUrls: ['./day-night.component.scss'],
  standalone: true,
  imports: [FormsModule, IonicModule],
})
export class DayNightComponent {
  selectionDayNight: string;
  constructor() {
    this.selectionDayNight = 'light';
  }
}
