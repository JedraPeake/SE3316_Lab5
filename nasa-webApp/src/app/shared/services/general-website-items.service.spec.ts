import { TestBed, inject } from '@angular/core/testing';

import { GeneralWebsiteItemsService } from './general-website-items.service';

describe('GeneralWebsiteItemsService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [GeneralWebsiteItemsService]
		});
	});

	it('should be created', inject([GeneralWebsiteItemsService], (service: GeneralWebsiteItemsService) => {
		expect(service).toBeTruthy();
	}));
});
