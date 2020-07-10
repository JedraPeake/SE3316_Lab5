import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards';
import {
	HomeComponent,
	DashboardComponent,
	ProfileComponent,
	CreateCollectionComponent,
	DmcaComponent,
	PrivacyPolicyComponent
} from '../components';

import {
	LoginComponent,
	RegisterComponent
} from './components';

const routes: Routes = [
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
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class CoreRoutingModule { }