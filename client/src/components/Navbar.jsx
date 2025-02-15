import React from "react";
import { Link } from "react-router-dom";
import useAuth from '../context/auth/index'
const Navbar = () => {

	const {isUser} = useAuth();

	return (
		<nav className="bg-gradient-to-r from-purple-600 to-purple-400 py-4 px-8 md:px-12 lg:px-16">
			<div className="flex justify-between items-center px-4 md:px-8 lg:px-12">
				<div className="flex items-center cursor-pointer">
					<Link to={"/"} role="button" className="flex items-center">
						<img
							src="./transparentLogo.png"
							alt="Knowmia Logo"
							className="h-8 w-8 mr-2"
						/>
						<span className="text-white text-xl font-bold">Knowmia</span>
					</Link>
				</div>
				<div className="flex items-center">
					{!isUser && <button
						className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded"
						onClick={() => (window.location = "/login")}>
						Login
					</button>}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
