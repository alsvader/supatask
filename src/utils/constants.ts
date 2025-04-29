import type { iNotification } from 'react-notifications-component';

export const NOTIFICATION_SETTINGS: iNotification = {
	title: 'Success',
	message: 'SupaTask',
	type: 'success',
	insert: 'top',
	container: 'top-right',
	animationIn: ['animate__animated', 'animate__fadeIn'],
	animationOut: ['animate__animated', 'animate__fadeOut'],
	dismiss: {
		duration: 5000,
		onScreen: true,
		showIcon: true,
	},
};
