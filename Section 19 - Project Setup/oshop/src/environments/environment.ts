// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

//Task 2 - Add Firebase Credentials:
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBFZMLt3-XkOtFIBs0uSnBMpuqmfwQtg6Y",
    authDomain: "oshop-73f57.firebaseapp.com",
    databaseURL: "https://oshop-73f57.firebaseio.com",
    projectId: "oshop-73f57",
    storageBucket: "oshop-73f57.appspot.com",
    messagingSenderId: "148438516618"
  }
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
