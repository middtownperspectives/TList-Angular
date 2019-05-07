import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  FaqComponent,
  HomeComponent,
  SingleTeaComponent,
  TeasComponent,
} from './pages/pages';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'faq', component: FaqComponent},
  { path: 'tea', component: SingleTeaComponent},
  { path: 'all-teas', component: TeasComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
