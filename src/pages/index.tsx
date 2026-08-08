import Hero from "../component/hero";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const accentColor = "bg-[#49BBBD]"

export default function Home() {
  return (
       <div
          className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen items-center justify-center bg-zinc-50 font-sans`}
        >
          <main className="flex min-h-screen w-full flex-col items-center justify-between  sm:items-start">
            <Hero />
          </main>
        </div>
  )
}
