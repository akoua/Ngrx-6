import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';

//Ngrx
import { StoreModule } from "@ngrx/store";
import { reducer } from '../state/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({appState: reducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
