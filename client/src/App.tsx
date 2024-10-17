import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import Products from "./pages/products";
import ProductForm from "./pages/products/create";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/products",
        element: <Products />,
        children: [
          {
            path: "create",
            element: <ProductForm />,
          },
        ],
      },
      {
        path: "/customers",
        element: <Products />,
      },
      {
        path: "/prices",
        element: <Products />,
      },
      {
        path: "/orders",
        element: <Products />,
      },
      {
        path: "/deliveries",
        element: <Products />,
      },
      {
        path: "/invoices",
        element: <Products />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="h-full flex flex-col  bg-gradient-to-t from-primary/20 to-background">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
