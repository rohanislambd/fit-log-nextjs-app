
import Link from "next/link";
import {  Home, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] flex items-center justify-center px-6">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.15),transparent_45%)]" />

      {/* Decorative Blurs */}
      <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-purple-600/20 blur-[120px]" />

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-3xl text-center">

        {/* Small Badge */}
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur-md">
          <Sparkles size={15} className="text-blue-400" />
          <span>Oops! Something went wrong</span>
        </div>

        {/* 404 */}
        <div className="relative">
          <h1 className="select-none text-[130px] font-black leading-none tracking-[-0.08em] text-transparent sm:text-[190px] bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text">
            404
          </h1>

          {/* Glow */}
          <div className="absolute inset-0 -z-10 text-[130px] font-black leading-none tracking-[-0.08em] text-blue-500/20 blur-3xl sm:text-[190px]">
            404
          </div>
        </div>

        {/* Heading */}
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Page not found
        </h2>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
          The page youre looking for doesn't exist or may have been moved.
          Let's get you back to somewhere useful.
        </p>

        {/* Buttons */}
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">

          <Link
            href="/"
            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100 sm:w-auto"
          >
            <Home size={18} />
            Back to Home
          </Link>

      

        </div>

        {/* Bottom Text */}
        <p className="mt-12 text-sm text-slate-600">
          Error 404 · The requested page could not be found
        </p>

      </div>
    </main>
  );
}