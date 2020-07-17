import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeParentComponent } from './components/';

@NgModule({
	declarations: [
		HomeParentComponent
	],
	imports: [
		CommonModule
	],
	exports: [
		HomeParentComponent
	]
})

export class SharedModule { }
