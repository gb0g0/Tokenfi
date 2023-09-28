import Home from "./pages/Home";
import Create from "./pages/Create";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
    </>
  )
);

export default router;
