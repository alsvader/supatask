import { AuthForm, AuthLayout } from '@/components';
import type { FormData } from '@/components';
import { useAuth } from '@/hooks/useAuth';
import { NOTIFICATION_SETTINGS } from '@/utils/constants';
import { useState } from 'react';
import { Store } from 'react-notifications-component';
import { Link, useNavigate } from 'react-router';

function SignUp() {
	const [error, setError] = useState<string | undefined>(undefined);
	const { signUp } = useAuth();
	const navigate = useNavigate();

	const handleFormSubmit = async (formData: FormData) => {
		try {
			const response = await signUp(formData);

			if (!response?.success) {
				Store.addNotification({
					...NOTIFICATION_SETTINGS,
					title: 'Error',
					type: 'danger',
					message: response?.error?.message,
				});

				setError(response?.error?.message);
				return;
			}

			navigate('/');
		} catch (_) {
			Store.addNotification({
				...NOTIFICATION_SETTINGS,
				title: 'Error',
				type: 'danger',
				message: 'Something went wrong',
			});
			setError('Something went wrong');
		}
	};

	return (
		<AuthLayout>
			<AuthForm title="Sign Up" btnLabel="Sign Up" onSubmit={handleFormSubmit}>
				<p className="text-center mt-5">
					Already have an account?{' '}
					<Link
						to="/sign-in"
						className="font-bold relative after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
					>
						Log In
					</Link>
				</p>
			</AuthForm>
		</AuthLayout>
	);
}

export default SignUp;
