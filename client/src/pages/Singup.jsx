import React from 'react';
import { toast } from 'sonner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

	const navigate = useNavigate();

	const handleSubmit = async (event) => {
		event.preventDefault();

		// Access form values directly from the form using event.target
		const formData = new FormData(event.target);
		const userData = {
			username: formData.get('username'),
			email: formData.get('email'),
			password: formData.get('password'),
			preparation: formData.get('preparation'),
		};

        console.log(userData)
		const toastId = toast.loading(`Creating Your Account, ${userData.username}`)
		try {
			const response = await axios.post(
				'/api/user/createUser',
				userData
			);
			toast.success(`Account Created successful`, {id : toastId})
			navigate("/getTopic")

			console.log(response)
			
		} catch (error) {
			toast.error(`${error.response.data.message}`, {id: toastId});
			console.error('Error:', error.response.data.message || 'Something went wrong.');
		}
	};

	return (
		<div className='flex justify-center p-3 bg-gradient-to-br from-blue-50 to-blue-200'>
			<div className='w-full max-w-md p-8 bg-white rounded-xl shadow-lg sm:max-w-lg md:max-w-xl'>
				<h2 className='text-2xl font-bold text-center text-blue-800 md:text-4xl '>
					Create Your Account
				</h2>
				<form
					className='space-y-6'
					onSubmit={handleSubmit}>
					<div>
						<label
							htmlFor='username'
							className='block text-sm font-semibold text-gray-700'>
							Username
						</label>
						<input
							type='text'
							id='username'
							name='username'
							placeholder='Enter your username'
							className='mt-2 w-full rounded-lg border border-gray-300 p-3 text-gray-900 shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-500 sm:text-base'
							required
						/>
					</div>
					<div>
						<label
							htmlFor='email'
							className='block text-sm font-semibold text-gray-700'>
							Email
						</label>
						<input
							type='email'
							id='email'
							name='email'
							placeholder='Enter your email'
							className='mt-2 w-full rounded-lg border border-gray-300 p-3 text-gray-900 shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-500 sm:text-base'
							required
						/>
					</div>
					<div>
						<label
							htmlFor='password'
							className='block text-sm font-semibold text-gray-700'>
							Password
						</label>
						<input
							type='password'
							id='password'
							name='password'
							placeholder='Enter your password'
							className='mt-2 w-full rounded-lg border border-gray-300 p-3 text-gray-900 shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-500 sm:text-base'
							required
						/>
					</div>
					<div>
						<label
							htmlFor='preparation'
							className='block text-sm font-semibold text-gray-700'>
							Preparation Type
						</label>
						<select
							id='preparation'
							name='preparation'
							className='mt-2 w-full rounded-lg border border-gray-300 p-3 text-gray-900 shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-500 sm:text-base'
							required>
							<option value='Interview'>Interview</option>
							<option value='Competition'>Competition</option>
						</select>
					</div>
					<div>
						<button
							type='submit'
							className='w-full py-3 rounded-lg bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 shadow-lg transition-all'>
							Sign Up
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Signup;
