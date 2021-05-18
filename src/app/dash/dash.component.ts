import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { LocalStorageService } from "./local-storage.service";
import { FormGroup, FormControl,Validators,FormBuilder } from '@angular/forms';
declare var jQuery:any;
@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})

export class DashComponent implements OnInit {
  first:boolean=true ;
  first1:boolean=false ;
  first2: boolean=false;
  first3: boolean=false;
  first4: boolean=false;
  t1:string;
  type:string;
  btype:string="new";
  badd:string;
  bp:string;
  bdis:string;
  v1:boolean=false;
  navBar:Boolean=false;
  email:string;
  nav:Boolean=true;
    private localStorageService: LocalStorageService;
  constructor(private route:Router,private formBuilder: FormBuilder) { }
   signupForm = new FormGroup({
    
     address: new FormControl(''),
     city: new FormControl(''),
    state: new FormControl('')

  });
  ngOnInit() {
      this.signupForm = this.formBuilder.group({
       
      address:['',[Validators.required]],
      city:['Managlore',[Validators.required]],
      state:['',[Validators.required]]
    })
     
    if(localStorage.getItem('log')!=null){
      this.email= localStorage.getItem('log').slice(0,5);
      this.nav=false;
    }
    
     
  }
  add(){
    this.route.navigate(['/signUp'])
  }
   log(){
    this.route.navigate(['/logIn'])
  }
  fx1(){
        this.first=false;
   if( localStorage.getItem('log')!=null){
     this.first4=true;
   }
   else{
    this.first1=true;
   }
    this.t1="New equipment details";
  }
  fx0(){
    this.first=false;
   if( localStorage.getItem('log')!=null){
     this.first4=true;
   }
   else{
    this.first1=true;
   }
    this.t1="Description";
    this.btype="old";
  }
  fx2(){
     this.badd=((document.getElementById("exampleFormControlTextarea1") as HTMLInputElement).value);

    alert(this.badd.length)
 
     this.first1=false;
    this.first2=true;
  
  }
 fx3(){
        this.bp=((document.getElementById("exampleFormControlSelect1") as HTMLInputElement).value);
     alert(this.bp.length);
     
    if (this.bp.length==10 )  {
        this.first2=false;
    this.first3=true;
      
     }
     else{
      var inputVal = document.getElementById("exampleFormControlSelect1");
        inputVal.style.borderColor="red";
      
     }
  }
  fx4(){
     
     this.bdis=((document.getElementById("disc") as HTMLInputElement).value);
   
     if(this.bdis.length==0){
      var inputVal = document.getElementById("disc");
        inputVal.style.borderColor="red";
       
     } 
         
         else{
    this.first=true;
    this.first3=false;
     this.first2=false;
      this.first1=false;
       this.first4=false;
      let  data=[
          {
            'type':this.btype,
            'address':this.badd,
            'state':'karantaka',
            'city':'Managlore',
            'contact':this.bp,
            'disc':this.bdis,
            'email':localStorage.getItem('log')
          }
       ]
        
    
       alert(JSON.stringify(data));
       window.location.reload()

   
  }
  }
  fx5(){
    this.first4=false;
    this.first1=true;
  }
  fx6(){
    this.first4=false;
    this.first3=true;
  }
  one(){
    this.type="Carpenter"
  }
   one1(){
    this.type="Electrician"
  }
   one2(){
    this.type="Wood"
  }
   one3(){
    this.type="Plumber"
  }
  add2(){
    this.route.navigate(['/signw'])
  }
  fl(){
      this.first=true;
    this.first3=false;
     this.first2=false;
      this.first1=false;
       this.first4=false;
  }
  signUp(){
    this.route.navigate(['/work'])
  }
  logOut(){
  //  alert(JSON.stringify(localStorage.getItem('log')))
    this.nav=true;
    localStorage.removeItem('log')
  }
}