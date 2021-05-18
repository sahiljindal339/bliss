import { Component, OnInit } from '@angular/core';
import { WorkerDashService } from './worker-dash.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-worker-dash',
  templateUrl: './worker-dash.component.html',
  styleUrls: ['./worker-dash.component.css']
})
export class WorkerDashComponent implements OnInit {
  index:Number;
  list:any;
  email:string;
  constructor( private myservice: WorkerDashService , private route:Router) { }

  ngOnInit() {
    this.email= localStorage.getItem('log').slice(0,5);
    this.list=this.myservice.details(); 
   this.list.sort(function(a, b){
    
    if (a.status< b.status) //sort string ascending
        return -1 
    if (a.status > b.status)
        return 1
    return 0 //default return value (no sorting)
})
     }
accept(i:number,w:any){
  w['status']='Pending'
  this.myservice.reject(w);
     this.index=i
     //for static data;
     for(let i=0;i<this.list.length;i++){
       if(w==this.list[i]){
          w['status']='Pending'
       }
     }
}
reject(w: any){
  for(let i=0;i<this.list.length;i++){
    if(w==this.list[i]){
      this.list.splice(i,1);
    }
  }
   w['status']='NA'
this.myservice.reject(w);
}

logOut(){
  localStorage.removeItem('log');
  this.route.navigate(['']);
}
}