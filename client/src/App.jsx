import { Routes, Route } from "react-router-dom";
import Quiz from "./pages/Quiz";
import Signup from "./pages/Singup";
import Navbar from "./components/Navbar";
import TopicSelection from "./pages/TopicSelection";
import Result from "./pages/Result";
import Login from "./pages/Login";
import AuthProvider from "./context/auth/AuthProvider";
import ProtectedRoute from "./routes/ProtectedRoute";
import Home from "./pages/Home";

function App() {
	return (
		<AuthProvider>
			<Navbar />
			<Routes>
				<Route element={<ProtectedRoute authRequired={false} />}>
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
				</Route>

				{/* 🔹 Protected Routes (Only for logged-in users) */}
				<Route element={<ProtectedRoute authRequired={true} />}>
					<Route path="/" element={<Home />}/>
					<Route path="/getTopic" element={<TopicSelection />} />
					<Route path="/quiz" element={<Quiz />} />
					<Route path="/result" element={<Result />} />
				</Route>

			</Routes>
		</AuthProvider>
	);
}

export default App;
