import { Component } from '@angular/core';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  // template: `<h1>Hello world from inline template</h1>
  // <p>Inline template is used in this example</p>`,
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hotelInventoryApp';

  role = 'Admin';
}
