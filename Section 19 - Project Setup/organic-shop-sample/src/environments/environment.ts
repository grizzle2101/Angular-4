// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBJPQz0nOog8jzjcxBARVvlthS530K6wSo',
    authDomain: 'fir-demo-fd737.firebaseapp.com',
    databaseURL: 'https://fir-demo-fd737.firebaseio.com',
    projectId: 'fir-demo-fd737',
    storageBucket: 'fir-demo-fd737.appspot.com',
    messagingSenderId: '35878365766'
  }
};