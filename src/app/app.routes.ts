import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VehicleListComponent } from './pages/vehicle-list/vehicle-list.component';
import { VehicleDetailsComponent } from './pages/vehicle-details/vehicle-details.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'vehicles', component: VehicleListComponent, title: 'Vehicles' },
  { path: 'vehicle/:id', component: VehicleDetailsComponent, title: 'Vehicle Details' },
  { path: '**', component: NotFoundComponent, title: 'Page Not Found' }
];
