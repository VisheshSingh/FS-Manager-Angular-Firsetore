import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { environment } from "../environments/environment";

import { AppComponent } from "./app.component";
import { ItemsComponent } from "./components/items/items.component";

import { ItemService } from "./services/item.service";
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, ItemsComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, "angularFS"),
    AngularFirestoreModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule {}
