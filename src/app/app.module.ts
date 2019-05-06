import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TeaListMaterialModule} from './modules/tealist-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/nav/nav.component';
import { FaqComponent } from './pages/faq/faq.component';
import { HomeComponent } from './pages/home/home.component';
import { TeasComponent } from './pages/teas/teas.component';
import { SingleTeaComponent } from './pages/single-tea/single-tea.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FaqComponent,
    HomeComponent,
    TeasComponent,
    SingleTeaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TeaListMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
