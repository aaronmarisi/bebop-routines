import { Routes } from '@angular/router';
import { AddRoutineComponent, RoutinesComponent } from '../routines/routines.module';

export const routes: Routes = [
  { path: 'routines', component: RoutinesComponent },
  { path: 'routine/add',      component: AddRoutineComponent },
  { path: '',
    redirectTo: '/routines',
    pathMatch: 'full'
  },
  { path: '**', component: RoutinesComponent }
];
