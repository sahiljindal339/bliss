import { Injectable } from '@angular/core';
import { worker } from '../worker';
@Injectable()
export class WorkerDashService {
 worker = worker;
  constructor() { }
details(){
  return worker;
}
accept(list:any){
    alert(JSON.stringify(list))
}
reject(list:any){
  alert(JSON.stringify(list))
}
}