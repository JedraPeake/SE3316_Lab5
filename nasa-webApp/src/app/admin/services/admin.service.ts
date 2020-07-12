import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';

@Injectable()
export class AdminService {
	authToken: any;
	baseURL: string = environment.BACKEND_API_BASE;

	constructor(private http: Http) { }

	postDMCA(dm) {
		const headers = new Headers();
		this.loadToken();
		headers.append('Authorization', this.authToken);
		headers.append('Content-Type', 'application/json');
		return this.http.post(`${this.baseURL}/dmcas/updateDmca`, dm, { headers: headers })
			.map(res => res.json());
	}

	updatePP(pp) {
		const headers = new Headers();
		this.loadToken();
		headers.append('Authorization', this.authToken);
		headers.append('Content-Type', 'application/json');
		return this.http.post(`${this.baseURL}/privacypolicy/updatePP`, pp, { headers: headers })
			.map(res => res.json());
	}

	// set up an interceptor!
	loadToken() {
		const token = localStorage.getItem('id_token');
		this.authToken = token;
	}
}
