import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import CustomersPage from "./pages/customers";
import DeliveriesPage from "./pages/deliveries";
import InvoicesPage from "./pages/invoices";
import OrdersPage from "./pages/orders";
import PricesPage from "./pages/prices";
import ProductsPage from "./pages/products";
import ProductForm from "./pages/products/create";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/products",
        element: <ProductsPage />,
        children: [
          {
            path: "create",
            element: <ProductForm />,
          },
        ],
      },
      {
        path: "/customers",
        element: <CustomersPage />,
      },
      {
        path: "/prices",
        element: <PricesPage />,
      },
      {
        path: "/orders",
        element: <OrdersPage />,
      },
      {
        path: "/deliveries",
        element: <DeliveriesPage />,
      },
      {
        path: "/invoices",
        element: <InvoicesPage />,
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
