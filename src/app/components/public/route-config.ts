import {DefaultComponent} from '../default/default.component';
import {LoginComponent} from '../login/login.component';

export const ROUTE_CONFIG = [
    {
        path: '/',
        name: 'Default',
        component: DefaultComponent,
        useAsDefault: true,
        data: {
            component: 'DefaultComponent'
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginComponent,
        data: {
            component: 'LoginComponent'
        }
    }
];