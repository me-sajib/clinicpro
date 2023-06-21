import authRoutes from "./Auth/AuthRoutes";
import Layout1 from "./components/Layouts/Layout1";
import NotFound from "./components/NotFound/NotFound";
import AuthGuard from "./contexts/AuthGuard";
import PageRoutes from "./pages/PageRoutes";

const routes = [
    {
        element: (
            <AuthGuard>
                <Layout1 />
            </AuthGuard>
        ),
        children: [...PageRoutes]
    },
    ...authRoutes,
    { path: "*", element: <NotFound /> },
]
export default routes;