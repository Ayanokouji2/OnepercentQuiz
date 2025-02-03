

/**
 * Higher-order function to handle async errors in Express route handlers
 * @param {Function} fn - Async function to be wrapped
 * @returns {Function} Express middleware function
 */
const asyncErrorHandler = (fn) => {
	return (req, res, next) => {
		Promise.resolve(fn(req, res, next))
			.catch((error) => {
				// If error has a status code, use it, otherwise default to 500
				const statusCode = error.statusCode || 500;
				
				// Send error response
				return res.status(statusCode).json({
					statusCode,
					success: false,
					message: error.message || 'Internal Server Error',
					error: {
						id: Math.floor(Math.random() * 30) + 1,
						code: statusCode,
						timestamp: new Date().toISOString(),
						path: req.originalUrl,
						method: req.method,
						...(process.env.NODE_ENV === 'development' && { 
							stack: error.stack,
							details: error.details || null
						})
					}
				});
			});
	};
};

export default asyncErrorHandler;
