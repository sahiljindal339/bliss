import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DashComponent } from './dash/dash.component';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignInWComponent } from './sign-in-w/sign-in-w.component';
import { LogInService } from './log-in/log-in.service';
 
import { GoogleComponent } from './google/google.component';
import { WorkerDashComponent } from './worker-dash/worker-dash.component';
import { DataProviderService } from './data-provider.service';
import { WorkerDashService } from './worker-dash/worker-dash.service';
import { WorkDashComponent } from './work-dash/work-dash.component';
import { AdminComponent } from './admin/admin.component';
import { AdminService } from './admin/admin.service';
 
 
@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule ,ReactiveFormsModule],
  declarations: [ AppComponent, HelloComponent, DashComponent, SignUpComponent, LogInComponent, SignInWComponent, GoogleComponent, WorkerDashComponent, AdminComponent ],
  bootstrap:    [ AppComponent ],
  providers: [LogInService, DataProviderService ,WorkerDashService, AdminService]
})
export class AppModule { }
