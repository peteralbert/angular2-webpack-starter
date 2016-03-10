let angular = require('angular');
import {UpgradeAdapter} from 'angular2/upgrade';

require('angular-toastr');
require('style!css!angular-toastr/dist/angular-toastr.css');
import {App} from './app/app';
import {AppComponent} from './app/components/app/app.component';

var adapter = new UpgradeAdapter();
angular.module('app', ['toastr'])
    .directive('app', adapter.downgradeNg2Component(AppComponent));

adapter.upgradeNg1Provider('toastr');

export function main() {
    return adapter.bootstrap(document.body, ['app'])
}

/*
 * Hot Module Reload
 * experimental version by @gdi2290
 */

function bootstrapDomReady() {
  // bootstrap after document is ready
  return document.addEventListener('DOMContentLoaded', main);
}

if ('development' === process.env.ENV) {
  // activate hot module reload
  if (process.env.HMR) {
    if (document.readyState === 'complete') {
      main();
    } else {
      bootstrapDomReady();
    }
    module.hot.accept();
  } else {
    bootstrapDomReady();
  }
} else {
  bootstrapDomReady();
}
