import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from "./local-storage.service";
import {Router} from "@angular/router";
import { AdminService } from './admin.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  admin:any;
  worker:any;
  yourOption:string;
  constructor( private myservice: AdminService ,private route:Router) { }

  ngOnInit() {
    this.admin=this.myservice.details(); 
  }
add(){
  this.route.navigate(['/signw'])
}
modo(v:string){
  this.worker=this.myservice.getWorkerDetails(v);
}
accept(w: any){
  w['assign']=this.yourOption;
  w['status']='Pending'
  alert(this.yourOption)
  this.myservice.accept(w);
   
}
}