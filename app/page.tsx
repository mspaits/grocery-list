import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import LoginForm from '@/app/components/LoginForm';

export default async function logIn() {
	const cookieStore = await cookies();

	if (cookieStore.get('userName')?.value) {
		redirect('/main-list');
	}

	return <LoginForm />;
}
