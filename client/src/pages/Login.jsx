import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {toast} from 'sonner';
import useAuth from "../context/auth";

const Login = () => {
	
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
	const {login} = useAuth();

	const handleSubmit = async(e) => {
        
		e.preventDefault();
		const formData = new FormData(e.target);
        
        const obj = {
            email : formData.get("email"),
            password : formData.get('password')
        }
        
        const toastId = toast.loading("Logging User...!")
        try {
            setLoading(true);
            const {data} = await axios.post('/api/user/login',obj);

            if(data.success){
                toast.success("Succesfull ✅",{id: toastId})
				login(data.token)
                navigate("/quiz")
            }
        } catch (error) {
            toast.error(error.response.data.error || "Server is dead", {id: toastId})
        }finally{
            setLoading(false);
        }

        
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-900 via-purple-700 to-purple-500">
			<div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
				<h2 className="text-3xl font-bold text-center text-purple-800 mb-6">
					Welcome Back
				</h2>

				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<label className="block text-purple-700 font-semibold mb-2">
							Email Address
						</label>
						<input
							type="email"
                            name="email"
							className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
							placeholder="Enter your email"
							required
						/>
					</div>

					<div>
						<label className="block text-purple-700 font-semibold mb-2">
							Password
						</label>
						<input
							type="password"
                            name="password"
							className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
							placeholder="Enter your password"
							required
						/>
					</div>

					<button
						type="submit"
						className="w-full bg-purple-700 text-white py-2 rounded-lg font-semibold hover:bg-purple-800 transition">
						Login
					</button>
				</form>

				<p className="text-center text-sm text-purple-600 mt-4">
					Don't have an account?{" "}
					<a
						href="/register"
						className="font-bold text-purple-800 hover:underline">
						Sign up
					</a>
				</p>
			</div>
		</div>
	);
};

export default Login;
