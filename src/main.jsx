import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./style/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Pages/About.jsx";
import SignUp from "./Pages/SignUp.jsx";
import Login from "./Pages/LogIn.jsx";
import SingleProduct from "./Pages/SingleProduct.jsx";
import Contact from "./Pages/Contact.jsx";
import Account from "./Pages/Account.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import { CartContextProvider, useCartContext } from "./Context/Provider.jsx";
import Cart from "./Pages/Cart.jsx";
import CheckOut from "./Pages/CheckOut.jsx";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/products/:id",
    element: <SingleProduct />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/account",
    element: <Account />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/checkout",
    element: <CheckOut />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <main className="container overflow-x-hidden">
      <Toaster />
      <CartContextProvider>
        <Navbar />
        <RouterProvider router={router} />
        <Footer />
      </CartContextProvider>
    </main>
  </StrictMode>
);
