import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const websiteRoutes = [
    {
        path: '',
        component: HomePage,
    },
    {
        path: 'about',
        component: AboutPage,
    },
    {
        path: 'contact',
        component: ContactPage,
    },
];

export default websiteRoutes;