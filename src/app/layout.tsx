import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Time } from "./time";
import Navbar from "./Navbar";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oltion Nezha",
  description: "Portfolio",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robotoMono.variable}>
        <div className="relative flex items-center justify-center px-5 pt-5 md:px-10 md:pt-10">
          <Time />
          {/* <div className="absolute bottom-16 left-0 -rotate-90 px-3 bg-[#0a0a0a]">
            <p>Toggle</p>
          </div> */}
          <div className="w-full h-full min-h-[calc(100vh-40px)] md:min-h-[calc(100vh-80px)] overflow-auto p-4 md:p-8 border border-zinc-800">
            <div className="pt-5 md:pt-0">
              <h1 className="text-4xl md:text-5xl font-light">Oltion Nezha</h1>
              <p className="md:text-lg text-zinc-600">Full-Stack Developer</p>
              <Navbar />
            </div>
            <div className="absolute bottom-4 right-10 md:bottom-8 md:right-20">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
