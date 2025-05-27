import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import router from "./routes/route.index";
import { RouterProvider } from "react-router-dom";
import "./main.css";
import { Bounce, ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { store } from "./store/store";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ChakraProvider>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        limit={5}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
        transition={Bounce}
      />
    </ChakraProvider>
  </Provider>
);
