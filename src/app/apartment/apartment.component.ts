import { Component, OnInit } from '@angular/core';
import { Apartment } from '../apartment.model';
import { Router } from '@angular/router';
import { ApartmentService } from '../apartment.service';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css'],
  providers: [ApartmentService]
})
export class ApartmentComponent implements OnInit {
  apartments: Apartment[];

  constructor(private router: Router, private apartmentService: ApartmentService) { }

  ngOnInit() {
    this.apartments = this.apartmentService.getApartments();
  }

  getToDetailPage(clickedApartment: Apartment) {
    this.router.navigate(['apartments', clickedApartment.id]);
  };

}
