import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myForm: any;

  constructor() { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      Name: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      Password: new FormControl('', [Validators.required, Validators.maxLength(12)]),
      });
  }
  onSubmit()
  {

  }
  onclick()
{
}
  public myError = (controlName: string, errorName: string) =>{
    return this.myForm.controls[controlName].hasError(errorName);
    }
}
