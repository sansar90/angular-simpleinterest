import { Component } from '@angular/core';
import { AddService } from './add-service';

import { SiService}from './si.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  num1: number;
  num2: number;
  num3:number;
  simple:number;
  sum: number;

  constructor(public addService: AddService,
  public siService:SiService){

  }

  add(){

    //Using the service to add two numbers
    this.sum = this.addService.add(this.num1, this.simple);
  }
  si(){
    this.simple=this.siService.si(this.num1,this.num2,this.num3);
  }
}
