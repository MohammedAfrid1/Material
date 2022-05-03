import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaChange,MediaObserver } from '@angular/flex-layout';
import{Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{
  title = 'Material';
  mediasub!: Subscription;
  devicexs!:boolean;
  constructor(public mediaobserver:MediaObserver){}
  sideBarOpen=true
  ngOnInit() {
    this.mediasub=this.mediaobserver.media$.subscribe((result:MediaChange)=>{
      console.log(result.mqAlias);
      this.devicexs=result.mqAlias==='xs'? true:false;
    })
  }
  ngOnDestroy() {
    this.mediasub.unsubscribe();
  }
  sideBarToggler()
  {
    this.sideBarOpen=!this.sideBarOpen;
  }
}
