
const asyncErrorHandler = (fn) => {
	return (req, res, next) => {
		Promise.resolve(fn(req, res, next))
			.catch((error) => {
				// If error has a status code, use it, otherwise default to 500
				const statusCode = error.statusCode || 500;
				
				// Send error response
				res.status(statusCode).json({
					success: false,
					message: `This Error is thrown from Handler ${error.message}` || 'Internal Server Error',
					// Include stack trace in development environment only
					...(process.env.NODE_ENV === 'development' && { stack: error.stack })
				});
			});
	};
};

export default asyncErrorHandler;
