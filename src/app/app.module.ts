import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComposantPresentationComponent } from './composant-presentation/composant-presentation.component';

import { MyTimerComponent } from './my-timer/my-timer.component';


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ComposantPresentationComponent
=======
    MyTimerComponent
>>>>>>> 043422bf6d468f7a2dc68a39d4506a9537ca40e4
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
