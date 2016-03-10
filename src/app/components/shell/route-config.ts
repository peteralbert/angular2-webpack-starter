import {BlankComponent} from '../blank/blank.component';
import {Component1Component} from '../component1/component1.component';
import {Component2Component} from '../component2/component2.component';

let loremIpsum = 'Mauris eleifend est et turpis. Duis id erat. Suspendisse potenti. Aliquam vulputate, pede vel vehicula accumsan, mi neque rutrum erat, eu congue orci lorem eget lorem. Vestibulum non ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce sodales. Quisque eu urna vel enim commodo pellentesque. Praesent eu risus hendrerit ligula tempus pretium. Curabitur lorem enim, pretium nec, feugiat nec, luctus a, lacus. Duis cursus. Maecenas ligula eros, blandit nec, pharetra at, semper at, magna. Nullam ac lacus. Nulla facilisi. Praesent viverra justo vitae neque. Praesent blandit adipiscing velit. Suspendisse potenti. Donec mattis, pede vel pharetra blandit, magna ligula faucibus eros, id euismod lacus dolor eget odio. Nam scelerisque. Donec non libero sed nulla mattis commodo. Ut sagittis. Donec nisi lectus, feugiat porttitor, tempor ac, tempor vitae, pede. Aenean vehicula velit eu tellus interdum rutrum. Maecenas commodo. Pellentesque nec elit. Fusce in lacus. Vivamus a libero vitae lectus hendrerit hendrerit.';

export const ROUTE_CONFIG = [
    {
        path: '/',
        name: 'Blank',
        component: BlankComponent,
        data: {
            label: 'Home',
            description: loremIpsum,
            icon: 'home'
        }
    },
    {
        path: '/component1',
        name: 'Component1',
        component: Component1Component,
        data: {
            label: 'Component 1',
            description: loremIpsum,
            icon: 'numeric-1-box'
        }
    },
    {
        path: '/component2',
        name: 'Component2',
        component: Component2Component,
        data: {
            label: 'Component 2',
            description: loremIpsum,
            icon: 'numeric-2-box'
        }
    }
]