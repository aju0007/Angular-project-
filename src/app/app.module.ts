import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CovidvalunteerregModule } from "./covidvalunteerreg/covidvalunteerreg.module";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./header/header.component";
import { CardComponent } from "./card/card.component";
var firebaseConfig = {
  apiKey: "AIzaSyCCbIR_OSor-_v69TFLqzKTrqPHGhmfuBM",
  authDomain: "gloria-foods-and-beverag-991a8.firebaseapp.com",
  databaseURL: "https://gloria-foods-and-beverag-991a8.firebaseio.com",
  projectId: "gloria-foods-and-beverag-991a8",
  storageBucket: "gloria-foods-and-beverag-991a8.appspot.com",
  messagingSenderId: "866387476297",
  appId: "1:866387476297:web:4e9f4a26d97d4326892498",
};
@NgModule({
  declarations: [AppComponent, HeaderComponent, CardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    CovidvalunteerregModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
