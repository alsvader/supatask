import { useState } from 'react';

export function useForm<T>(initialState: T, onSubmit?: (data: T) => void) {
	const [formData, setFormData] = useState<T>(initialState);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onSubmit?.(formData);
	};

	const resetForm = () => {
		setFormData(initialState);
	};

	return { formData, handleInputChange, handleFormSubmit, resetForm };
}
