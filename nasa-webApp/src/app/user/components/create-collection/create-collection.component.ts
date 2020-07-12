import { Component, OnInit } from '@angular/core';

import { FlashMessagesService } from 'angular2-flash-messages';

import {
	UserService,
} from '../../services';

import {
	ValidateService
} from '../../../shared/services';

@Component({
	selector: 'app-create-collection',
	templateUrl: './create-collection.component.html',
	styleUrls: ['./create-collection.component.css']
})
export class CreateCollectionComponent implements OnInit {
	name: String;
	description: String;
	vis: String;

	constructor(
		private userService: UserService,
		private validateService: ValidateService,
		private flashMessage: FlashMessagesService) { }

	ngOnInit() {
		this.vis = 'true';
	}

	onCreateCollectionSubmit() {
		const currUser = this.userService.getUsername();
		const ss = currUser.split(':');
		const resultUser = ss[2].slice(1, -2);

		const isPrivate = this.vis === 'true' ? true : false;

		const imageCollection = {
			name: this.name,
			description: this.description,
			isPrivate: isPrivate,
			createdBy: resultUser
		};

		if (!this.validateService.validateCollection(imageCollection)) {
			this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
			return false;
		}

		this.userService.createImageCollection(imageCollection).subscribe(data => {
			if (data.success) {
				this.flashMessage.show('Your image collection has been created', { cssClass: 'alert-success', timeout: 3000 });
			} else {
				this.flashMessage.show('Something went wrong please register again', { cssClass: 'alert-danger', timeout: 3000 });
			}
		});

	}
}
