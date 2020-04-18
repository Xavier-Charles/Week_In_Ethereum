import React, { useState } from 'react';
import axios from 'axios';

export default function Home() {
	const [ title, updateTitle ] = useState('Redesigning the Week in Ethereum Frontend');

	return (
		<div>
			<h1>{title}</h1>
			<br />
			<button onClick={() => updateTitle('Work in Progress...')}>Change</button>
		</div>
	);
}
