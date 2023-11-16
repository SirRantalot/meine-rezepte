import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'day-night',
    loadComponent: () => import('./day-night/day-night.component').then((m) => m.DayNightComponent),
  },
  {
    path: 'ui',
    loadComponent: () => import('./ui/ui.component').then((m) => m.UiComponent),
  },
  {
    path: 'battery',
    loadComponent: () => import('./battery/battery.component').then((m) => m.BatteryComponent),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
