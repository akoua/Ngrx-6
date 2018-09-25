import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//Ngrx
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";
import { RepoModule } from './repo/repo.module';
import { reducer } from './repo/state/repo.reducer';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: "ngrx_effects",
      maxAge: 14
    }),
    EffectsModule,
    RepoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
