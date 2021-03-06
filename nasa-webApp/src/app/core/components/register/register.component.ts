import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FlashMessagesService } from 'angular2-flash-messages';

import { ValidateService } from '../../../shared/services/validate.service';
import { AuthService } from '../../services/auth.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

	username: String;
	password: String;

	constructor(
		private validateService: ValidateService,
		private flashMessage: FlashMessagesService,
		private authService: AuthService,
		private router: Router
	) { }

	ngOnInit() {
	}

	onRegisterSubmit() {
		const user = {
			username: this.username,
			password: this.password
		};

		if (!this.validateService.validateEmailContent(user)) {
			this.flashMessage.show('please fill in email field', { cssClass: 'alert-danger', timeout: 3000 });
			return false;
		}
		if (!this.validateService.validatePasswordContent(user)) {
			this.flashMessage.show('please fill in password field', { cssClass: 'alert-danger', timeout: 3000 });
			return false;
		}
		if (!this.validateService.validateEmail(user.username)) {
			this.flashMessage.show('please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
			return false;
		}

		this.authService.registerUser(user).subscribe(data => {
			if (data.success) {
				this.flashMessage.show('You are now registered and can log in', { cssClass: 'alert-success', timeout: 3000 });
				this.router.navigate(['/login']);
			} else {
				this.flashMessage.show('Something went wrong please register again', { cssClass: 'alert-danger', timeout: 3000 });
				this.router.navigate(['/register']);
			}
		});

	}
}
