import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ApartmentComponent } from './apartment/apartment.component';
import { ApartmentDetailComponent } from './apartment-detail/apartment-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'apartment',
    component: ApartmentComponent
  },
  {
    path: 'apartment/:id',
    component: ApartmentComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
