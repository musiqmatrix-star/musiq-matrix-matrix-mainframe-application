import { Inter, Syncopate, Rajdhani } from "next/font/google";
import "../client/src/index.css"; 
import { ThemeProvider } from "../client/src/contexts/ThemeContext";

// Technical body font
const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Cinematic Matrix-style heading font
const display = Syncopate({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-display",
});

// Terminal/Data font
const mono = Rajdhani({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      className={`${sans.variable} ${display.variable} ${mono.variable}`} 
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground antialiased font-sans">
        <ThemeProvider defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}