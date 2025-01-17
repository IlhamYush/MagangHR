// @material-ui/icons
import Dashboard from '@material-ui/icons/Dashboard';
import Person from '@material-ui/icons/Person';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import BubbleChart from '@material-ui/icons/BubbleChart';
import LocationOn from '@material-ui/icons/LocationOn';
import Notifications from '@material-ui/icons/Notifications';
import BusinessRoundedIcon from '@material-ui/icons/BusinessRounded';

// core components/views for Admin layout
import DashboardPage from 'views/Dashboard/Dashboard.js';
// import TableList from 'views/TableList/TableList.js';
import Typography from 'views/Typography/Typography.js';
import Icons from 'views/Icons/Icons.js';
import Maps from 'views/Maps/Maps.js';
import NotificationsPage from 'views/Notifications/Notifications.js';
import Employees from 'views/Employees/Employees.js';
import CompanyManagement from 'views/CompanyManagement/CompanyManagement';
import AddEmployees from 'views/Employees/AddEmployees.js';
import Attendance from 'views/Attendance/Attendance';

const dashboardRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    rtlName: 'لوحة القيادة',
    icon: Dashboard,
    component: DashboardPage,
    layout: '/admin',
  },
  {
    path: '/employees',
    name: 'Employees',
    rtlName: 'ملف تعريفي للمستخدم',
    icon: Person,
    component: Employees,
    layout: '/admin',
  },
  {
    path: '/company',
    name: 'Company',
    icon: BusinessRoundedIcon,
    component: CompanyManagement,
    layout: '/admin',
  },
  {
    path: '/attendance',
    name: 'Attendance',
    rtlName: 'قائمة الجدول',
    icon: 'content_paste',
    component: Attendance,
    layout: '/admin',
  },
  {
    path: '/typography',
    name: 'Typography',
    rtlName: 'طباعة',
    icon: LibraryBooks,
    component: Typography,
    layout: '/admin',
  },
  {
    path: '/icons',
    name: 'Icons',
    rtlName: 'الرموز',
    icon: BubbleChart,
    component: Icons,
    layout: '/admin',
  },
  {
    path: '/maps',
    name: 'Maps',
    rtlName: 'خرائط',
    icon: LocationOn,
    component: Maps,
    layout: '/admin',
  },
  {
    path: '/notifications',
    name: 'Notifications',
    // rtlName: "إخطارات",
    icon: Notifications,
    component: NotificationsPage,
    layout: '/admin',
  },
  {
    path: '/addEmployee',
    name: 'Add Employee',
    component: AddEmployees,
    layout: '/admin/employees',
    hideInSidebar: true,
  },
];

export default dashboardRoutes;
