import { Routes } from '@angular/router';
import { RefuelForm } from './features/refuels/components/refuel-form/refuel-form';
import { Dashboard } from './features/dashboard/dashboard/dashboard';

export const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'refuels/new', component: RefuelForm }
];