import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';

@Injectable()
export class UserService {

	authToken: any;
	baseURL: string = environment.BACKEND_API_BASE;

	constructor(private http: Http) { }

	getProfile() {
		const headers = new Headers();
		this.loadToken();
		headers.append('Authorization', this.authToken);
		headers.append('Content-Type', 'application/json');
		return this.http.get(`${this.baseURL}/users/profile`, { headers: headers })
			.map(res => res.json());
	}

	createImageCollection(imageCollection) {
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post(`${this.baseURL}/imageCollections/createCollection`, imageCollection, { headers: headers })
			.map(res => res.json());
	}

	getCollections(currUser) {
		return this.http.get(`${this.baseURL}/imageCollections/getUserCollections`, { params: { "username": currUser } })
			.map(res => res.json());
	}

	// this is horrible, lets set up a profile modal
	getUsername() {
		return localStorage.getItem('user'); // this.user;
	}

	// interceptor
	loadToken() {
		const token = localStorage.getItem('id_token');
		this.authToken = token;
	}
}
