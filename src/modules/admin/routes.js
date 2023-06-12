import { Routes, Route } from 'react-router-dom';
import AdminLayout from './components/AdminLayout'

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<AdminLayout />} />
        </Routes>
    );
};

export default AdminRoutes;