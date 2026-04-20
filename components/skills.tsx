"use client";

import { useState, useEffect, useRef } from "react";

export function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      subtitle: "プログラミング言語",
      skills: ["JavaScript", "TypeScript", "Python", "PHP", "Java", "C#"],
      color: "orange",
    },
    {
      title: "Frontend Development",
      subtitle: "フロントエンド開発",
      skills: ["React", "Next.js", "Nuxt.js"],
      color: "red",
    },
    {
      title: "Backend Development",
      subtitle: "バックエンド開発",
      skills: ["Node.js", "Laravel", "Django", "Ruby on Rails", "ASP.NET"],
      color: "blue",
    },
    {
      title: "Framework & CMS",
      subtitle: "フレームワーク・CMS",
      skills: ["WordPress", "Shopify"],
      color: "green",
    },
    {
      title: "Mobile App",
      subtitle: "モバイルアプリ",
      skills: ["React Native", "Flutter"],
      color: "teal",
    },
    {
      title: "Infrastructure & Tools",
      subtitle: "インフラ・ツール",
      skills: ["AWS", "Docker", "Firebase", "WebSocket", "Stripe"],
      color: "purple",
    },
  ];

  const getColorClass = (color: string) => {
    switch (color) {
      case "red":
        return "hover:bg-red-50 dark:hover:bg-red-950/20";
      case "blue":
        return "hover:bg-blue-50 dark:hover:bg-blue-950/20";
      case "green":
        return "hover:bg-green-50 dark:hover:bg-green-950/20";
      case "purple":
        return "hover:bg-purple-50 dark:hover:bg-purple-950/20";
      case "orange":
        return "hover:bg-orange-50 dark:hover:bg-orange-950/20";
      case "teal":
        return "hover:bg-teal-50 dark:hover:bg-teal-950/20";
      default:
        return "hover:bg-secondary";
    }
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="min-h-screen flex items-center justify-center px-6 lg:px-12 py-32 bg-background relative overflow-hidden"
    >
      {/* Sophisticated Japanese-inspired background patterns */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Traditional Japanese grid pattern with varying sizes */}
        <div className="absolute top-0 left-0 w-64 h-64 border-t-2 border-l-2 border-border opacity-15" />
        <div className="absolute top-0 right-0 w-64 h-64 border-t-2 border-r-2 border-border opacity-15" />
        <div className="absolute bottom-0 left-0 w-64 h-64 border-b-2 border-l-2 border-border opacity-15" />
        <div className="absolute bottom-0 right-0 w-64 h-64 border-b-2 border-r-2 border-border opacity-15" />

        {/* Secondary geometric patterns */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-border opacity-8" />
        <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-border opacity-8" />
        <div className="absolute bottom-1/4 left-1/4 w-32 h-32 border border-border opacity-8" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 border border-border opacity-8" />

        {/* Central mandala-inspired elements */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-border opacity-12" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-border opacity-18" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 border border-border opacity-25" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-foreground opacity-8" />

        {/* Subtle diagonal lines for depth */}
        <div className="absolute top-1/3 left-1/3 w-px h-32 bg-border opacity-5 transform rotate-45" />
        <div className="absolute bottom-1/3 right-1/3 w-px h-32 bg-border opacity-5 transform rotate-45" />
      </div>

      <div className="max-w-7xl w-full relative z-10">
        <div className="space-y-12">
          {/* Sophisticated Japanese-style header */}
          <div
            className={`space-y-12 text-center ${
              isVisible ? "animate-slide-up" : "opacity-0"
            }`}
          >
            <div className="space-y-8">
              {/* Main title with enhanced typography */}
              <div className="space-y-6">
                <div className="flex items-center justify-center gap-8">
                  <div className="h-0.5 w-20 bg-foreground" />
                  <h2 className="text-6xl lg:text-8xl font-serif font-light tracking-tight">
                    スキル
                  </h2>
                  <div className="h-0.5 w-20 bg-foreground" />
                </div>

                {/* Japanese subtitle with decorative elements */}
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-4">
                    <div className="h-px w-8 bg-border" />
                    <p className="text-xl text-muted-foreground tracking-widest font-light">
                      技術スタック
                    </p>
                    <div className="h-px w-8 bg-border" />
                  </div>
                  <div className="h-0.5 w-32 bg-border mx-auto" />
                </div>
              </div>

              {/* Decorative line pattern */}
              <div className="flex items-center justify-center gap-2">
                <div className="h-px w-4 bg-border" />
                <div className="h-px w-2 bg-border" />
                <div className="h-px w-1 bg-border" />
                <div className="h-px w-2 bg-border" />
                <div className="h-px w-4 bg-border" />
              </div>
            </div>
          </div>

          {/* Sophisticated Japanese-inspired grid layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className={`relative p-10 lg:p-12 bg-background transition-all duration-700 group ${getColorClass(
                  category.color
                )} ${isVisible ? "animate-scale-in" : "opacity-0"}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="space-y-8 relative z-10">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-display font-bold tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground tracking-widest font-light">
                      {category.subtitle}
                    </p>
                    <div className="h-0.5 w-16 bg-foreground group-hover:w-full transition-all duration-700" />
                  </div>

                  <ul className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <li
                        key={skill}
                        className="text-sm text-muted-foreground flex items-center gap-4 hover:text-foreground hover:translate-x-3 transition-all duration-400 cursor-default group/item"
                        style={{ transitionDelay: `${skillIndex * 0.08}s` }}
                      >
                        <span className="w-2 h-2 bg-foreground shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                        <span className="font-sans group-hover/item:font-medium transition-all duration-300">
                          {skill}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Sophisticated Japanese-style statistics section */}
          <div
            className={`space-y-12 border-t-2 border-border pt-12 ${
              isVisible ? "animate-slide-up animation-delay-800" : "opacity-0"
            }`}
          >
            <div className="grid md:grid-cols-2 gap-12 text-center">
              <div className="space-y-6 relative group">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-border" />
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-foreground" />
                <div className="text-6xl font-display font-bold group-hover:scale-110 transition-transform duration-500">
                  20+
                </div>
                <div className="text-sm text-muted-foreground tracking-widest font-light">
                  フレームワーク
                </div>
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-border" />
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-foreground" />
              </div>
              <div className="space-y-6 relative group">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-border" />
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-foreground" />
                <div className="text-6xl font-display font-bold group-hover:scale-110 transition-transform duration-500">
                  10+
                </div>
                <div className="text-sm text-muted-foreground tracking-widest font-light">
                  プログラミング言語
                </div>
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-border" />
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-foreground" />
              </div>
           
            </div>

            <div className="space-y-8">
              {/* Enhanced decorative line pattern */}
              <div className="flex items-center justify-center gap-3">
                <div className="h-px w-8 bg-border" />
                <div className="h-px w-4 bg-border" />
                <div className="h-px w-2 bg-border" />
                <div className="h-px w-1 bg-foreground" />
                <div className="h-px w-2 bg-border" />
                <div className="h-px w-4 bg-border" />
                <div className="h-px w-8 bg-border" />
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-5xl mx-auto text-center font-light">
                フロントエンドからバックエンド、インフラまで幅広い技術スタックを活用し、
                クライアントのビジネス課題を解決するソリューションを提供します。
              </p>

              {/* Bottom decorative line pattern */}
              <div className="flex items-center justify-center gap-3">
                <div className="h-px w-8 bg-border" />
                <div className="h-px w-4 bg-border" />
                <div className="h-px w-2 bg-border" />
                <div className="h-px w-1 bg-foreground" />
                <div className="h-px w-2 bg-border" />
                <div className="h-px w-4 bg-border" />
                <div className="h-px w-8 bg-border" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
