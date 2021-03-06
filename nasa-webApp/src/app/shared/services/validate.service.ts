import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

	constructor() { }

	validateRegister(user) {
		if (user.username == undefined || user.password == undefined) {
			return false;
		} else {
			return true;
		}
	}

	validateEmailContent(user) {
		if (user.username == undefined) {
			return false;
		} else {
			return true;
		}
	}

	validatePasswordContent(user) {
		if (user.username == undefined || user.password == undefined) {
			return false;
		} else {
			return true;
		}
	}

	validateEmail(email) {
		const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}

	validateCollection(imageCollection) {
		if (imageCollection.name == undefined || imageCollection.description == undefined) {
			return false;
		} else {
			return true;
		}
	}
}
