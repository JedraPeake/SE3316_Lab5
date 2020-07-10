import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services';

@Component({
	selector: 'app-my-image-collections',
	templateUrl: './my-image-collections.component.html',
	styleUrls: ['./my-image-collections.component.css']
})
export class MyImageCollectionsComponent implements OnInit {

	constructor(
		private userService: UserService
	) { }

	ngOnInit() {
		const currUser = this.userService.getUsername();
		const ss = currUser.split(':');
		const resultUser = ss[2].slice(1, -2);
		console.log('tying');
		console.log('user ' + resultUser);
		this.userService.getCollections(resultUser).subscribe(data => {
			console.log('loading' + data.collections.collections);
		},
			err => {
				console.log(err);
				return false;
			});
	}

}
