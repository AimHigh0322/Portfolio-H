"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-px h-32 bg-foreground/10" />
      <div className="absolute top-0 right-0 w-px h-32 bg-foreground/10" />
      <div className="absolute bottom-0 left-1/4 w-24 h-px bg-foreground/10" />

      <div className="max-w-7xl w-full relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          {/* Left content */}
          <div className="space-y-12 relative">
            {/* Decorative line accent */}
            <div
              className={`absolute -left-6 top-0 w-px h-full bg-foreground/5 ${
                isVisible ? "animate-slide-in-left" : "opacity-0"
              }`}
            />

            <div
              className={`flex items-center gap-6 ${
                isVisible ? "animate-slide-up" : "opacity-0"
              }`}
            >
              <div className="relative group cursor-pointer">
                <div className="w-24 h-24 lg:w-32 lg:h-32 relative overflow-hidden">
                  <Image
                    src="/avatar.png"
                    alt="Abdul Hakim"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    priority
                  />
                  {/* Border frame for avatar */}
                  <div className="absolute inset-0 border-2 border-foreground group-hover:border-foreground/60 transition-colors duration-300" />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-all duration-300" />
                </div>
                {/* Corner accent for avatar */}
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-foreground/40 group-hover:border-foreground/60 transition-colors duration-300" />
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-px bg-foreground" />
                <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
                  Portfolio 2026
                </span>
              </div>
            </div>

            <div
              className={`space-y-6 ${
                isVisible ? "animate-slide-up animation-delay-200" : "opacity-0"
              }`}
            >
              {/* Name */}
              <h1 className="text-4xl lg:text-5xl font-black tracking-tighter text-balance leading-none">
                Abdul Hakim
              </h1>
            </div>

            {/* Divider with animation */}
            <div className="relative">
              <div
                className={`h-px w-full bg-border ${
                  isVisible
                    ? "animate-slide-in-left animation-delay-400"
                    : "opacity-0"
                }`}
              />
              <div
                className={`absolute top-0 left-0 h-px w-32 bg-foreground ${
                  isVisible
                    ? "animate-slide-in-left animation-delay-600"
                    : "opacity-0"
                }`}
              />
            </div>

            {/* Role description */}
            <div
              className={`space-y-4 ${
                isVisible ? "animate-slide-up animation-delay-600" : "opacity-0"
              }`}
            >
              <p className="text-xl lg:text-2xl font-light tracking-wide leading-relaxed">
                AI・フルスタックエンジニア
              </p>
              <p className="text-base text-muted-foreground font-light leading-relaxed max-w-md">
                AI・Webシステム・SaaS開発を軸に、8年以上にわたってプロダクトを形にしてきました。LLMやRAGをはじめとするAI技術を、実用的でスケーラブルなサービスへ自然に組み込むことを得意としています。
              </p>
            </div>

          </div>

          {/* Right image with enhanced styling */}
          <div
            className={`relative group cursor-pointer ${
              isVisible
                ? "animate-slide-in-right animation-delay-200"
                : "opacity-0"
            }`}
          >
            <div className="relative">
              {/* Main image container */}
              <div className="relative aspect-[4/5] w-full max-w-lg mx-auto overflow-hidden">
                <Image
                  src="/hero-workspace.jpg"
                  alt="Workspace"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  priority
                />
                {/* Border frame */}
                <div className="absolute inset-0 border-2 border-foreground/20 group-hover:border-foreground/40 transition-colors duration-300" />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-all duration-300" />
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-foreground group-hover:border-foreground/60 transition-colors duration-300" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-foreground group-hover:border-foreground/60 transition-colors duration-300" />
              </div>

              {/* Decorative elements around image */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border border-foreground/10 -z-10" />
              <div className="absolute -top-6 -left-6 w-16 h-16 border border-foreground/10 -z-10" />
            </div>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-px bg-border ${
            isVisible
              ? "animate-slide-in-left animation-delay-600"
              : "opacity-0"
          }`}
        />
      </div>
    </section>
  );
}
