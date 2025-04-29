import { useForm } from '@/hooks/useForm';
import type { PropsWithChildren } from 'react';
import type { FormData } from './types';

export interface AuthFormProps extends PropsWithChildren {
	title?: string;
	btnLabel?: string;
	onSubmit: (formData: FormData) => void;
}

export function AuthForm({ title = 'Sign In', btnLabel = 'Sign In', onSubmit, children }: AuthFormProps) {
	const { formData, handleInputChange, handleFormSubmit } = useForm<FormData>(
		{
			email: '',
			password: '',
		},
		(data: FormData) => {
			onSubmit?.(data);
		},
	);

	const { email, password } = formData;

	return (
		<div className="w-full max-w-md p-8 mt-[-100px]">
			<h1 className="text-center text-4xl text-white mb-10">{title}</h1>
			<form className="w-full flex flex-col items-center gap-5" onSubmit={handleFormSubmit}>
				<input
					className="input input-lg rounded-lg w-full"
					type="text"
					name="email"
					placeholder="Email"
					onChange={handleInputChange}
				/>
				<input
					className="input input-lg rounded-lg w-full"
					type="password"
					name="password"
					placeholder="Password"
					onChange={handleInputChange}
				/>
				<button
					className="btn btn-secondary btn-lg rounded-lg w-full mt-5"
					type="submit"
					disabled={!email || !password}
				>
					{btnLabel}
				</button>
			</form>
			{children}
		</div>
	);
}
