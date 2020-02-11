import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http"
import { JwtModule } from "@auth0/angular-jwt";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {InputSwitchModule} from 'primeng/inputswitch';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		DashboardComponent,
		RegisterComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		InputSwitchModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		JwtModule.forRoot({
			config: {
				tokenGetter: function tokenGetter() {
					return localStorage.getItem('id_token');
				},
				whitelistedDomains: ['localhost:3000'],
				blacklistedRoutes: ['http://localhost:3000/auth/login']
			}
		})
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
