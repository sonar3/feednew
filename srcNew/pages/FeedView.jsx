// import React from 'react'
// import { useNavigate } from 'react-router-dom';

// export default function FeedView() {
// 	const navigate = useNavigate();

// 	const [text, setText] = React.useState('');
// 	const handleChange = (e) => {
//         setText(e.target.value);
//     }
// 	const handleSubmit = (e) => {
//         e.preventDefault();
//         setText('');
// 		navigate(`/view/${text}`)
//     }

//   return (
// 	<>
// 		<div>FeedView</div>
// 		<form onSubmit={handleSubmit}>
// 			<input type="text" placeholder='feedid' value={text} onChange={handleChange} />
// 		</form>
// 		{text}
// 	</>
//   )
// }
