import Dashboard from "./Dashboard/Dashboard";
import Doctors from "./Doctors/Doctors";
import ViewDoctor from "./Doctors/Details/ViewDoctor";
import Employee from "./Employee/Employee";
import Patients from "./Patients/Patients";
import SalarySheets from "./SalarySheets/SalarySheets";
import Schedules from "./Schedules/Schedules";

const PageRoutes = [
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/doctors", element: <Doctors /> },
    { path: "/doctors/:id", element: <ViewDoctor /> },
    { path: "/patients", element: <Patients /> },
    { path: "/schedules", element: <Schedules /> },
    { path: "/employee", element: <Employee /> },
    { path: "/salary_sheet", element: <SalarySheets /> },
]

export default PageRoutes;