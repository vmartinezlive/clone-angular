import { Component } from '@angular/core';
inport { HeaderComponent} from '../header';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directive: [HeaderComponent],
})
export class AppComponent {
  title = 'app';
}
