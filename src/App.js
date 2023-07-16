import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";

import Register from "./pages/Register"
import Login from "./pages/Login";
import Single from "./pages/Single";
import Write from "./pages/Write";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "../src/style.scss";

const Layout = () => {
  return (
    <>

    <Navbar/>
    <Outlet/>
    <Footer/>

    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/https://ananya-gouda.github.io/blog-app-react/",
    element: <Layout/>,
    children: [


      {
        path: "https://ananya-gouda.github.io/blog-app-react/",
        element: <Home/>,
      },

      {
        path: "https://ananya-gouda.github.io/blog-app-react/post/:id",
        element: <Single/>,
      },

      {
        path: "https://ananya-gouda.github.io/blog-app-react/write",
        element: <Write/>,
      },
    ],
  },

  {
    path: "https://ananya-gouda.github.io/blog-app-react/register",
    element: <Register/>,
  },

  {
    path: "https://ananya-gouda.github.io/blog-app-react/login",
    element: <Login/>,
  },

]);


function App() {
  return (
    <div className="app" >
      <div className="container">
      <RouterProvider router = {router}/>
      </div>
    </div>
  );
}

export default App;
