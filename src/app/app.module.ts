import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http"
import { ScrollingModule } from "@angular/cdk/scrolling";

import { JwtModule } from "@auth0/angular-jwt";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SidebarModule } from 'primeng/sidebar';
import { MenubarModule } from "primeng/menubar";
import { CarouselModule } from 'primeng/carousel';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { MessagesModule } from "primeng/messages";
import { MessageModule } from "primeng/message";
import { PaginatorModule } from "primeng/paginator";

import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { ChartsComponent } from './components/charts/charts.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { MessagesComponent } from './components/messages/messages.component';
import { LandingComponent } from './components/landing/landing.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProfileComponent } from './components/profile/profile.component';

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
		LandingComponent,
		MenubarComponent,
		SidebarComponent,
		ProfileComponent
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
		OverlayPanelModule,
		MessageModule, 
		MessagesModule,
		PaginatorModule,
		ScrollingModule,
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
