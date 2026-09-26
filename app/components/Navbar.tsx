'use client';

import Link from 'next/link';
import { useState } from 'react';
import { LucideIcon, Menu } from 'lucide-react';

export default function Navbar({
	pageTitle,
	bgColor,
	logOut,
	icon: Icon,
}: {
	pageTitle: string;
	bgColor: string;
	logOut: () => void;
	icon: LucideIcon;
}) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const buttonFormat =
		'rounded-lg font-bold bg-amber-600 text-white px-3 py-2 transition transition-all duration-50 ease-in-out hover:bg-amber-700 hover:shadow-md hover:shadow-black/25 active:bg-amber-700 active:scale-95 cursor-pointer';

	return (
		<div className={`relative z-50 ${bgColor}`}>
			<header
				className={`mx-auto flex w-full max-w-188 items-center justify-between rounded ${bgColor} px-4 pt-6 pb-2 text-black`}
			>
				<div className="flex items-center gap-3">
					<Icon size={28} className="text-lime-500" />
					<p className="text-3xl font-bold tracking-tight text-gray-700">{pageTitle}</p>
				</div>

				<ul className="hidden items-center gap-8 md:flex">
					<Link href="/main-list" className={buttonFormat}>
						Shopping List
					</Link>
					<Link href="/history" className={buttonFormat}>
						History
					</Link>
					<button onClick={logOut} className={buttonFormat}>
						Log Out
					</button>
				</ul>

				<Menu
					size={34}
					className="me-6 hover:shadow-md hover:shadow-black/25 md:hidden"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				/>

				<div
					inert={!isMenuOpen}
					className={`absolute top-20 left-0 flex w-full transform flex-col items-center bg-zinc-200 text-lg font-semibold transition-transform md:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
					style={{ transition: 'transform 0.2s ease, opacity 0.2s ease' }}
				>
					<Link
						href="/main-list"
						className="w-full list-none p-4 text-center transition hover:bg-amber-600"
					>
						Shopping List
					</Link>

					<Link
						href="/history"
						className="w-full list-none p-4 text-center transition hover:bg-amber-600"
					>
						History
					</Link>

					<button
						onClick={logOut}
						type="submit"
						className="w-full list-none p-4 text-center transition hover:bg-amber-600"
					>
						Log Out
					</button>
				</div>
			</header>
		</div>
	);
}
