import {
    LoginPage,
    HomePage,
    PresentPage,
    ProfilePage,
    ErrorPage,
} from '~/pages';

import { LayoutCenter } from '~/components/Layout';

const publicRoutes = [
    { path: '/login', component: LoginPage, layout: LayoutCenter },
    { path: '/', component: HomePage },
    { path: '/present', component: PresentPage },
    {
        path: '/profilePage',
        component: ProfilePage,
        layout: LayoutCenter,
    },
    { path: '*', component: ErrorPage, layout: LayoutCenter },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
