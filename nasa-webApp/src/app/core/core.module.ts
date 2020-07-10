import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';
import { AuthGuard } from './guards';
import { AuthService } from './services/auth.service';
import { LoginComponent, RegisterComponent } from './components';

@NgModule({
	imports: [
		CommonModule,

		CoreRoutingModule,
		SharedModule
	],
	declarations: [
		LoginComponent,
		RegisterComponent
	],
	exports: [
		RouterModule
	],
	providers: [
		AuthGuard,
		AuthService
	]
})
export class CoreModule { }
