import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div>
			<Link
				to="/getTopic"
				className="bg-purple-600/70 md:bg-red-200 rounded font-bold uppercase font-mono text-base block p-3 m-2 text-center">
				Start Quiz
			</Link>
			<div className="border-t border-black/50 m-2">
				<p className="text-center mt-2 font-semibold uppercase text-sm text-green-600">
					Profile Details
				</p>
			</div>
		</div>
	);
};

export default Home;
