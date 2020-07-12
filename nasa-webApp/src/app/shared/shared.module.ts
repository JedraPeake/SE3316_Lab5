import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { GeneralWebsiteItemsService, ValidateService } from './services';
import {
	DmcaComponent,
	PrivacyPolicyComponent,
	HomeComponent,
	NavbarComponent
} from './components';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		RouterModule
	],
	declarations: [
		DmcaComponent,
		PrivacyPolicyComponent,
		HomeComponent,
		NavbarComponent
	],
	exports: [
		FormsModule,
		NavbarComponent
	],
	providers: [
		GeneralWebsiteItemsService,
		ValidateService
	]
})
export class SharedModule { }
