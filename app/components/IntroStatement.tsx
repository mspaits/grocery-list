import Image from 'next/image';
import { Short_Stack } from 'next/font/google';

const shortStack = Short_Stack({
	weight: '400',
	subsets: ['latin'],
});

export default function IntroStatement({ sponsor }: { sponsor: string }) {
	return (
		<div className="flex flex-row justify-center gap-3 bg-zinc-100 p-1 text-gray-500">
			<p className={`${shortStack.className} flex flex-col justify-center text-center`}>
				Brought to you by {sponsor} and
				<br />
			</p>
			<Image
				src="/codeClubLogo.png"
				alt="Code Club RDU logo"
				width={498}
				height={452}
				sizes="100px"
				className="shrink-0 self-center"
				style={{ width: 100, height: 'auto' }}
			/>
		</div>
	);
}
