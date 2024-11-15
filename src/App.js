import "./App.css";
import NavBar from "./components/NavBar";
import { Home, About, Error } from "./pages";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Sports from "./pages/Sports";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <NavBar />
        </>
      ),
      errorElement: (
        <>
          <NavBar />
          <Error />
        </>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        { path: "/about", element: <About /> },
        { path: "/sports", element: <Sports /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
