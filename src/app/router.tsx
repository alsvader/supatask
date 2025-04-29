import { createBrowserRouter, RouterProvider } from "react-router";
import { Dashboard, SignIn, SignUp } from "@/pages";
import { ProtectedRoute } from "@/components";

const routes = createBrowserRouter([
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
]);

function AppRouter() {
  return <RouterProvider router={routes} />;
}

export default AppRouter;
