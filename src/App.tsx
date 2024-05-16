import "./App.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/auth/login";
import { ThemeProvider } from "./stores/theme.provider";
import Layout from "@/components/global/layout";
import Home from "./pages/dashboard/home";

const router = createHashRouter([
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout children={<Home />} />,
  },
]);

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
