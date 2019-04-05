import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainPhotoComponent } from './main-photo/main-photo.component';
import { FooterComponent } from './footer/footer.component';
import { CardsComponent } from './cards/cards.component';
import { DropdownComponent } from './dropdown/dropdown.component';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    MainPhotoComponent,
    FooterComponent,
    HeaderComponent,
    CardsComponent,
    DropdownComponent,

  ],
  imports: [
    BrowserModule,
    // NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
