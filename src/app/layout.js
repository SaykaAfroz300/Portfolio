import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  title: 'Sumaia Afroz Sayka — Full-Stack Developer & AI/NLP Researcher',
  description:
    'Portfolio of Sumaia Afroz Sayka — Full-Stack Developer, Published IEEE NLP Researcher (MELT), IEEE ULAB Vice Chairperson, and Technical Content Creator.',
  keywords: [
    'Sumaia Afroz Sayka',
    'Full-Stack Developer',
    'AI Researcher',
    'NLP Researcher',
    'ULAB',
    'Dhaka Bangladesh',
    'React Developer',
    'Next.js Portfolio',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans min-h-screen selection:bg-stone-900 selection:text-stone-50 dark:selection:bg-stone-100 dark:selection:text-stone-900">
        {children}
      </body>
    </html>
  );
}

