import { Component, OnInit } from '@angular/core';
import { GeneralWebsiteItemsService } from '../../services';

@Component({
	selector: 'app-privacy-policy',
	templateUrl: './privacy-policy.component.html',
	styleUrls: ['./privacy-policy.component.css']
})

export class PrivacyPolicyComponent implements OnInit {
	descPP: String;
	constructor(private generalWebsiteItemsService: GeneralWebsiteItemsService) { }

	ngOnInit() {
		this.generalWebsiteItemsService.getPrivacyPolicy().subscribe(profile => {
			this.descPP = profile[0]['body'];
			console.log(profile[0]['body']);
		},
			err => {
				console.log(err);
				return false;
			});

	}

}
