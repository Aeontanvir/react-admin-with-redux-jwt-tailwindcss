import DashboardPage from './pages/DashboardPage';
import SettingsPage from './pages/SettingsPage';

const adminRoutes = [
    {
        path: '',
        component: DashboardPage,
    },
    {
        path: 'settings',
        component: SettingsPage,
    },
];

export default adminRoutes;