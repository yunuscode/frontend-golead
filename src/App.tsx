import "./App.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/auth/login";
import { ThemeProvider } from "./stores/theme.provider";

const router = createHashRouter([
  {
    path: "/auth/login",
    element: <Login />,
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
