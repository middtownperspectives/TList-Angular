import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule,
         MatMenuModule, MatTreeModule, MatInputModule, MatSelectModule, MatRadioModule } from '@angular/material';

import { ContactComponent, FaqComponent, HomeComponent, TeasComponent, TeaComponent} from './pages/pages';
import { ContactFormComponent, FaqTreeComponent, TlistDashboardComponent, NavigationComponent,
         SingleTeaComponent } from './components/components';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeaListMaterialModule } from './modules/tealist-material.module';


import {TeaServiceService } from './services/tea-service.service';

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
    TeaComponent,
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
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [TeaServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
