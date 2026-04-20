"use client";

import type React from "react";

import { useState, useEffect } from "react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-xl shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <a
            href="#"
            onClick={(e) => handleNavClick(e, "#")}
            className="relative text-2xl font-display font-black tracking-tight hover:scale-105 transition-transform duration-300"
          >
            <span className="relative z-10 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              山同 誠
            </span>
            <div className="absolute -inset-2 bg-gradient-to-r from-foreground/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </a>

          <div className="hidden md:flex items-center space-x-1">
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "#about")}
              className="relative px-6 py-3 text-sm font-semibold tracking-wide text-foreground/80 hover:text-foreground transition-all duration-300 group"
            >
              <span className="relative z-10">私について</span>
              <div className="absolute inset-0 bg-gradient-to-r from-foreground/5 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-foreground to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </a>
            <a
              href="#experience"
              onClick={(e) => handleNavClick(e, "#experience")}
              className="relative px-6 py-3 text-sm font-semibold tracking-wide text-foreground/80 hover:text-foreground transition-all duration-300 group"
            >
              <span className="relative z-10">専門分野</span>
              <div className="absolute inset-0 bg-gradient-to-r from-foreground/5 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-foreground to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </a>
            <a
              href="#skills"
              onClick={(e) => handleNavClick(e, "#skills")}
              className="relative px-6 py-3 text-sm font-semibold tracking-wide text-foreground/80 hover:text-foreground transition-all duration-300 group"
            >
              <span className="relative z-10">スキル</span>
              <div className="absolute inset-0 bg-gradient-to-r from-foreground/5 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-foreground to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </a>
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, "#projects")}
              className="relative px-6 py-3 text-sm font-semibold tracking-wide text-foreground/80 hover:text-foreground transition-all duration-300 group"
            >
              <span className="relative z-10">プロジェクト</span>
              <div className="absolute inset-0 bg-gradient-to-r from-foreground/5 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-foreground to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="relative px-6 py-3 text-sm font-semibold tracking-wide text-foreground/80 hover:text-foreground transition-all duration-300 group"
            >
              <span className="relative z-10">お問い合わせ</span>
              <div className="absolute inset-0 bg-gradient-to-r from-foreground/5 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-foreground to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative p-2 hover:bg-foreground/5 transition-colors duration-300 group"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 relative">
              <span
                className={`absolute top-1 left-0 w-full h-0.5 bg-gradient-to-r from-foreground to-foreground/60 transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`absolute top-3 left-0 w-full h-0.5 bg-gradient-to-r from-foreground to-foreground/60 transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute top-5 left-0 w-full h-0.5 bg-gradient-to-r from-foreground to-foreground/60 transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-foreground/10 animate-fade-in">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex flex-col space-y-2">
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, "#about")}
                className="relative px-4 py-3 text-sm font-semibold tracking-wide text-foreground/80 hover:text-foreground transition-all duration-300 group"
              >
                <span className="relative z-10">私について</span>
                <div className="absolute inset-0 bg-gradient-to-r from-foreground/5 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-foreground to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </a>
              <a
                href="#experience"
                onClick={(e) => handleNavClick(e, "#experience")}
                className="relative px-4 py-3 text-sm font-semibold tracking-wide text-foreground/80 hover:text-foreground transition-all duration-300 group"
              >
                <span className="relative z-10">専門分野</span>
                <div className="absolute inset-0 bg-gradient-to-r from-foreground/5 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-foreground to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </a>
              <a
                href="#skills"
                onClick={(e) => handleNavClick(e, "#skills")}
                className="relative px-4 py-3 text-sm font-semibold tracking-wide text-foreground/80 hover:text-foreground transition-all duration-300 group"
              >
                <span className="relative z-10">スキル</span>
                <div className="absolute inset-0 bg-gradient-to-r from-foreground/5 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-foreground to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </a>
              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, "#projects")}
                className="relative px-4 py-3 text-sm font-semibold tracking-wide text-foreground/80 hover:text-foreground transition-all duration-300 group"
              >
                <span className="relative z-10">プロジェクト</span>
                <div className="absolute inset-0 bg-gradient-to-r from-foreground/5 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-foreground to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="relative px-4 py-3 text-sm font-semibold tracking-wide text-foreground/80 hover:text-foreground transition-all duration-300 group"
              >
                <span className="relative z-10">お問い合わせ</span>
                <div className="absolute inset-0 bg-gradient-to-r from-foreground/5 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-foreground to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
