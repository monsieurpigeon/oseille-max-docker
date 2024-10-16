import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import Products from "./pages/products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/products",
        element: <Products />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
