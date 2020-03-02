import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from "./components/login/login.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AuthGuard } from './guards/auth.guard';
import { RegisterComponent } from './components/register/register.component';
import { ChartsComponent } from './components/charts/charts.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { MessagesComponent } from './components/messages/messages.component';
import { LandingComponent } from './components/landing/landing.component';

// canActivate: [AuthGuard]


const routes: Routes = [
	// { path: '', pathMatch: 'full', redirectTo: 'login' },
	{ path: '', pathMatch: 'full', redirectTo: 'landing' },
	{ path: 'login', component: LoginComponent },
	{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }, // canActivate: [AuthGuard]
	{ path: 'register', component: RegisterComponent },
	{ path: 'charts', component: ChartsComponent, canActivate: [AuthGuard]  },
	{ path: 'jobs', component: JobsComponent, canActivate: [AuthGuard]  },
	{ path: 'messages', component: MessagesComponent, canActivate: [AuthGuard]  },
	{ path: 'landing', component: LandingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
