import DashboardPage from './pages/DashboardPage';
import ProjectsPage from './pages/ProjectsPage';
import SettingsPage from './pages/SettingsPage';

const adminRoutes = [
    {
        path: '',
        component: DashboardPage,
    },
    {
        path: 'projects',
        component: ProjectsPage,
    },
    {
        path: 'settings',
        component: SettingsPage,
    },
];

export default adminRoutes;