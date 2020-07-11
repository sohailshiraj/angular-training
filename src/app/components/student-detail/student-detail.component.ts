import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  public currentStudent;
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      if (params) {
        this.currentStudent = params;
        console.log(this.currentStudent);
      }
    });
  }

  ngOnInit(): void {}
}
