import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const adminRoutes = [
    {
        path: '',
        component: LoginPage,
    },
    {
        path: 'register',
        component: RegisterPage,
    },
];

export default adminRoutes;