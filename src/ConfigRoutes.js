import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import websiteRoutes from './modules/website';
import authRoutes from './modules/auth';
import adminRoutes from './modules/admin';
import AdminLayout from "./modules/admin/components/AdminLayout";
import AuthLayout from "./modules/auth/components/AuthLayout";
import WebsiteLayout from "./modules/website/components/WebsiteLayout";

const ConfigRoutes = () => {
    return (
        <Router>
            <Routes>
               
                <Route
                    path="/auth/*"
                    element={
                        <AuthLayout>
                            <Routes>
                                {authRoutes.map((route, index) => (
                                    <Route key={index} path={route.path} element={<route.component />} />
                                ))}
                            </Routes>
                        </AuthLayout>
                    }
                />
                <Route
                    path="/admin/*"
                    element={
                        <AdminLayout>
                            <Routes>
                                {adminRoutes.map((route, index) => (
                                    <Route key={index} path={route.path} element={<route.component />} />
                                ))}
                            </Routes>
                        </AdminLayout>
                    }
                />
                <Route
                    path="/*"
                    element={
                        <WebsiteLayout>
                            <Routes>
                                {websiteRoutes.map((route, index) => (
                                    <Route key={index} path={route.path} element={<route.component />} />
                                ))}
                            </Routes>
                        </WebsiteLayout>
                    }
                />
                
            </Routes>
        </Router>
    );
};

export default ConfigRoutes;