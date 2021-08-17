import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComposantPresentationComponent } from './composant-presentation/composant-presentation.component';

import { MyTimerComponent } from './my-timer/my-timer.component';


@NgModule({
  declarations: [
    AppComponent,

    ComposantPresentationComponent,

    MyTimerComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
