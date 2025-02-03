import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { Toaster } from 'sonner';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Router>
			<Provider store={store}>
				<Toaster
					position='top-center'
					richColors
					duration={1000}
				/>
				<App />
			</Provider>
		</Router>
	</StrictMode>
);
