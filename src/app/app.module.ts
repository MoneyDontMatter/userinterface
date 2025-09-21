import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Carbon Design System imports
import {
  ButtonModule,
  GridModule,
  TilesModule,
  HeaderModule,
  UIShellModule
} from 'carbon-components-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    GridModule,
    TilesModule,
    HeaderModule,
    UIShellModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
