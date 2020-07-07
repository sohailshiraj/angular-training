import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  email: string;
  password: string;
  checkValue: boolean;

  constructor() {
    this.email = '';
    this.password = '';
    this.checkValue = true;
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(
      `Submitted Values: email - ${this.email} and password - ${this.password} 
      and check value - ${this.checkValue}`
    );
  }
}
