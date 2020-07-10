import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { FlashMessagesModule } from 'angular2-flash-messages';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth.guard';
import {
	AdminService,
	AuthService,
	GeneralWebsiteItemsService,
	ImageService,
	UserService,
	ValidateService
} from './services';
import {
	CreateCollectionComponent,
	DashboardComponent,
	DmcaComponent,
	EditDmcaComponent,
	EditPrivacyPolicyComponent,
	HomeComponent,
	ImageListComponent,
	LoginComponent,
	MyImageCollectionsComponent,
	NavbarComponent,
	PrivacyPolicyComponent,
	ProfileComponent,
	RegisterComponent
} from './components';

const webAppRoutes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
	{ path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
	{ path: 'createCollection', component: CreateCollectionComponent, canActivate: [AuthGuard] },
	{ path: 'dmca', component: DmcaComponent },
	{ path: 'privacy', component: PrivacyPolicyComponent }
];

@NgModule({
	declarations: [
		AppComponent,
		ImageListComponent,
		NavbarComponent,
		HomeComponent,
		DashboardComponent,
		ProfileComponent,
		LoginComponent,
		RegisterComponent,
		CreateCollectionComponent,
		MyImageCollectionsComponent,
		PrivacyPolicyComponent,
		EditPrivacyPolicyComponent,
		DmcaComponent,
		EditDmcaComponent
	],
	imports: [
		BrowserModule,
		HttpModule,
		FormsModule,
		RouterModule.forRoot(webAppRoutes),
		FlashMessagesModule.forRoot(), NgxPaginationModule
	],
	providers: [
		ImageService,
		ValidateService,
		AuthService,
		AuthGuard,
		AdminService,
		UserService,
		GeneralWebsiteItemsService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
