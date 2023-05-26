import { Routes, Route } from 'react-router-dom';
// import { ProtectedRoute } from '../protectedRoute/ProtectedRoute';

// import Page404 from '../../containers/page404/Page404';

import Login from '../../components/form/login/Login';
import SignUp from '../../components/form/signUp/SignUp';
import NewPass from '../../components/form/newPass/NewPass';
import StepsProcess from '../../components/application/stepsProcess/StepsProcess';
import Tickets from '../../components/tickets/tickets/Tickets';
import Notification from '../../components/notifications/notifications/Notification';


const AppRouter = () => {
    const routes = [
        // {
        //     path: '*',
        //     component: <Page404 />,
        //     protected: false,
        //     exact: false,
        // },
        // {
        //     path: '/onboarding',
        //     component: <Onboarding />,
        //     protected: false,
        //     exact: true,
        // },
        {
            path: '/auth/login',
            component: <Login />,
            protected: false,
            exact: true,
        },
        {
            path: '/auth/signup',
            component: <SignUp />,
            protected: false,
            exact: true,
        },
        // {
        //     path: '/auth/forget_password',
        //     component: <ForgetPass />,
        //     protected: false,
        //     exact: true,
        // },
        // {
        //     path: '/auth/google_account',
        //     component: <GoogleAcc />,
        //     protected: false,
        //     exact: true,
        // },
        {
            path: '/auth/change_password',
            component: <NewPass />,
            protected: false,
            exact: true,
        },
        // {
        //     path: '/dashboard',
        //     component: <Dashboard />,
        //     protected: true,
        //     exact: true
        // },
        {
            path: '/dashboard/new_ticket',
            component: <Tickets />,
            protected: true,
            exact: true
        },
        {
            path: '/dashboard/new-application',
            component: <StepsProcess />,
            protected: true,
            exact: true
        },
        // {
        //     path: '/dashboard/profile',
        //     component: <Profile />,
        //     protected: true,
        //     exact: true
        // },
    ]
    return (
        <Routes>
            {routes.map((element, index) => (
                <>
                    <Route key={`approutes_${index}`} exact={element.exact} path={element.path} element={element.protected ?
                        <>
                            {element.component}
                        </>
                        :
                        element.component
                    } />
                </>
            ))}
        </Routes>
    );
};

export default AppRouter;