import { lazy } from 'react';

const routes = [
    {
        path: '/',
        component: lazy(() => import('@components/HomePage/HomePage')),
    },
    {
        path: '/blogs',
        component: lazy(() => import('@components/Blogs/Blog')),
    },
    {
        path: '/shop',
        component: lazy(() => import('@pages/OurShop/OurShop')),
    },
];

export default routes;
