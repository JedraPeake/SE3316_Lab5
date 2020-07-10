import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	user: Object;
	isAd: Boolean;
	constructor(
		private userService: UserService,
	) { }

	ngOnInit() {
		this.userService.getProfile().subscribe(profile => {
			console.log(profile.user);
			this.user = profile.user;
			// fix this
			// this.isAd = this.user.isAdmin;
		},
			err => {
				console.log(err);
				return false;
			});
	}
}
