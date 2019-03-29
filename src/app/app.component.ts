import { Component } from '@angular/core';
import { HeaderComponent} from './header/header.component.ts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directive: [HeaderComponent],
})
export class AppComponent {
  title = 'app';
}
