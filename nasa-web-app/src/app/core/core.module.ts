import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		SharedModule,
		CoreRoutingModule
	],
	exports: [
		RouterModule
	]
})

export class CoreModule { }
