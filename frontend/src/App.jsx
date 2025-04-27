// -------------------------------------------------------Imports----------------------------------------------------
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./routes";
import { ToastContainer } from "react-toastify";

// --------------------------------------------------------------------------------------------------------------------

function App() {
  const router = routes();
  const appRouter = createBrowserRouter(router);
  return (
    <>
      <RouterProvider router={appRouter} />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
