import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule, MatSidenavModule, MatToolbarModule} from "@angular/material";
import {HttpClientModule} from "@angular/common/http";




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
      HttpClientModule,

      BrowserModule,
      MatToolbarModule,
      MatSidenavModule,
      MatButtonModule,

      AppRoutingModule,
      BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }
