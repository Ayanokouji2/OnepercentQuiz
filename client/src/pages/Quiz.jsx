import { useState, useEffect, useCallback } from 'react';
// import Data from '../constant/data.json';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { manageScore, setQuestions } from '../store/features/quizSlice';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading'

const Quiz = () => {
	const [loading, setLoading] = useState(true);
	const [index, setIndex] = useState(0);
	const [correctAnswerCount, setCorrectAnsCount] = useState(0);

	const topic = useSelector((state) => state.quiz.topic);
	const questions = useSelector((state) => state.quiz.questions);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		(async () => {
			setLoading(true);
			const { data: responseData } = await axios.get(
				`/api/user/getQuiz?topic=${topic}`
			);
			// console.log(responseData?.questions?.questions, 'fetched from db');
			dispatch(setQuestions(responseData?.questions?.questions));
			setLoading(false);
		})();
	}, [topic, dispatch, questions.length]);

	const handleSelect = (ans, id) => {
		// console.log(questions?.find((item) => item.id === id));
		setCorrectAnsCount((prev) => {
			return questions?.find((item) => item.id === id).correctAnswer ===
				ans
				? prev + 1
				: prev;
		});

		setIndex((prev) => prev + 1);
	};

	useEffect(() => {
		if (index === 30) {
			setLoading(true);
			dispatch(manageScore(correctAnswerCount));
			
			setTimeout(() => navigate('/result'), 1000);
			 // Delay navigation to ensure state updates
		}
	}, [index, dispatch, correctAnswerCount, navigate]);

	if (loading) {
		return <Loading />
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
						{!loading && questions[index]?.question}
					</h2>
					<div className='flex flex-col gap-3 sm:gap-4'>
						{(
							questions.length > 0 && questions[index]
						)?.options.map((option, currentIndex) => (
							<button
								onClick={() =>
									handleSelect(option, questions[index]?.id)
								}
								key={currentIndex + option.slice(0, 5)}
								className='w-full text-left p-3 sm:p-4 text-base sm:text-lg font-medium bg-purple-100 hover:bg-purple-300 rounded-lg border border-gray-300 shadow-sm hover:shadow-md transition-all duration-300'>
								{option}
							</button>
						))}
					</div>
				</div>
				<div className='text-center mt-6 sm:mt-8'>
					<p className='text-xs sm:text-sm text-gray-500 italic sm:text-center'>
						Keep going, you are doing great!
					</p>
				</div>
			</div>
		</div>
	);
};

export default Quiz;
