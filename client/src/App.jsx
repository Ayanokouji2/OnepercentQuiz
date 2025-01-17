import { useEffect, useState } from 'react';
import Data from './constant/data.json';
import { prompt } from './constant/prompt';
import model from './util/Gemini';

function App() {
	const [data, setData] = useState([]);
	const [index, setIndex] = useState(0);
	const [correctAnswerCount, setCorrectAnsCount] = useState(0);

	// model
	// 	.generateContent(prompt)
	// 	.then((res) => console.log(JSON.parse(res.response.text())))
	// 	.catch((err) => console.error(err));

	const handleSelect = (ans, id) => {
		setCorrectAnsCount((prev) => {
			return data.find((item) => item.id === id).correctAnswer === ans
				? prev + 1
				: prev;
		});

		setIndex((prev) => prev + 1);
	};

	useEffect(() => {
		setData(Data.questions);
	}, []);

	if (index === data.length) {
		return (
			<div className='min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 flex items-center justify-center p-4 sm:p-5'>
				<div className='w-full max-w-lg p-6 sm:p-8 shadow-lg rounded-2xl bg-white/80 backdrop-blur-lg text-center'>
					<h1 className='text-4xl sm:text-5xl font-extrabold text-gray-800 tracking-wider mb-8'>
						Quiz Complete!
					</h1>
					<p className='text-lg sm:text-xl font-semibold text-gray-600 mb-6'>
						You answered{' '}
						<span className='text-green-600 font-bold'>
							{correctAnswerCount}
						</span>{' '}
						correctly out of{' '}
						<span className='font-bold'>{data.length}</span>{' '}
						questions.
					</p>
					<div className='bg-gradient-to-r from-green-200 via-blue-200 to-purple-300 p-5 rounded-lg shadow'>
						<h2 className='text-2xl font-bold mb-4'>
							Your Performance
						</h2>
						<p className='text-base text-gray-700'>
							{correctAnswerCount / data.length >= 0.8
								? 'Excellent! You did a great job!'
								: correctAnswerCount / data.length >= 0.5
								? 'Good effort! Keep practicing to improve!'
								: 'Keep trying! Review the questions and come back stronger!'}
						</p>
					</div>
					<button
						onClick={() => window.location.reload()}
						className='mt-8 px-6 py-3 bg-indigo-500 text-white font-medium rounded-lg shadow-md hover:bg-indigo-600 transition-all'>
						Try Again
					</button>
				</div>
			</div>
		);
	}

	return (
		<div className='min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 flex sm:items-center justify-center sm:p-5 '>
			<div className='w-full max-w-lg p-6 sm:p-8 shadow-lg rounded-2xl bg-white/80 backdrop-blur-lg'>
				<h1 className='text-3xl sm:text-4xl text-center font-extrabold text-gray-800 tracking-wider mb-6 sm:mb-10'>
					Becoming
					<span className='text-red-500'> One </span>
					Percent
				</h1>
				<div className='bg-white shadow-md p-5 sm:p-6 rounded-xl'>
					<h2 className='text-xl sm:text-2xl font-semibold text-gray-700 text-center mb-4 sm:mb-6'>
						{data[index]?.question}
					</h2>
					<div className='flex flex-col gap-3 sm:gap-4'>
						{data[index]?.options.map((option, currentIndex) => (
							<button
								onClick={() =>
									handleSelect(option, data[index]?.id)
								}
								key={currentIndex + option.slice(0, 5)}
								className='w-full text-left p-3 sm:p-4 text-base sm:text-lg font-medium bg-gradient-to-r from-purple-50 to-purple-100 hover:bg-purple-200 rounded-lg border border-gray-300 shadow-sm hover:shadow-md transition-all'>
								{option}
							</button>
						))}
					</div>
				</div>
				<div className='text-center mt-6 sm:mt-8'>
					<p className='text-xs sm:text-sm text-gray-500 italic'>
						Keep going, you are doing great!
					</p>
				</div>
			</div>
		</div>
	);
}

export default App;
