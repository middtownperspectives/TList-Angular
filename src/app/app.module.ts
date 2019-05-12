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
         MatMenuModule, MatTreeModule, MatInputModule, MatSelectModule, MatRadioModule } from '@angular/material';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TlistDashboardComponent } from './components/tlist-dashboard/tlist-dashboard.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FaqTreeComponent } from './components/faq-tree/faq-tree.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FaqComponent,
    FaqTreeComponent,
    HomeComponent,
    TeasComponent,
    SingleTeaComponent,
    NavigationComponent,
    TlistDashboardComponent,
    ContactComponent,
    ContactFormComponent,
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
    MatMenuModule,
    MatTreeModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
