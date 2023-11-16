// ui.component.ts
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss'],
  standalone: true,
  imports: [FormsModule, IonicModule],
})
export class UiComponent {
  text = '';
  rangeValue = 0;
  rangeValue2 = 0;
  color = 'red';

  constructor(public toastController: ToastController) {}

  async presentToast() {
    const toast = await this.toastController.create({
      message: `You selected ${this.color}`,
      duration: 2000
    });
    toast.present();
  }
}