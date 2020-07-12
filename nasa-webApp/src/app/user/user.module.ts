import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { UserService } from './services';
import {
	CreateCollectionComponent,
	ProfileComponent
} from './components';

@NgModule({
	imports: [
		CommonModule,

		SharedModule,
		UserRoutingModule
	],
	declarations: [
		CreateCollectionComponent,
		ProfileComponent
	],
	providers: [
		UserService
	]
})
export class UserModule { }
