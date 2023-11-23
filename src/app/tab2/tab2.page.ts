import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { GeolocatorComponent } from '../geolocator/geolocator.component';
import { BatteryComponent } from '../battery/battery.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, GeolocatorComponent,BatteryComponent]
})
export class Tab2Page {

  constructor() {}

}
