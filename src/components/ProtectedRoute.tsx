import { useAuth } from '@/hooks/useAuth';
import type { PropsWithChildren } from 'react';
import { Navigate } from 'react-router';

export function ProtectedRoute({ children }: PropsWithChildren) {
	const { session } = useAuth();

	if (!session) {
		return <Navigate to="/sign-in" />;
	}

	return children;
}
