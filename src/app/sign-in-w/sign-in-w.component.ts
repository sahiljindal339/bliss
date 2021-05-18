import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { FormGroup, FormControl,Validators,FormBuilder } from '@angular/forms';
import { LocalStorageService } from "./local-storage.service";
@Component({
  selector: 'app-sign-in-w',
  templateUrl: './sign-in-w.component.html',
  styleUrls: ['./sign-in-w.component.css']
})
export class SignInWComponent implements OnInit {
    private localStorageService: LocalStorageService;
 signupForm = new FormGroup({
    name: new FormControl(''),
      phone: new FormControl(''),
    password: new FormControl(''),
   
     address: new FormControl(''),
      type: new FormControl(''),
  });
  constructor(private route:Router ,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required,Validators]],
      phone:['',[Validators.required]],
      password:['',[Validators.required]],
      address:['',[Validators.required]],
      type:['',[Validators.required]]
    })
  }
create(){
  
  alert(JSON.stringify(this.signupForm.value))
  this.signupForm.reset();
  if(localStorage.getItem('log')=='admin'){
    this.route.navigate(['/admin']);
  }
}
}