import React, {useState} from "react"
import{ createBrowserRouter, Outlet, RouterProvider, useLocation, Navigate }from "react-router-dom"
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import LogIn from "./pages/LogIn/LogIn"
import Dashboard from './pages/Dashboard/Dashboard'
import FooterLogIn from "./components/FooterLogIn/FooterLogIn"
import './App.sass'
import MapsSelect from "./pages/MapsSelect/MapsSelect"
import AddInfo from "./pages/AddInfo/AddInfo"
import AddNovedad from "./pages/AddNovedad/AddNovedad"

const Layouts = () =>{
  
  const location = useLocation();
  const isLoginPage = location.pathname === '/';

  const [logInUser, setLogInUser] = useState(true)

  console.log(logInUser)

  if (!logInUser && !isLoginPage) {
    return <Navigate to="/" />;
  }

  if (logInUser && isLoginPage) {
    return <Navigate to="/dashboard" />;
  }

  
  const shouldShowHeaderAndMenu = logInUser && !isLoginPage;

  return (
    <div className="app">
      {shouldShowHeaderAndMenu && <Header />}
      <Outlet />
      {isLoginPage ? <FooterLogIn /> : <Footer />}
    </div>
  );
};

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layouts />,
    children:[
      {
        path:"/",
        element: <LogIn />
      },
      {
        path:"/dashboard",
        element: <Dashboard />
      },
      {
        path:"/mapsselect",
        element: <MapsSelect />
      },
      {
        path:"/addinfo",
        element: <AddInfo />
      },
      {
        path:"/addnovedad",
        element: <AddNovedad />
      },
      /* 
      {
        path:"/municipio/:id",
        element: <Municipio />
      },
      {
        path:"/profile",
        element: <Profile />
      },
      {
        path:"/configuration",
        element: <Configuration />
      },
      {
        path:"/addinfo",
        element: <AddInfo />
      },
      {
        path:"*",
        element: <NotFound />
      }, */
    ],
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App;
