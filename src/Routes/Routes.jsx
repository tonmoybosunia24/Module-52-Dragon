import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import News from "../Pages/News/News";
import PrivateRoute from "./PrivateRoute";

const Routes = createBrowserRouter([
       {
              path: '/',
              element: <Root></Root>,
              children: [
                     {
                            path: '/',
                            element: <Home></Home>,
                            loader: () => fetch('../../public/news.json')
                     },
                     {
                            path: '/news/:id',
                            element: <PrivateRoute><News></News></PrivateRoute>
                     },
                     {
                            path: '/Login',
                            element: <Login></Login>
                     },
                     {
                            path: '/Register',
                            element: <Register></Register>
                     }
              ]
       }
])
export default Routes