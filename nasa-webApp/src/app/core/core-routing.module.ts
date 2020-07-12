import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards';
import {
	DmcaComponent,
	PrivacyPolicyComponent,
	HomeComponent
} from '../shared/components';

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
		canActivate: [AuthGuard]
	},

	// might have to split this into 2 modules!
	{
		path: 'profile',
		loadChildren: '../user/user.module#UserModule',
		canActivate: [AuthGuard]
	},
	// { path: 'createCollection', component: CreateCollectionComponent, canActivate: [AuthGuard] },

	{ path: 'dmca', component: DmcaComponent },
	{ path: 'privacy', component: PrivacyPolicyComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class CoreRoutingModule { }
