import { Pizza, Apple, Beef, Can, Milk, Broccoli, Hamburger } from 'lucide-react';
import type { CSSProperties } from 'react';
import styles from './LoadingScreen.module.css';

const icons = [Pizza, Apple, Beef, Can, Milk, Broccoli, Hamburger];

export default function LoadingScreen() {
	return (
		<div role="status" className="flex min-h-screen flex-row items-center justify-center gap-1">
			<p>Loading . . . </p>
			{/* CSS starts the sequence even before the page's JavaScript loads. */}
			<span
				aria-hidden="true"
				className={styles.icons}
				style={
					{
						'--icon-count': icons.length,
						'--cycle-duration': `${icons.length}s`,
					} as CSSProperties
				}
			>
				{icons.map((Icon, index) => (
					<Icon key={index} />
				))}
			</span>
		</div>
	);
}
