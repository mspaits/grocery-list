'use client';

import Form from 'next/form';
import { useRouter } from 'next/navigation';
import { InputField } from './InputField';
import IntroStatement from '@/app/components/IntroStatement';

export default function LogIn() {
	const router = useRouter();

	async function getUserName(formData: FormData) {
		const userName = formData.get('userName');

		if (typeof userName !== 'string' || !userName.trim()) {
			return;
		}

		document.cookie = `userName=${userName.trim()}; path=/; SameSite=Lax; Secure`;

		router.push('/main-list');
	}

	return (
		<div>
			<h1 className="bg-zinc-200 py-6 text-center text-4xl font-bold tracking-tight text-gray-700">
				What Did I Eat!
			</h1>
			<h3 className="bg-zinc-200 py-6 text-center text-2xl font-bold tracking-tight text-gray-700">
				The grocery list app that remembers what you bought.
			</h3>
			<p className="mx-4 mt-8 mb-4 text-center text-lg">Please log in with your username</p>
			<div className="mx-auto flex w-full max-w-3xl min-w-0 flex-col px-2">
				<div className="flex flex-wrap justify-center rounded-3xl">
					<Form action={getUserName} className="flex w-full max-w-xs flex-col gap-2 p-4">
						<InputField
							label={'Username'}
							id={'userName'}
							name={'userName'}
							placeholder={'username'}
							autoCapitalize="none"
							autoCorrect="off"
							autoComplete="off"
						></InputField>
						<button
							type="submit"
							className="w-full rounded-lg bg-amber-600 px-3 py-2 text-sm font-medium text-white shadow-lg transition-all duration-50 ease-in-out hover:bg-amber-700 hover:shadow-md hover:shadow-black/25 active:scale-95 active:bg-amber-700"
						>
							Submit
						</button>
					</Form>
				</div>
			</div>
			<div className="pt-10">
				<IntroStatement sponsor={'mspaitsdev@gmail.com'}></IntroStatement>
			</div>
		</div>
	);
}
