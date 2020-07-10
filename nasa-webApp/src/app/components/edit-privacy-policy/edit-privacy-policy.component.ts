import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FlashMessagesService } from 'angular2-flash-messages';

import {
	AdminService,
	AuthService,
	GeneralWebsiteItemsService
} from '../../services';

@Component({
	selector: 'app-edit-privacy-policy',
	templateUrl: './edit-privacy-policy.component.html',
	styleUrls: ['./edit-privacy-policy.component.css']
})

export class EditPrivacyPolicyComponent implements OnInit {
	descPP: String; description: String;
	constructor(
		private generalWebsiteItemsService: GeneralWebsiteItemsService,
		private adminService: AdminService,
		private authService: AuthService,
		private router: Router,
		private flashMessage: FlashMessagesService
	) { }

	ngOnInit() {
		this.generalWebsiteItemsService.getPrivacyPolicy().subscribe(profile => {
			this.descPP = profile.pp[0]['body'];
		},
			err => {
				console.log(err);
				return false;
			});
	}
	onSubmit() {
		const pp = {
			body: this.description
		};

		this.adminService.updatePP(pp).subscribe(data => {
			if (data.success) {
				this.flashMessage.show('Privacy Policy Updated', { cssClass: 'alert-success', timeout: 3000 });
			} else {
				this.flashMessage.show('Something went wrong please register again', { cssClass: 'alert-danger', timeout: 3000 });
			}
		});
	}
}
