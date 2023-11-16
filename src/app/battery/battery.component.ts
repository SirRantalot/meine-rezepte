// battery.component.ts
import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

const { Battery, Network } = Plugins;

@Component({
  selector: 'app-battery',
  templateUrl: './battery.component.html',
  styleUrls: ['./battery.component.scss'],
  standalone: true,
  imports: [FormsModule, IonicModule],
})
export class BatteryComponent implements OnInit {
  batteryLevel = 0;
  networkStatus = '';

  async ngOnInit() {
    const batteryInfo = await Battery['getStatus']();
    this.batteryLevel = batteryInfo.level;

    const networkInfo = await Network['getStatus']();
    this.networkStatus = networkInfo.connectionType;
  }
}