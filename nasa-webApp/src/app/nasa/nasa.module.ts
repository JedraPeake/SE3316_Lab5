import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxPaginationModule } from 'ngx-pagination';

import { SharedModule } from '../shared/shared.module';
import { NasaRoutingModule } from './nasa-routing.module';
import {
	DashboardComponent,
	ImageListComponent,
	MyImageCollectionsComponent
} from './components';
import {
	ImageService
} from './services';

@NgModule({
	imports: [
		CommonModule,
		NgxPaginationModule,

		NasaRoutingModule,
		SharedModule
	],
	declarations: [
		DashboardComponent,
		ImageListComponent,
		MyImageCollectionsComponent
	],
	providers: [
		ImageService
	]
})
export class NasaModule { }
