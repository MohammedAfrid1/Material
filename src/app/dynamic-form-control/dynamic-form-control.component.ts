import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-control',
  templateUrl: './dynamic-form-control.component.html',
  styleUrls: ['./dynamic-form-control.component.css']
})
export class DynamicFormControlComponent implements OnInit {
  angForm = new FormGroup({
    hobbies: new FormArray([
      new FormControl('', Validators.required),
    ])
  });
  constructor() { }

  ngOnInit(): void {
  }

  get hobbies(): FormArray {
    return this.angForm.get('hobbies') as FormArray;
  }
  onFormSubmit(): void {
    for (let i = 0; i < this.hobbies.length; i++) {
      console.log(this.hobbies.at(i).value);
    }
  }
  addNameField() {

    this.hobbies.push(new FormControl('', Validators.required));
  }
  deleteNameField(index: number) {

    if (this.hobbies.length !== 1) {
      this.hobbies.removeAt(index);
    }
    console.log(this.hobbies.length);
  }
}
