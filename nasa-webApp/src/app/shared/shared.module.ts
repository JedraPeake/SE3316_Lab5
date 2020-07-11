import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GeneralWebsiteItemsService } from './services';
import {
	DmcaComponent,
	PrivacyPolicyComponent
} from './components';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
	],
	declarations: [
		DmcaComponent,
		PrivacyPolicyComponent
	],
	exports: [
		FormsModule
	],
	providers: [
		GeneralWebsiteItemsService
	]
})
export class SharedModule { }
