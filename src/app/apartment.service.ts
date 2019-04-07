import { Injectable } from '@angular/core';
import { Apartment } from './apartment.model';
import { APARTMENTS } from '.mock-apartments';

@Injectable()
export class ApartmentService {

  constructor() { }

  getApartments( ) {
    return APARTMENTS;
  }

}
