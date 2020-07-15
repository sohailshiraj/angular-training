import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

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
  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private httpService: HttpService
  ) {
    this.students = [];
    this.isSubmitted = false;
  }

  ngOnInit(): void {
    this.studentForm = this.formbuilder.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required]]
    });

    this.getStudents();
  }

  getStudents() {
    this.httpService.get('users').subscribe((res: any) => {
      this.students = res.data;
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
