export interface LoadingProps {
	message?: string;
	className?: string;
}

export function Loading({ message = 'Loading...', className }: LoadingProps) {
	const classes = `h-screen flex flex-col items-center justify-center gap-4 ${className}`;

	return (
		<div className={classes}>
			<span className="loading loading-spinner text-secondary w-15" />
			<p className="text-2xl">{message}</p>
		</div>
	);
}
