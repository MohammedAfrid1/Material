import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cascading-dropdown',
  templateUrl: './cascading-dropdown.component.html',
  styleUrls: ['./cascading-dropdown.component.css']
})
export class CascadingDropdownComponent implements OnInit {
  selectedList: any;
  selectedState: any;
  selectedCity: any;
  cities = [] as any;
  dropdownList = [
    { value: 'andra pradesh', viewValue: 'Andra Pradesh', cities: ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Nellore', 'Tirupa'] },
    { value: 'karnataka', viewValue: 'Karnataka', cities: ['Mysore', 'Davangere', 'Mangalore', 'Hubli-Dharwad', 'Belgaum'] },
    { value: 'tamilnadu', viewValue: 'Tamilnadu', cities: ['Tiruchirappalli', 'Madurai', 'Erode', 'Vellore', 'Coimbatore'] },
    { value: 'gujarat', viewValue: 'Gujarat', cities: ['Ahmedabad', 'Surat', 'Rajkot', 'Junagadh', 'Vadodara'] },
    { value: 'kerala', viewValue: 'Kerala', cities: ['Kochi', 'Kozhikode', 'Thrissur', 'Malappuram'] }
  ];
 
  constructor() { }

  onSelect(evt: any) {
    this.selectedList = this.dropdownList.find(list => list.value == this.selectedState);
    this.cities = this.selectedList.cities;
  }
  ngOnInit(): void {
  }
}
