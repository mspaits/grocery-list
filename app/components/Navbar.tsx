'use client';

import Link from 'next/link';
import { useState } from 'react';
import { type LucideIcon, Menu, LogOut, ScrollText, Groceries } from 'lucide-react';

export default function Navbar({
	pageTitle,
	bgColor,
	icon: Icon,
}: {
	pageTitle: string;
	bgColor: string;
	icon: LucideIcon;
}) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [listButtonActive, setListButtonActive] = useState(false);
	const [historyButtonActive, setHistoryButtonActive] = useState(false);
	const [logoutButtonActive, setLogoutButtonActive] = useState(false);

	const buttonFormat =
		'flex flex-row items-center gap-1 rounded-lg font-bold bg-amber-600 text-white px-3 py-2 transition transition-all duration-150 ease-in-out hover:bg-amber-700 hover:shadow-md hover:shadow-black/25 active:bg-amber-700 active:scale-95 cursor-pointer';

	function logOut() {
		document.cookie = 'userName=; Path=/; Max-Age=0;';
		window.location.replace('/');
	}

	return (
		<div className={`relative z-50 ${bgColor}`}>
			<header
				className={`mx-auto flex w-full max-w-188 items-center justify-between rounded ${bgColor} px-4 pt-6 pb-2 text-black`}
			>
				<div className="flex items-center gap-3">
					<Icon size={32} className="text-lime-500" />
					<p className="text-3xl font-bold tracking-tight text-gray-700">{pageTitle}</p>
				</div>

				<ul className="hidden items-center gap-6 md:flex">
					<Link href="/main-list" className={buttonFormat}>
						<ScrollText size={18} />
						Shopping List
					</Link>
					<Link href="/history" className={buttonFormat}>
						<Groceries size={18} />
						History
					</Link>
					<button onClick={logOut} className={buttonFormat}>
						<LogOut size={18} />
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
						onClick={() => setListButtonActive(true)}
						className={`flex w-full list-none flex-row items-center justify-center gap-1 p-4 text-center transition hover:bg-amber-600 ${listButtonActive ? 'bg-amber-600' : ''}`}
					>
						<ScrollText size={18} />
						Shopping List
					</Link>

					<Link
						href="/history"
						onClick={() => setHistoryButtonActive(true)}
						className={`flex w-full list-none flex-row items-center justify-center gap-1 p-4 text-center transition hover:bg-amber-600 ${historyButtonActive ? 'bg-amber-600' : ''}`}
					>
						<Groceries size={18} />
						History
					</Link>

					<button
						type="submit"
						onClick={() => {
							setLogoutButtonActive(true);
							logOut();
						}}
						className={`flex w-full list-none flex-row items-center justify-center gap-1 p-4 text-center transition hover:bg-amber-600 ${logoutButtonActive ? 'bg-amber-600' : ''}`}
					>
						<LogOut size={18} />
						Log Out
					</button>
				</div>
			</header>
		</div>
	);
}
