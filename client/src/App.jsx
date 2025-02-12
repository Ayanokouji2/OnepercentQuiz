import { Routes, Route } from 'react-router-dom';
import Quiz from './pages/Quiz';
import Singup from './pages/Singup';
import Navbar from './components/Navbar';
import TopicSelection from './pages/TopicSelection';
import Result from './pages/Result';

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route
					path='/'
					element={<Singup />}
				/>
				<Route
					path='/quiz'
					element={<Quiz />}
				/>
				<Route 
					path='/getTopic'
					element={<TopicSelection />} 
				/>
				<Route 
					path='/result'
					element={<Result />}
				/>
			</Routes>
		</>
	);
}

export default App;
