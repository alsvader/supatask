import 'react-notifications-component/dist/theme.css';
import { AuthProvider } from '@/components';
import { ReactNotifications } from 'react-notifications-component';
import AppRouter from './router';

function App() {
	return (
		<AuthProvider>
			<ReactNotifications />
			<AppRouter />
		</AuthProvider>
	);
}

export default App;
