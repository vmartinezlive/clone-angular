import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menu = "Menu"
  headerTitle = "Apartments.com"
  signIn = "Sign Up / Sign In"
  template: `
    <div class="navbar">
      <a class="navbar-item">
      <img src="assests/img/logo.png">
      </a>
    </div>
  `,

  constructor() { }

  ngOnInit() {
  }

}
