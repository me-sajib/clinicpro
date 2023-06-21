import CheckOtp from "./CheckOtp";
import Login from "./Login";
import Registration from "./Registration";
import ResetPassword from "./ResetPassword";
import SetNewPassword from "./SetNewPassword";

const authRoutes = [
    { path: "/", element: <Login /> },
    { path: "/registration", element: <Registration /> },
    { path: "/forget_password", element: <ResetPassword/> },
    { path: "/check_otp", element: <CheckOtp/> },
    { path: "/set_new_password", element: <SetNewPassword/> },
]

export default authRoutes;