import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RoutePage from "./pages/routes/RoutePage";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RoutePage />} />
    </>
  )
);

const App = () => {
  return <RouterProvider router={routes} />;
};
export default App;
