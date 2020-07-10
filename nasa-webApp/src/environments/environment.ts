// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
	production: false,

	// old key just put in a removal request with NASA
	// will be in the backend for security moving forward
	NASA_API_KEY: 'ZoaThVJGK3hSE0NO8pXlPAohOBBZOs6cpanUJvUN',
	// NASA_API_URL: 'https://api.nasa.gov/planetary/apod?api_key='
	NASA_API_URL: 'https://images-api.nasa.gov/search',

	BACKEND_API_BASE: 'http://localhost:8080'
};
