'use client';

import { useState, useEffect } from 'react';
import { Pizza, Apple, Beef, Can, Milk, Broccoli, Hamburger } from 'lucide-react';

const icons = [Pizza, Apple, Beef, Can, Milk, Broccoli, Hamburger];

export default function LoadingScreen() {
	const [index, setIndex] = useState(0);

	//console.log(icons[0]);
	//const thingToRender = icons[1];

	useEffect(() => {
		async function needlessFunction() {
			for (let i = 0; i < icons.length - 1; i++) {
				await new Promise((resolve) => setTimeout(resolve, 1000));
				//setTimeout(() => setIndex(() => (index + 1)), 2000);
				console.log(i);
				setIndex((prev) => prev + 1);
			}
		}

		needlessFunction();
	}, []);

	const Icon = icons[index];

	return (
		<div className="flex min-h-screen flex-row items-center justify-center gap-1">
			<p>Loading . . .</p>
			<p>
				<Icon />
			</p>
		</div>
	);
}
