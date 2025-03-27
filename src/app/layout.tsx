import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Consolidated Zone - Task Management",
  description: "Manage your tasks with a futuristic interface",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-gradient-to-br from-gray-950 via-violet-950 to-black min-h-screen text-gray-100`}
      >
        <div className="relative z-0 min-h-screen">
          {/* Neon glow effect */}
          <div className="absolute -z-10 top-0 left-0 w-full h-full overflow-hidden opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-pink-600 blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-violet-700 blur-3xl"></div>
            <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-blue-700 blur-3xl"></div>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
