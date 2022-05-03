import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-getset-values',
  templateUrl: './getset-values.component.html',
  styleUrls: ['./getset-values.component.css']
})
export class GetsetValuesComponent implements OnInit {
  getvalue: any;

  constructor(  private builder: FormBuilder) { }

  ngOnInit(): void {
  }

  controlName='SelectControl'
  formGroup: FormGroup = this.builder.group({
    SelectControl: ''
  })
  groups: string[] = [
    'val 1',
    'val 2',
    'val 3'
  ];

  getVal(): void {
    // console.log(this.formGroup.value[this.controlName])
    this.getvalue=this.formGroup.value[this.controlName]
  }

  setVal(): void {
    this.formGroup.controls[this.controlName].setValue('val 3');
  }
}
