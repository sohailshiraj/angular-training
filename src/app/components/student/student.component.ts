import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  public students = [];
  public currentStudent;
  public studentForm: FormGroup;
  public isSubmitted: boolean;
  constructor(private formbuilder: FormBuilder, private router: Router) {
    this.students = [
      { name: 'Sohail', age: 19, dept: 'Mobility' },
      { name: 'Sohail2', age: 39, dept: 'CRM' },
      { name: 'Sohail3', age: 29, dept: 'QA' }
    ];
    this.isSubmitted = false;
  }

  ngOnInit(): void {
    this.studentForm = this.formbuilder.group({
      name: ['', [Validators.required]],
      age: ['', [Validators.required]],
      dept: ['', [Validators.required]]
    });
  }

  viewDetails(index) {
    this.router.navigate(['student-detail'], {
      queryParams: this.students[index]
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.studentForm.valid) {
      this.students.push(this.studentForm.value);
      this.studentForm.reset();
      this.isSubmitted = false;
    }
  }
}
