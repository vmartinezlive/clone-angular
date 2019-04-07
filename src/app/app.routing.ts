import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ApartmentComponent } from './apartment/apartment.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'apartment',
    component: ApartmentComponent
  },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
