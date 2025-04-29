import type { PropsWithChildren } from "react";
import { Navigate } from "react-router";
import { useAuth } from "@/hooks/useAuth";

export function ProtectedRoute({ children }: PropsWithChildren) {
  const { session } = useAuth();

  if (!session) {
    return <Navigate to="/sign-in" />;
  }

  return children;
}
