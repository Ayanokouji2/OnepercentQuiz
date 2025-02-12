import { useSelector } from 'react-redux';
const Result = () => {

    const score = useSelector((state)=> state.quiz.score)
    
    return (
        <div className='bg-gradient-to-br from-indigo-100 to-purple-200 flex items-center justify-center p-4 sm:p-5'>
            <div className='w-full max-w-lg p-6 sm:p-8 shadow-lg rounded-2xl bg-white/80 backdrop-blur-lg text-center'>
                <h1 className='text-4xl sm:text-5xl font-extrabold text-gray-800 tracking-wider mb-8'>
                    Quiz Complete!
                </h1>
                <p className='text-lg sm:text-xl font-semibold text-gray-600 mb-6'>
                    You answered{' '}
                    <span className='text-green-600 font-bold'>
                        {score}
                    </span>{' '}
                    correctly out of{' '}
                    <span className='font-bold'>{30}</span>{' '}
                    questions.
                </p>
                <div className='bg-gradient-to-r from-green-200 via-blue-200 to-purple-300 p-5 rounded-lg shadow'>
                    <h2 className='text-2xl font-bold mb-4'>
                        Your Performance
                    </h2>
                    <p className='text-base text-gray-700'>
                        {score /30 >= 0.8
                            ? 'Excellent! You did a great job!'
                            : score / 30 >= 0.5
                            ? 'Good effort! Keep practicing to improve!'
                            : 'Keep trying! Review the questions and come back stronger!'}
                    </p>
                </div>
                <button
                    onClick={() => window.location ="/quiz"}
                    className='mt-8 px-6 py-3 bg-indigo-500 text-white font-medium rounded-lg shadow-md hover:bg-indigo-600 transition-all'>
                    Try Again
                </button>
            </div>
        </div>
    );
}

export default Result