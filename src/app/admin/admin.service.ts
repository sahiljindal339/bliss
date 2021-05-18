import { Injectable } from '@angular/core';
import { admin } from '../admin';
@Injectable()
export class AdminService {
  admin=admin
  worker=['X','Y','Z']
  constructor() { }
details(){
  return admin;
}
getWorkerDetails(type:string){
  return this.worker;
}
accept(w: any){
alert(JSON.stringify(w))
}
}