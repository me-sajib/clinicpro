import Dashboard from "./Dashboard/Dashboard";
import Doctors from "./Doctors/Doctors";
import Employee from "./Employee/Employee";
import Patients from "./Patients/Patients";
import SalarySheets from "./SalarySheets/SalarySheets";

const PageRoutes = [
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/doctors", element: <Doctors /> },
    { path: "/patients", element: <Patients /> },
    { path: "/employee", element: <Employee /> },
    { path: "/salary_sheet", element: <SalarySheets /> },
]

export default PageRoutes;