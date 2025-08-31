import { lazy } from 'react';

const routes = [
    {
        path: '/',
        component: lazy(() => import('@components/HomePage/HomePage'))
    },
    {
        path: '/blogs',
        component: lazy(() => import('@components/Blogs/Blog'))
    }
];

export default routes;
