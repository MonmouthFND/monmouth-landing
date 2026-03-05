import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ThemeProvider } from "@/app/providers"

const instrumentSerif = localFont({
	src: '../public/fonts/instrument-serif-latin.woff2',
	variable: '--font-display',
	display: 'swap',
	weight: '400',
});

const jetbrainsMono = localFont({
	src: '../public/fonts/jetbrains-mono-latin.woff2',
	variable: '--font-mono',
	display: 'swap',
	weight: '400',
});

const dmSans = localFont({
	src: '../public/fonts/dm-sans-latin.woff2',
	variable: '--font-body',
	display: 'swap',
	weight: '100 900',
});

export const metadata: Metadata = {
	title: 'Monmouth | The Chain for AI Agents',
	description:
		'Monmouth is a blockchain purpose-built for autonomous AI agents. Twelve native modules, dual-VM execution (EVM + SVM), and built-in policy enforcement — everything agents need to act, coordinate, and prove their work.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' suppressHydrationWarning className={`${instrumentSerif.variable} ${jetbrainsMono.variable} ${dmSans.variable}`}>
			<body className="font-body antialiased">
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
