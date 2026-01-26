import './globals.css';
import type { Metadata } from 'next';
import { Instrument_Serif, JetBrains_Mono, DM_Sans } from 'next/font/google';
import { ThemeProvider } from "@/app/providers"

const instrumentSerif = Instrument_Serif({
	subsets: ['latin'],
	weight: '400',
	variable: '--font-display',
	display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
	subsets: ['latin'],
	variable: '--font-mono',
	display: 'swap',
});

const dmSans = DM_Sans({
	subsets: ['latin'],
	variable: '--font-body',
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Monmouth | Agent-Aware L2 for AI',
	description:
		'Monmouth is an agent-aware Layer 2 blockchain built on Reth, designed for AI agents to transact safely and efficiently with guardrails, spending limits, and cross-chain capabilities.',
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
