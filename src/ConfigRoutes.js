import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WebsiteRoutes from './modules/website';
import AuthRoutes from './modules/auth';
import AdminRoutes from './modules/admin';

const ConfigRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/auth/*" element={<AuthRoutes />} />
                <Route path="/admin/*" element={<AdminRoutes />} />
                <Route path="*" element={<WebsiteRoutes />} />
            </Routes>
        </Router>
    );
};

export default ConfigRoutes;