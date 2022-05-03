import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nested-form-group',
  templateUrl: './nested-form-group.component.html',
  styleUrls: ['./nested-form-group.component.css']
})
export class NestedFormGroupComponent implements OnInit {
  myForm: any
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: [''],
      age:[''],
      address: this.fb.group({
        area:[''],
        street: [''],
        zip: ['']
      })
    })
 
  }
  get f() {
    return this.myForm.controls;
  }
}
