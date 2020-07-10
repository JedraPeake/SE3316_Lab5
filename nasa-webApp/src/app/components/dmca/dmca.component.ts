import { Component, OnInit } from '@angular/core';

import { GeneralWebsiteItemsService } from '../../services';

@Component({
	selector: 'app-dmca',
	templateUrl: './dmca.component.html',
	styleUrls: ['./dmca.component.css']
})

export class DmcaComponent implements OnInit {
	descPP: String;
	constructor(private generalWebsiteItemsService: GeneralWebsiteItemsService) { }

	ngOnInit() {
		this.generalWebsiteItemsService.getDMCA().subscribe(profile => {
			this.descPP = profile[0]['body'];
			console.log(profile[0]['body']);
		},
			err => {
				console.log(err);
				return false;
			});
	}

}
