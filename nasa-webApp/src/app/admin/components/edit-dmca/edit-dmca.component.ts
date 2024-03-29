import { Component, OnInit } from '@angular/core';

import { FlashMessagesService } from 'angular2-flash-messages';

import { AdminService } from '../../services';

@Component({
	selector: 'app-edit-dmca',
	templateUrl: './edit-dmca.component.html',
	styleUrls: ['./edit-dmca.component.css']
})

export class EditDmcaComponent implements OnInit {
	description: String;
	constructor(
		private adminService: AdminService,
		private flashMessage: FlashMessagesService
	) { }

	ngOnInit() {
	}

	ondmcaSubmit() {
		const pp = {
			body: this.description
		};

		this.adminService.postDMCA(pp).subscribe(data => {
			if (data.success) {
				this.flashMessage.show('DMCA Updated', { cssClass: 'alert-success', timeout: 3000 });
			} else {
				this.flashMessage.show('Something went wrong please register again', { cssClass: 'alert-danger', timeout: 3000 });
			}
		});
	}
}
