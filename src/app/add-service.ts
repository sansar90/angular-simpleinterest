import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddService  {
  
  // the following function adds the two numbers and returns the sum
  add(num1: number, si: number){
    return num1 + si;
  }
}
