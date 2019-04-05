import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-rent-editor',
  templateUrl: './rent-editor.component.html',
  styleUrls: ['./rent-editor.component.css']
})
export class RentEditorComponent implements OnInit {

  rent = new FormControl(' ');

  constructor() { }

  ngOnInit() {
  }

}
