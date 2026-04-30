"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen flex items-center justify-center px-6 lg:px-12 pb-12"
    >
      <div className="max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div
            className={`relative order-2 lg:order-1 transition-all duration-1000 group cursor-pointer ${
              isVisible ? "animate-scale-in" : "opacity-0"
            }`}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src="/about-profile.png"
                alt="プロフィール写真"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 border border-foreground/20 group-hover:border-foreground/40 transition-colors duration-300" />
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-foreground group-hover:border-foreground/60 transition-colors duration-300" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-foreground group-hover:border-foreground/60 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-foreground group-hover:border-foreground/60 transition-colors duration-300" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-foreground group-hover:border-foreground/60 transition-colors duration-300" />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-all duration-300" />
            </div>
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div
              className={`space-y-6 transition-all duration-1000 ${
                isVisible ? "animate-slide-in-right" : "opacity-0 translate-x-8"
              }`}
            >
              <h2 className="text-4xl lg:text-5xl font-serif font-semibold tracking-tight">
                自己紹介
              </h2>
              <div className="h-px w-16 bg-foreground" />
            </div>

            <p
              className={`text-base lg:text-lg leading-relaxed text-muted-foreground transition-all duration-1000 ${
                isVisible ? "animate-slide-up" : "opacity-0 translate-y-8"
              }`}
            >
              AIとWebシステムの開発を8年以上やってきました。普段はPythonとTypeScriptをメインに、LLMを使った機能の組み込みやSaaS・Webアプリの開発に取り組んでいます。
            </p>
            <p
              className={`text-base lg:text-lg leading-relaxed text-muted-foreground transition-all duration-1000 ${
                isVisible
                  ? "animate-slide-up animation-delay-200"
                  : "opacity-0 translate-y-8"
              }`}
            >
              よく使うのはOpenAIやAnthropicのAPI、LangChain、ベクトルDB（PineconeやpgvectorなどでのRAG）あたりです。WebはNext.js・FastAPI・Node.jsで、AI機能を組み込んだサービスを一通り自分で作れるようにしています。
            </p>
            <p
              className={`text-base lg:text-lg leading-relaxed text-muted-foreground transition-all duration-1000 ${
                isVisible
                  ? "animate-slide-up animation-delay-400"
                  : "opacity-0 translate-y-8"
              }`}
            >
              これまでにAI顔認証や自動採点、社内向けのドキュメント検索チャットボット、業務自動化のスクリプトなどを担当してきました。最新の手法を追いかけつつ、実際のプロダクトに落とし込めるかどうかを大切にしています。
            </p>
            <div
              className={`pt-4 transition-all duration-1000 ${
                isVisible
                  ? "animate-slide-up animation-delay-600"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <a
                href="#contact"
                className="inline-block text-sm border border-foreground px-8 py-3 hover:bg-foreground hover:text-background transition-all duration-300 hover:translate-x-1"
              >
                お問い合わせ
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
