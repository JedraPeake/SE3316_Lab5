import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ValidateService } from '../../../shared/services';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
	username: String;
	password: String;
	constructor(
		private validateService: ValidateService,
		private authService: AuthService,
		private router: Router,
		private flashMessage: FlashMessagesService
	) { }

	ngOnInit() {
	}

	onLoginSubmit() {
		const user = {
			username: this.username,
			password: this.password
		};

		if (!this.validateService.validateEmailContent(user)) {
			this.flashMessage.show('please fill in email field', { cssClass: 'alert-danger', timeout: 3000 });
			this.router.navigate(['login']);
			return false;
		}
		if (!this.validateService.validatePasswordContent(user)) {
			this.flashMessage.show('please fill in password field', { cssClass: 'alert-danger', timeout: 3000 });
			this.router.navigate(['login']);
			return false;
		}
		if (!this.validateService.validateEmail(user.username)) {
			this.flashMessage.show('please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
			this.router.navigate(['login']);
			return false;
		}

		this.authService.authenticateUser(user).subscribe(data => {
			console.log(data);
			if (data.success) {
				this.authService.storeUserData(data.token, data.user);
				this.flashMessage.show('You are now logged in', { cssClass: 'alert-success', timeout: 5000 });
				this.router.navigate(['dashboard']);
			} else {
				console.log('error ' + data.msg);
				this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
				this.router.navigate(['login']);
			}
		});

	}
}
