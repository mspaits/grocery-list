'use client';

import Form from 'next/form';
import { useRouter } from 'next/navigation';

export default function LogIn() {
	const router = useRouter();

	async function getUserName(formData: FormData) {
		const userName = formData.get('userName');
		console.log(userName);

		if (typeof userName !== 'string' || !userName.trim()) {
			return;
		}

		document.cookie = `userName=${userName.trim()}; path=/; SameSite=Lax; Secure`;

		router.push('/main-list');
	}

	return (
		<div>
			<h1 className="bg-zinc-200 py-6 text-center text-4xl font-bold tracking-tight text-gray-700">
				Good Morning!
			</h1>
			<p className="mx-4 my-8 text-center text-xl">Please log in with your username</p>
			<div className="mx-auto flex w-full max-w-3xl min-w-0 flex-col px-2">
				<div className="flex flex-wrap justify-center rounded-3xl">
					<Form action={getUserName} className="flex w-full max-w-xs flex-col gap-3 p-4">
						<label htmlFor="userName">Username</label>
						<input
							type="text"
							id="userName"
							name="userName"
							placeholder="username"
							className="rounded-lg bg-white p-2 shadow-lg"
						/>
						<button
							type="submit"
							className="w-full rounded-lg bg-amber-600 px-3 py-2 font-medium text-white shadow-lg hover:bg-amber-700 hover:shadow-md hover:shadow-black/25"
						>
							Submit
						</button>
					</Form>
				</div>
			</div>
		</div>
	);
}
