"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#111] text-white">
      {/* Hero background */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=85')",
        }}
      />

      {/* Theme-aware image overlay */}
      <div
        className="
          absolute inset-0 -z-10
          bg-black/25
          [html[data-theme='dark']_&]:bg-black/55
        "
      />

      {/* Theme-aware text readability gradient */}
      <div
        className="
          absolute inset-0 -z-10
          bg-gradient-to-r
          from-black/55
          via-black/30
          to-transparent
          [html[data-theme='dark']_&]:from-black/90
          [html[data-theme='dark']_&]:via-black/65
          [html[data-theme='dark']_&]:to-black/20
        "
      />

      {/* Bottom readability gradient */}
      <div
        className="
          absolute inset-x-0 bottom-0 -z-10 h-48
          bg-gradient-to-t
          from-black/45
          to-transparent
          [html[data-theme='dark']_&]:from-black/75
        "
      />

      <div className="page-container">
        <div className="relative flex min-h-[720px] items-end py-28 sm:min-h-[760px] sm:py-32 lg:min-h-[790px] lg:py-36">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#F4B400] sm:text-sm"
            >
              <span className="h-px w-7 bg-[#F4B400]" />
              Building materials
              <span>•</span>
              Showroom
              <span>•</span>
              Ghana
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12 }}
              className="max-w-5xl text-[3.6rem] font-bold leading-[0.91] tracking-[-0.055em] sm:text-7xl md:text-8xl lg:text-[7.4rem]"
            >
              Build spaces
              <br />
              that{" "}
              <span className="text-[#F4B400]">
                matter.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22 }}
              className="mt-7 max-w-2xl text-base font-medium leading-7 text-white/80 sm:text-lg sm:leading-8"
            >
              Discover tiles, sanitaryware, roofing, doors and architectural
              finishes selected for homes, projects and spaces with purpose.
            </motion.p>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/products"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#F4B400] px-7 text-sm font-bold text-[#171717] shadow-lg shadow-black/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#DFA000]"
              >
                Explore products
                <ArrowRight size={17} />
              </Link>

              <Link
                href="/showroom"
                className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-white/90 px-7 text-sm font-bold text-[#202020] backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/10">
                  <Play size={11} fill="currentColor" />
                </span>
                Visit the showroom
              </Link>
            </motion.div>
          </motion.div>

          {/* Small image indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute bottom-8 right-0 hidden text-right text-xs text-white/60 lg:block"
          >
            <span className="block font-medium text-white/90">MARRKS C</span>
            <span>Curated materials</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
