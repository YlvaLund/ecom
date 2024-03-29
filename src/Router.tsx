import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ShoppingContext } from "./context/shoppingContext";
import Index from "./pages/index";
import Ecom from "./pages/Ecom";
import Error from "./pages/error";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import { ProductModel, CartModel } from "./models/models";

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
      {
        path: "/payment",
        element: <Payment />,
      },
    ],
  },
]);

function Router() {
  const [cart, setCart] = useState<CartModel>([]);
  // const [username, setUsername] = useState<string>("Ylva");

  const addProduct = (p: ProductModel) => {
    setCart((prevCart) => [...prevCart, p]);
  };

  const removeProduct = (p: ProductModel) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== p.id));
  };

  return (
    <ShoppingContext.Provider
      value={{
        username: "Ylva",
        addProduct: addProduct,
        removeProduct: removeProduct,
        clearCart: () => {
          setCart((prevCart) => []);
        },
        cart: cart,
      }}
    >
      <RouterProvider router={router} />
    </ShoppingContext.Provider>
  );
}

export default Router;
