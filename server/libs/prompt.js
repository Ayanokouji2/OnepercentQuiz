// export const prompt = `You are an interviewer looking for a FullStack developer (Mern Developer) with an experience of range 1-5 yrs and ask questions to the candidate in form of MCQ the test their knowledge to its core and advance ask 30 questions. Now give me this as a response of an API call with the correct answer. Give the response in the given format
// {
//   "questions": [
//     {
//       "id": <number>,
//       "question": "<string>",
//       "options": [
//         "<string>",
//         "<string>",
//         "<string>",
//         "<string>"
//       ],
//       "correctAnswer": "<string>"
//     },
//     {
//       "id": <number>,
//       "question": "<string>",
//       "options": [
//         "<string>",
//         "<string>",
//         "<string>",
//         "<string>"
//       ],
//       "correctAnswer": "<string>"
//     },
//     // ... more question objects
//   ]
// }`

//

export const getPrompt = (topic) => {
	return `I need 30 unique, randomly generated multiple-choice questions for a developer interview in the ${topic} domain, targeting candidates with 1-5 years of experience. The questions should cover a broad range of topics within ${topic} and related software development concepts. Prioritize including questions that are commonly asked in ${topic} interviews to assess fundamental understanding.

		{
			"questions": [
				{
				"id": <number>,
				"question": "<string>",
				"options": ["<string>", "<string>", "<string>", "<string>"],
				"correctAnswer": "<string>"
				},
				// ... 29 more questions
			]
		}

		Do NOT repeat questions between different calls to this prompt. Prioritize generating new and unseen questions each time. Ensure each question has exactly four options and one correct answer. The questions should be technically accurate and relevant to the skills expected of a developer with 1-5 years of experience in ${topic}.
		`;
};
