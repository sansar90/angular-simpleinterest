import { Injectable } from '@angular/core';

@Injectable()
export class SiService {

  si(num1: number, num2: number,num3:number){
    return ((num1*num2*num3)/100);
  }

}