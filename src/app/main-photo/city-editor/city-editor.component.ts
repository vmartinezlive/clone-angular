import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-city-editor',
  templateUrl: './city-editor.component.html',
  styleUrls: ['./city-editor.component.css']
})
export class CityEditorComponent implements OnInit {

  city = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

}
