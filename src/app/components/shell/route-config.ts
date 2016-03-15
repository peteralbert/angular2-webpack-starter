import {HomeComponent} from '../home/home.component';
import {Component1Component} from '../component1/component1.component';
import {Component2Component} from '../component2/component2.component';
import {AboutComponent} from '../about/about.component';

export const ROUTE_CONFIG = [
    {
        path: '/',
        name: 'Home',
        component: HomeComponent,
        data: {
            component: 'HomeComponent',
            label: 'Home',
            icon: 'mdi-home',
            class: 'home'
        }
    },
    {
        path: '/component1',
        name: 'Component1',
        component: Component1Component,
        data: {
            component: 'Component1Component',
            label: 'Example Form',
            description: require('../component1/description.tpl.html'),
            icon: 'mdi-numeric-1-box',
            class: 'component-1'
        }
    },
    {
        path: '/component2',
        name: 'Component2',
        component: Component2Component,
        data: {
            component: 'Component2Component',
            label: 'Component 2',
            description: require('../component2/description.tpl.html'),
            icon: 'mdi-numeric-2-box',
            class: 'component-2'
        }
    },
    {
        path: '/about',
        name: 'About',
        component: AboutComponent,
        data: {
            component: 'AboutComponent',
            label: 'About',
            icon: 'mdi-help',
            class: 'about'
        }
    }
];