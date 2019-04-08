import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Apartment } from '../apartment.model';
import { ApartmentService } from '../apartment.service';

@Component({
  selector: 'app-apartment-detail',
  templateUrl: './apartment-detail.component.html',
  styleUrls: ['./apartment-detail.component.css'],
  providers: [ApartmentService]
})
export class ApartmentDetailComponent implements OnInit {
  apartmentId: number;
  apartmentToDisplay: Apartment;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private apartmentService: ApartmentService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParamaters) => {
      this.apartmentId = parseInt(urlParamaters['id']);
    });
    this.apartmentToDisplay = this.albumService.getApartmentsById(this.apartmentId);
  }

}
