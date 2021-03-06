import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {
	authToken: any;
	user: any;
	baseURL: string = environment.BACKEND_API_BASE;

	constructor(private http: Http) { }

	// i don't think these should be /users, probs /auth but gonna do frontend clean first
	// note check all endpoints

	registerUser(user) {
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post(`${this.baseURL}/users/register`, user, { headers: headers })
			.map(res => res.json());
	}

	authenticateUser(user) {
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post(`${this.baseURL}/users/authenticate`, user, { headers: headers })
			.map(res => res.json());
	}

	storeUserData(token, user) {
		localStorage.setItem('id_token', token);
		localStorage.setItem('user', JSON.stringify(user));
		this.authToken = token;
		this.user = user;
	}

	loadToken() {
		const token = localStorage.getItem('id_token');
		this.authToken = token;
	}

	loggedIn() {
		return tokenNotExpired('id_token');
	}

	logout() {
		this.authToken = null;
		this.user = null;
		localStorage.clear();
	}
}
