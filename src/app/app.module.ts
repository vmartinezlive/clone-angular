import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainPhotoComponent } from './main-photo/main-photo.component';
import { FooterComponent } from './footer/footer.component';
import { CardsComponent } from './cards/cards.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { ApartmentComponent } from './apartment/apartment.component';
import { ApartmentDetailComponent } from './apartment-detail/apartment-detail.component';





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
    SearchFormComponent,
    SignInComponent,
    WelcomeComponent,
    ApartmentComponent,
    ApartmentDetailComponent,


  ],
  imports: [
    BrowserModule,
    routing

    // ,
    // AngularFireModule.initializeApp(firebaseConfig),
    // AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
