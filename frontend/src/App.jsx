// -------------------------------------------------------Imports----------------------------------------------------
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./routes";
// --------------------------------------------------------------------------------------------------------------------

function App() {
  const router = routes();
  const appRouter = createBrowserRouter(router);
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
