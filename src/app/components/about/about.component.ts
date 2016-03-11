import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';

@Component({
  selector: 'about',
  template: require('./about.tpl.html'),
  host: {'flex': '', 'layout': 'column', 'layout-align': 'center center'},
  directives: [...ROUTER_DIRECTIVES]
})
export class AboutComponent {
    
    constructor (private _router: Router) {
    }
    
    close() {
        this._router.navigate(['/Shell']);
    }
}