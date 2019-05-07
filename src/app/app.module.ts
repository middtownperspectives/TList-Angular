import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TeaListMaterialModule} from './modules/tealist-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FaqComponent } from './pages/faq/faq.component';
import { HomeComponent } from './pages/home/home.component';
import { TeasComponent } from './pages/teas/teas.component';
import { SingleTeaComponent } from './pages/single-tea/single-tea.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
         MatToolbarModule,
         MatButtonModule,
         MatSidenavModule,
         MatIconModule,
         MatListModule,
         MatGridListModule,
         MatCardModule,
         MatMenuModule } from '@angular/material';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TlistDashboardComponent } from './components/tlist-dashboard/tlist-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    FaqComponent,
    HomeComponent,
    TeasComponent,
    SingleTeaComponent,
    NavigationComponent,
    TlistDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TeaListMaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
