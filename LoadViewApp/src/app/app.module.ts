import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoadViewModule } from './load-view/load-view.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoadViewModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
