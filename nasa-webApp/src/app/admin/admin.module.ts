import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditDmcaComponent, EditPrivacyPolicyComponent } from './components';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		EditDmcaComponent,
		EditPrivacyPolicyComponent
	]
})
export class AdminModule { }
