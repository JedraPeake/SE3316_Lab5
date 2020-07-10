import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';

// this needs to happen on the backend for security,
// cause it's like impossible to hide keys in the front end

@Injectable()
export class ImageService {
	private query: string;
	private API_KEY: string = environment.NASA_API_KEY;
	private API_URL: string = environment.NASA_API_URL;
	private URL: string = environment.NASA_API_URL + '?q='; // this.API_URL + this.API_KEY + '&q=';

	constructor(private _http: Http) {
	}

	getImage(query) {
		return this._http.get(this.URL + query).map(res => res.json());
	}

}
