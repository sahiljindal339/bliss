import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { FormGroup, FormControl,Validators,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signupForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    phone: new FormControl(''),
     address: new FormControl(''),
     role: new FormControl('customer'),
  });
   
  constructor(private route:Router ,private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required,Validators.email]],
      phone:['',[Validators.required]],
      password:['',[Validators.required]],
      role:['customer',[Validators.required]],
      address:['',[Validators.required]],
      city:['Managlore',[Validators.required]],
      state:['',[Validators.required]]
    })
  }

  move(){
   
  alert(JSON.stringify(this.signupForm.value));
this.route.navigate(['/logIn'])
}
}