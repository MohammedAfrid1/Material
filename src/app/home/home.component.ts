import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myForm: any;


  constructor() { }

  ngOnInit() {
    this.myForm = new FormGroup({
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
