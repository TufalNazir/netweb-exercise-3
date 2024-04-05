import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
// import {applyPolyfills,
//   defineCustomElements as defineProductMgmtExp} from 'stencil-lib-2/loader'


import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

// applyPolyfills().then(() => {
//   defineProductMgmtExp(window);
// });
