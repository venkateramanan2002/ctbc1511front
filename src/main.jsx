import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import { HashRouter as asdf } from 'react-router-dom';


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
 <asdf>

  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}>

      <ToastContainer position="top-center" />
    </RouterProvider>
  </QueryClientProvider>

 </asdf>

);
