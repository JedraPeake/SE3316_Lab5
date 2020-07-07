import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {

  authToken: any;
  user: any;
  privacyPolicy: any;
  constructor(private http: Http) { }

  registerUser(user) {
    console.log("xx");
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8080/users/register', user, { headers: headers })
      .map(res => res.json());
  }
  postdmca(dm) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8080/dmcas/updateDmca', dm, { headers: headers })
      .map(res => res.json());
  }
  authenticateUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8080/users/authenticate', user, { headers: headers })
      .map(res => res.json());
  }
  getdmca() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:8080/dmcas/getDmca', { headers: headers })
      .map(res => res.json());
  }
  getProfile() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:8080/users/profile', { headers: headers })
      .map(res => res.json());
  }
  getPP() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:8080/privacypolicy/getPP', { headers: headers })
      .map(res => res.json());
  }
  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }
  updatePP(pp) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8080/privacypolicy/updatePP', pp, { headers: headers })
      .map(res => res.json());
  }
  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn() {
    return tokenNotExpired('id_token');
  }

  getUsername() {
    return localStorage.getItem('user');//this.user;
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  createImagecollection(imageCollection) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8080/imageCollections/createCollection', imageCollection, { headers: headers })
      .map(res => res.json());
  }

  getCollections(currUser) {
    return this.http.get('http://localhost:8080/imageCollections/getUserCollections', { params: { "username": currUser } })
      .map(res => res.json());
  }


}
