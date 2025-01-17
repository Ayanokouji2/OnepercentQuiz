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

export const getPrompt = (TOPIC) => {
	// return `You are an experienced technical interviewer with over 10 years of experience hiring software developers. Generate 30 multiple-choice questions (MCQs) for a technical interview. Each question should have four unique options with one correct answer. The topic of focus ${TOPIC}.

	// 	Ensure that questions are designed to assess candidates with 2 to 8 years of professional experience, covering a mix of foundational concepts, real-world applications, and advanced topics relevant to the specified area. The response must be a json object with no preceeding extra strings just the object and response should be directly parsed to JSON object using JSON.parse(response from the API).

	// 	Do NOT repeat questions between different calls to this prompt. Prioritize generating new and unseen questions each time. Ensure each question has exactly four options and one correct answer. The questions should be technically accurate and relevant to the skills expected of a developer with 1-5 years of experience in ${TOPIC}.
	// `;

	return `You are a highly experienced interviewer and subject matter expert with over 10 years of experience. Generate a set of 30 multiple-choice questions (MCQs) with four options each, ensuring only one correct answer per question. The questions should be relevant to ${TOPIC}, suitable for students or professionals preparing for interviews or exams.

Key Requirements:
Experience Level:
The questions should be designed to challenge and assess individuals with 2 to 8 years of expertise or post-graduate-level knowledge in ${TOPIC}.

Balanced Difficulty:
Include a combination of easy, moderate, and advanced-level questions that test both theoretical understanding and practical problem-solving skills.

Technical and Conceptual Breadth:
Cover a range of concepts within ${TOPIC}, from foundational principles to advanced applications and real-world scenarios. Use precise terminology commonly expected in professional or academic assessments. And the options should not contain 'All of the Above ' as an Option

Output in JSON Format:
{
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
// }
The response must be structured in JSON format like this:`
};
