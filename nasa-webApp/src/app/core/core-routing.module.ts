import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards';
import {
	DmcaComponent,
	PrivacyPolicyComponent
} from '../shared/components';

import {
	HomeComponent,
	ProfileComponent,
	CreateCollectionComponent,
} from '../components';

// import {
// 	DashboardComponent,
// } from '../nasa/components';

import {
	LoginComponent,
	RegisterComponent
} from './components';

const routes: Routes = [
	{ path: '', component: HomeComponent },

	{ path: 'register', component: RegisterComponent },
	{ path: 'login', component: LoginComponent },

	{
		path: 'dashboard',
		loadChildren: '../nasa/nasa.module#NasaModule',
		// loadChildren: () => import('../nasa/nasa.module').then(m => m.NasaModule),
		canActivate: [AuthGuard]
	},

	// { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },

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
