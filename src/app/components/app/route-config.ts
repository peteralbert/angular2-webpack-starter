import {AboutComponent} from '../about/about.component';
import {ShellComponent} from '../shell/shell.component';

export const ROUTE_CONFIG = [
    {
        path: '/...',
        name: 'Shell',
        component: ShellComponent,
        useAsDefault: true,
        data: {
            component: 'ShellComponent'
        }
    },
    {
        path: '/about',
        name: 'About',
        component: AboutComponent,
        data: {
            component: 'AboutComponent'
        }
    }
];