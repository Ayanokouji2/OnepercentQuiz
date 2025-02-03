import React from 'react';
import { useDispatch } from 'react-redux';
import { setTopicForQuiz } from '../store/features/quizSlice';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const TopicSelection = () => {

	const navigate = useNavigate();
	
	const [topic, setTopic] = React.useState('');
	const dispatch = useDispatch();

	const handleClick = () => {
		console.log(`user selected this topic: ${topic}`);
		topic !== ''
			? dispatch(setTopicForQuiz(topic))
			: toast.error('Topic cannot be empty');

		navigate('/quiz')
	};
	return (
		<div className='pb-72 bg-gradient-to-br from-indigo-100 to-purple-200 flex items-center justify-center p-4 sm:p-5 h-full'>
			<div className='w-full max-w-lg p-6 sm:p-8 shadow-lg rounded-2xl bg-white/80 backdrop-blur-lg text-center'>
				<h1 className='text-3xl sm:text-4xl font-extrabold text-gray-800 tracking-wider mb-6 sm:mb-10'>
					Select Your Topic
				</h1>
				<div className='flex flex-col gap-4 sm:gap-6'>
					<input
						type='text'
						onChange={(event) => setTopic(event.target.value)}
						placeholder='Enter subject for the quiz (e.g. Data Structures, Algorithms, Mathematics, Science)'
						className='w-full p-3 sm:p-4 text-base sm:text-lg font-medium bg-purple-50 rounded-lg border border-gray-300 shadow-sm transition-all duration-300'
					/>
					<button
						className='w-full p-3 sm:p-4 text-base sm:text-lg font-medium bg-purple-100 hover:bg-purple-400 rounded-lg border border-gray-300 shadow-sm hover:shadow-md transition-all duration-300'
						onClick={() => handleClick()}>
						Start Quiz
					</button>
				</div>
			</div>
		</div>
	);
};

export default TopicSelection;
