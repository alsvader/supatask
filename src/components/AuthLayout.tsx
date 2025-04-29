import { useAuth } from '@/hooks/useAuth';
import type { PropsWithChildren } from 'react';
import { Navigate } from 'react-router';

export function AuthLayout({ children }: PropsWithChildren) {
	const { session } = useAuth();

	if (session) {
		return <Navigate to="/" />;
	}

	return <div className="h-screen flex flex-col items-center justify-center">{children}</div>;
}
