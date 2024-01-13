import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ShoppingContext, ShoppingContextType } from "./context/shoppingContext";
import Index from "./pages/index";
import Ecom from "./pages/Ecom";
import Error from "./pages/error";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <Index />,
    children: [
      {
        index: true,
        element: <Ecom />,
      },
      {
        path: "/products/:id",
        element: <Product />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

function Router() {
  const [shoppingCart, setShoppingCart] = useState<ShoppingContextType>({
    username: "filiptammergard",
    cart: [],
    addProduct: () => {},
    removeProduct: (id: String) => {},
  });
  return (
    <ShoppingContext.Provider value={shoppingCart}>
      <RouterProvider router={router} />
    </ShoppingContext.Provider>
  );
}

export default Router;
