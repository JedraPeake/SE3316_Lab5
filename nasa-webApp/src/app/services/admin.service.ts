import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AdminService {
	authToken: any;
	user: any;
	privacyPolicy: any;
	constructor(private http: Http) { }

	postdmca(dm) {
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post('http://localhost:8080/dmcas/updateDmca', dm, { headers: headers })
			.map(res => res.json());
	}

	updatePP(pp) {
		const headers = new Headers();
		this.loadToken();
		headers.append('Content-Type', 'application/json');
		return this.http.post('http://localhost:8080/privacypolicy/updatePP', pp, { headers: headers })
			.map(res => res.json());
	}

	// set up an interceptor!
	loadToken() {
		const token = localStorage.getItem('id_token');
		this.authToken = token;
	}
}
