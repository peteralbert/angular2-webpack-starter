import {PublicComponent} from '../public/public.component';
import {ShellComponent} from '../shell/shell.component';

export const ROUTE_CONFIG = [
    {
        path: '/...',
        name: 'Public',
        component: PublicComponent,
        useAsDefault: true,
        data: {
            component: 'PublicComponent'
        }
    },
    {
        path: '/shell/...',
        name: 'Shell',
        component: ShellComponent,
        data: {
            component: 'ShellComponent'
        }
    }
];