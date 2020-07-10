import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { environment } from '../../environments/environment';

// I'll rename this when I think of something better
// just decoupling things so I can set up modules, clean up etc

@Injectable()
export class GeneralWebsiteItemsService {
	baseURL: string = environment.BACKEND_API_BASE;

	constructor(private http: Http) { }

	getDMCA() {
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.get(`${this.baseURL}/dmcas/getDmca`, { headers: headers })
			.map(res => res.json());
	}

	getPrivacyPolicy() {
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.get(`${this.baseURL}/privacypolicy/getPP`, { headers: headers })
			.map(res => res.json());
	}

}
