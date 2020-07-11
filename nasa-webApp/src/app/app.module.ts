import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
// import { FormsModule } from '@angular/forms';
// import { RouterModule, Routes } from '@angular/router';

import { FlashMessagesModule } from 'angular2-flash-messages';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import {
	AdminService,
	UserService,
	ValidateService
} from './services';

import {
	CreateCollectionComponent,
	EditDmcaComponent,
	EditPrivacyPolicyComponent,
	HomeComponent,
	NavbarComponent,
	ProfileComponent
} from './components';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

// const webAppRoutes: Routes = [
// 	{ path: '', component: HomeComponent },
// 	{ path: 'register', component: RegisterComponent },
// 	{ path: 'login', component: LoginComponent },
// 	{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
// 	{ path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
// 	{ path: 'createCollection', component: CreateCollectionComponent, canActivate: [AuthGuard] },
// 	{ path: 'dmca', component: DmcaComponent },
// 	{ path: 'privacy', component: PrivacyPolicyComponent }
// ];

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		HomeComponent,
		ProfileComponent,
		CreateCollectionComponent,
		EditPrivacyPolicyComponent,
		EditDmcaComponent
	],
	imports: [
		BrowserModule,
		HttpModule,
		// FormsModule,
		CoreModule,
		// RouterModule.forRoot(webAppRoutes),
		FlashMessagesModule.forRoot(),
		// NgxPaginationModule,
		SharedModule
	],
	providers: [
		ValidateService,
		AdminService,
		UserService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
