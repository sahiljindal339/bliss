import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignInWComponent } from './sign-in-w/sign-in-w.component';
import { GoogleComponent } from './google/google.component';
import { WorkerDashComponent } from './worker-dash/worker-dash.component';
import { AdminComponent } from './admin/admin.component';
const appRoutes: Routes = [
    { path: '', component: DashComponent },
   { path: 'signUp', component: SignUpComponent },
   { path: 'logIn', component: LogInComponent },
    { path: 'signw', component: SignInWComponent },
     { path: 'go', component: GoogleComponent },
      { path: 'work', component: WorkerDashComponent },
      { path: 'admin', component: AdminComponent }
];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
 
