import { Injectable } from '@angular/core';
import { Apartment } from './apartment.model';
import { APARTMENTS } from './mock-apartments';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ApartmentService {
  apartments: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.apartments = database.list('apartments');
  }

  getApartments( ) {
    return this.apartments;
  }

  getApartmentsById(apartmentId: number) {
    for (var i = 0; i <= APARTMENTS.length -1; i++) {
      if (APARTMENTS[i].id === apartmentId) {
        return APARTMENTS[i];
      }
    }
  }

}
