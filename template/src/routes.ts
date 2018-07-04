import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ServicesPage from './pages/Services';
import AnotherPage from './pages/Another';
import NotFoundPage from './pages/NotFound.vue';

export default [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/about/',
        component: AboutPage
    },
    {
        path: '/services/',
        component: ServicesPage
    },
    {
        path: '/about/another/',
        component: AnotherPage
    },
    {
        path: '(.*)',
        component: NotFoundPage
    }
];
