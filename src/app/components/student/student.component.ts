import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  public students = [];
  public currentStudent;
  constructor() {
    this.students = [
      { name: 'Sohail', age: 19, dept: 'Mobility' },
      { name: 'Sohail2', age: 39, dept: 'CRM' },
      { name: 'Sohail3', age: 29, dept: 'QA' }
    ];
  }

  ngOnInit(): void {}

  viewDetails(index) {
    this.currentStudent = this.students[index];
  }
}
