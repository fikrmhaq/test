import Dashboard from "../pages/admin/Dashboard";
import ShippingComps from "../pages/admin/Shippingcomps";
import EditShippingComps from "../pages/admin/Shippingcomps/edit";
import TambahShippingComps from "../pages/admin/Shippingcomps/tambah";
import Login from "../pages/public/Login";
import Profile from "../pages/public/Profile";

const routes = [
    {
        name: 'Profile',
        path: "profile",
        element: <Profile />,
    },
    {
        name: 'Login',
        path: "",
        element: <Login />,
    },
    {
        name: 'Dashboard',
        path: "dashboard",
        element: <Dashboard />,
        log: true
    },
    {
        name: 'ShippingComps',
        path: "shippingcomps",
        element: <ShippingComps />,
        log: true
    },
    {
        name: 'TambahShippingComps',
        path: "shippingcomps/tambah",
        element: <TambahShippingComps />,
        log: true
    },
    {
        name: 'EditShippingComps',
        path: "shippingcomps/edit",
        element: <EditShippingComps />,
        log: true
    },
]

export default routes