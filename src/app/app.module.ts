import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainPhotoComponent } from './main-photo/main-photo.component';
import { FooterComponent } from './footer/footer.component';
import { CardsComponent } from './cards/cards.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CityEditorComponent } from './rent-editor/rent-editor.component';
import { RentEditorComponent } from './rent-editor/rent-editor.component';
// import { masterFirebaseConfig } from './api-keys';
// import { AngularFireModule } from 'angularfire2/database';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
//
// export const firebaseConfig = {
//   apiKey: masterFirebaseConfig.apiKey,
//   authDomain: masterFirebaseConfig.authDomain,
//   databaseURL: masterFirebaseConfig.databaseURL,
//   storageBucket: masterFirebaseConfig.storageBucket
// };

@NgModule({
  declarations: [
    AppComponent,
    MainPhotoComponent,
    FooterComponent,
    HeaderComponent,
    CardsComponent,
    DropdownComponent,
    ReactiveFormsModule,
    RentEditorComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
    // ,
    // AngularFireModule.initializeApp(firebaseConfig),
    // AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
