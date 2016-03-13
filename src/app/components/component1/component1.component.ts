import {Component} from 'angular2/core';

@Component({
  selector: 'component1',
  template: require('./component1.tpl.html'),
  //styles: [ require('../../external_modules/gridforms/gridforms.css') ],
  host: {'flex': '', 'layout-padding': '', 'style': 'overflow: auto;'}
})

export class Component1Component {}