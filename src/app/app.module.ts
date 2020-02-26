import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http"
import { JwtModule } from "@auth0/angular-jwt";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SidebarModule } from 'primeng/sidebar';
import { MenubarModule } from "primeng/menubar";
import { CarouselModule } from 'primeng/carousel';

import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { ChartsComponent } from './components/charts/charts.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { MessagesComponent } from './components/messages/messages.component';
import { LandingComponent } from './components/landing/landing.component';

export function tokenGetter() {
	return localStorage.getItem('id_token');
}

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		DashboardComponent,
		RegisterComponent,
		ChartsComponent,
		JobsComponent,
		MessagesComponent,
		LandingComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		SidebarModule,
		MenubarModule,
		CarouselModule,
		JwtModule.forRoot({
			config: {
				tokenGetter: tokenGetter,
				whitelistedDomains: ['localhost:3000'],
				blacklistedRoutes: ['http://localhost:3000/auth/login']
			}
		})
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
