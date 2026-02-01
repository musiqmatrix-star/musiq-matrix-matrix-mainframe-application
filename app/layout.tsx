import { Inter, Syncopate, Rajdhani } from "next/font/google";
import "./globals.css"; 
import { ThemeProvider } from "@/contexts/ThemeContext";

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

export const metadata = {
  title: "MUSIQ MATRIX - The Algorithm is a Script",
  description: "Experience Frequency in Motion. Join the MUSIQ MATRIX Revolution.",
};

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
