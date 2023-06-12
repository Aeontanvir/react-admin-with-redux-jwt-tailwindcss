import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard'

const AdminRoutes = () => {
    return (
        <Routes>
                <Route path="/" element={<Dashboard />} />
        </Routes>
    );
};

export default AdminRoutes;