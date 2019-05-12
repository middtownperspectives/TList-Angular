import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  FaqComponent,
  HomeComponent,
  TeasComponent,
  ContactComponent,
  TeaComponent,
} from './pages/pages';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'faq', component: FaqComponent},
  { path: 'tea-details/:id', component: TeaComponent},
  { path: 'all-teas', component: TeasComponent},
  { path: 'contact', component: ContactComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
