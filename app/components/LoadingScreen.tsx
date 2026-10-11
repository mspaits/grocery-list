import { Pizza } from 'lucide-react';

export default function LoadingScreen() {
	return (
		<div className="flex min-h-screen flex-row items-center justify-center gap-1">
			<p>Loading . . . </p>
			<Pizza></Pizza>
		</div>
	);
}
