import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formcontrols',
  templateUrl: './formcontrols.component.html',
  styleUrls: ['./formcontrols.component.css']
})
export class FormcontrolsComponent implements OnInit {
  firstFormGroup: any ;
  secondFormGroup: any;
  thirdFormGroup: any;
  fourthFormGroup: any;
  selectedCourse = new FormControl();
  selectedskills = new FormControl();
  Courses: string[] = ['X', 'XII ', 'Diploma','UG','PG'];
  skills: string[] = ['Angular', 'csharp ', 'java','Python'];
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      SName: ['', Validators.required],
      SLName: ['', Validators.required],
      FName: ['', Validators.required],
      FLName: ['', Validators.required],
    });

    this.secondFormGroup = this._formBuilder.group({
      Address1: ['', Validators.required],
      Address2: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      postal: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      number: ['', Validators.required],
      mail: ['', Validators.required],
    });
    this.fourthFormGroup = this._formBuilder.group({
      institute: ['', Validators.required],
    });
  }

}
