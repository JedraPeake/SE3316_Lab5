import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
	ProfileComponent
} from './components';

const routes: Routes = [
	{ path: '', component: ProfileComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class UserRoutingModule { }
