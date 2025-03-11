import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/app/providers"
import { AOSInit } from '@/components/aos-init';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Monmouth | Neural Infrastructure for Web3',
	description:
		'Monmouth delivers unparalleled EVM compatibility with AI-native blockchain infrastructure, combining cutting-edge performance, genuine decentralization, robust security, and exceptional throughput.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<AOSInit />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
