import Login from "./Login";
import Registration from "./Registration";

const authRoutes = [
    { path: "/", element: <Login /> },
    { path: "/registration", element: <Registration /> }
]

export default authRoutes;