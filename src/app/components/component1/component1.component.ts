import {Component} from 'angular2/core';

@Component({
  selector: 'component1',
  template: require('./component1.tpl.html'),
  host: {'flex': '', 'layout-padding': '', 'style': 'overflow: auto;'}
})

export class Component1Component {
    
    submit(form: any) {
        
    }
    
    alert(s) {
        console.log(s);
    }
    
}