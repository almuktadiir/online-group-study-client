import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layout/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CreateAssignments from "../Pages/CreateAssignments/CreateAssignments";
import AllAssignments from "../Pages/AllAssignments/AllAssignments";
import MyAssignments from "../Pages/MyAssignments/MyAssignments";
import SubmittedAssignments from "../Pages/SubmittedAssignments/SubmittedAssignments";
import AllAssignmentDetails from "../Pages/AllAssignments/AllAssignmentDetails";
import AllAssignmentUpdate from "../Pages/AllAssignments/AllAssignmentUpdate";
import SubmitMarks from "../Pages/SubmittedAssignments/SubmitMarks";
import PrivateRoute from "./PrivateRoute";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: ()=> fetch('http://localhost:5000/studyFeatures')
        },
        {
            path: '/allAssignments',
            element: <AllAssignments></AllAssignments>,
            loader: ()=> fetch('http://localhost:5000/allAssignments')
        },
        {
            path: '/allAssignmentsDetail/:id',
            element: <PrivateRoute><AllAssignmentDetails></AllAssignmentDetails></PrivateRoute>,
            // loader: ({params})=> fetch(`http://localhost:5000/allAssignments/${params._id}`)
            loader: ()=> fetch(`http://localhost:5000/allAssignments`)
        },
        {
            path: '/allAssignmentsUpdate/:id',
            element: <PrivateRoute><AllAssignmentUpdate></AllAssignmentUpdate></PrivateRoute>,
            loader: ()=> fetch(`http://localhost:5000/allAssignments`)
        },
        {
            path: '/myAssignments',
            element: <PrivateRoute><MyAssignments></MyAssignments></PrivateRoute>,
            loader: ()=> fetch('http://localhost:5000/myAssignment')
        },
        {
            path: '/submittedAssignments',
            element: <PrivateRoute><SubmittedAssignments></SubmittedAssignments></PrivateRoute>,
            loader: ()=> fetch('http://localhost:5000/submitAssignment')
        },
        {
          path: '/submitAssignMarking/:id',
          element: <PrivateRoute><SubmitMarks></SubmitMarks></PrivateRoute>,
          loader: ()=> fetch('http://localhost:5000/submitAssignment')
        },
        {
            path: '/createAssignments',
            element: <PrivateRoute><CreateAssignments></CreateAssignments></PrivateRoute>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        }
      ]
    },
  ]);


  export default router;