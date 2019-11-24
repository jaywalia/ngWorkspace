import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgCalcModule } from 'ng-calc';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgCalcModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
