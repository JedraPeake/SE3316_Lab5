import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
	HomeParentComponent
} from '../shared/components';

const routes: Routes = [
	{ path: '', component: HomeParentComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class CoreRoutingModule { }
