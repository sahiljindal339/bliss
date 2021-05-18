import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from "./local-storage.service";
import { FormGroup, FormControl,Validators,FormBuilder } from '@angular/forms';
import {Router} from "@angular/router";
import { LogInService } from './log-in.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  private localStorageService: LocalStorageService;
    signupForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
   
  });
  constructor(private route:Router ,private formBuilder: FormBuilder,
  private myservice: LogInService) { }

  ngOnInit() {
      this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required,Validators.email]],
      password:['',[Validators.required]]
      
    })
  }
  chk(){
    if(this.signupForm.controls['email'].value=='admin'){
          if(this.signupForm.controls['password'].value=='admin'){
                 localStorage.setItem('log','admin');
              this.route.navigate(['/admin'])
          }
    }
  
    if(this.myservice.chk(this.signupForm.value)=='w'){
        this.route.navigate(['/work'])
         localStorage.setItem('log',this.signupForm.controls['email'].value);
    }
      if(this.myservice.chk(this.signupForm.value)=='c'){
     this.route.navigate([''])
     localStorage.setItem('log',this.signupForm.controls['email'].value);
    }
    else{
      this.signupForm.reset();
    }
  }
}