import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <ProductList />,
        loader: async () => {
          const res = await fetch("https://dummyjson.com/products");
          return res.json();
        }
      },
      {
        path: "product/:id",
        element: <ProductDetail />,
        loader: async ({ params }) => {
          const res = await fetch(`https://dummyjson.com/products/${params.id}`);
          return res.json();
        },
      },
      {
        path: "cart",
        element: <CartPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;