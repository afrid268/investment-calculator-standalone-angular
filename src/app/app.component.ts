import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvResultComponent } from './inv-result/inv-result.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvResultComponent],
})
export class AppComponent {
  constructor() {
    debugger;
    console.log('AppComponent initialized');
  }
}
