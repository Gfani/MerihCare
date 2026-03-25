import { createBrowserRouter } from "react-router";
import AdminDashboard from "./pages/admin-dashboard";
import ProviderApp from "./pages/provider-app";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: AdminDashboard,
  },
  {
    path: "/provider",
    Component: ProviderApp,
  },
]);
