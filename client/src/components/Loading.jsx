import React from "react";

const Loading = () => {
	return (
		<div className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-200">
			<div className="flex flex-col items-center">
				<div className="animate-spin rounded-full h-16 w-16 border-b-4 border-purple-500"></div>
				<p className="mt-4 text-lg font-medium text-gray-700">
					Loading ...
				</p>
			</div>
		</div>
	);
};

export default Loading;
