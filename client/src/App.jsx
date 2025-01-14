import { useEffect, useState } from 'react';
import Data from './constant/data.json';
import { toast } from 'sonner';

function App() {
	const [data, setData] = useState([]);
	const [index, setIndex] = useState(0);

	const handlePrevClick = () => {
		if(index === 0){
			toast.error("This is the First Question")
			return;
		}
		setIndex((prev) => {
			return prev === 0 ? prev : prev - 1;
		})
	}
	useEffect(() => {
		setData(Data.questions);
	}, []);
	return (
		<>
			<div className='h-screen w-full bg-gray-100 '>
				<div className='text-2xl text-center p-3 font-semibold'>
					<h1 className='tracking-wide'>
						Becoming{' '}
						<span className='text-red-500 font-extrabold font-mono'>
							One
						</span>
						Percent
					</h1>
				</div>

				<div className='p-3 text-xl mt-7 font-semibold bg-slate-100'>
					<h2 className='text-2xl text-center'>{data[index]?.question}</h2>

					<div className='flex flex-col gap-5 mt-7 px-4'>
						{data[index]?.options.map((option, index) => (
							<p
								key={index + option.slice(0, 5)}
								className='shadow-md hover:shadow-lg hover:bg-purple-300/50 p-2 border rounded-lg border-black'>
								{option}
							</p>
						))}
					</div>

					<div className='flex justify-between p-11'>
						<button
							className='bg-sky-400 py-2 px-4 rounded-lg border border-black'
							onClick={() =>handlePrevClick()}>
							Prev
						</button>
						<button className='bg-emerald-300 py-2 px-4 rounded-lg border border-black'
							onClick={()=>{
								setIndex(prev=>{
									return prev === data.length - 1 ? prev : prev + 1 
								})
							}}
						>
							Next
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
