import "./App.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/auth/login";
import { ThemeProvider } from "./stores/theme.provider";
import Layout from "@/components/global/layout";
import Home from "./pages/dashboard/home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BillingPage from "./pages/settings/billing";

const router = createHashRouter([
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/settings/billing",
    element: <Layout children={<BillingPage />} />,
  },
  {
    path: "/",
    element: <Layout children={<Home />} />,
  },
]);

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
