import "./App.css";
import Login from  "./pages/login/Login.tsx";
import Register from  "./pages/register/Register.tsx";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/login",
            element: <Login/>,
        },
        {
            path:"/register",
            element:<Register/>
        }
    ]);

    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    );
};

export default App;
