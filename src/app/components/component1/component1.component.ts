import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/toPromise'

@Component({
  selector: 'component1',
  template: require('./component1.tpl.html'),
  host: {'flex': '', 'layout-padding': '', 'style': 'overflow: auto;'}
})

export class Component1Component {
    
    submit(form: any) {
        console.log(form);
    }
    
    routerCanDeactivate() {
        return Observable.of(window.confirm('If you leave this form your changes will be lost. Leave this form?')).toPromise();
    }
    
}