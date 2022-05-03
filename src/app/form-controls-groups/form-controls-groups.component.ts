import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-controls-groups',
  templateUrl: './form-controls-groups.component.html',
  styleUrls: ['./form-controls-groups.component.css']
})
export class FormControlsGroupsComponent implements OnInit {
  name = new FormControl('', [Validators.required]);
  name1 = new FormControl('Hey there', [Validators.required]);
  name2 = new FormControl('Hello', [Validators.required]);

  constructor() { }

  ngOnInit(): void {
    console.log(this.name1.value); // getting default value in formcontrol... 
  }
  setNameValue() {
    this.name2.setValue('Afrid'); 
  }
}
