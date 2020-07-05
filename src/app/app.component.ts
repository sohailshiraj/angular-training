import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email: string;
  password: string;
  checkValue: boolean;

  constructor() {
    this.email = '';
    this.password = '';
    this.checkValue = true;
  }
  onSubmit() {
    console.log(
      `Submitted Values: email - ${this.email} and password - ${this.password} 
      and check value - ${this.checkValue}`
    );
  }
}
