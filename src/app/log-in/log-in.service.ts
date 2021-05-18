import { Injectable } from '@angular/core';
import { products } from '../log';
@Injectable()
export class LogInService {
 products = products;
  constructor() { }
  chk(v){
     for (var i = 0; i < products.length; i++) {
       if (products[i].email === v.email) {
         if (products[i].password === v.password) {
            return products[i].role;
         }
       }

     }
      return null;
   
  }
}