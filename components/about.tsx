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
      className="min-h-screen flex items-center justify-center px-6 lg:px-12  pb-12"
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
                alt="Profile"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 border border-foreground/20 group-hover:border-foreground/40 transition-colors duration-300" />
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-foreground group-hover:border-foreground/60 transition-colors duration-300" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-foreground group-hover:border-foreground/60 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-foreground group-hover:border-foreground/60 transition-colors duration-300" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-foreground group-hover:border-foreground/60 transition-colors duration-300" />
              {/* Hover overlay */}
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
                私について
              </h2>
              <div className="h-px w-16 bg-foreground" />
            </div>

            <p
              className={`text-base lg:text-lg leading-relaxed text-muted-foreground transition-all duration-1000 ${
                isVisible ? "animate-slide-up" : "opacity-0 translate-y-8"
              }`}
            >
              AI・Web・モバイルアプリエンジニアとして、Next.js・Node.js・Laravel を中心としたフルスタック開発に7年以上従事。AI顔認証システムや自動採点・修了証発行など、AI機能を活用した実用的なWebシステムの開発実績があります。
            </p>
            <p
              className={`text-base lg:text-lg leading-relaxed text-muted-foreground transition-all duration-1000 ${
                isVisible
                  ? "animate-slide-up animation-delay-200"
                  : "opacity-0 translate-y-8"
              }`}
            >
              医療機関の予約・管理システム、ECサイト、オンライン講義プラットフォーム、モバイルヘルスアプリなど、様々な業界のWebシステム・アプリ開発を手がけています。バックエンド（Node.js、Laravel、PHP）からフロントエンド（React、Next.js）、クラウドインフラ（Google Cloud、AWS、Firebase）まで一貫して対応可能です。
            </p>
            <p
              className={`text-base lg:text-lg leading-relaxed text-muted-foreground transition-all duration-1000 ${
                isVisible
                  ? "animate-slide-up animation-delay-400"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Stripe決済統合、SendGridメール配信、FCMプッシュ通知、Salesforce CRM連携など、実務で必要とされる機能を幅広く実装してきました。AI技術を活用した業務自動化や、Flutter・React Nativeによるクロスプラットフォームモバイルアプリ開発を強みとしています。
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
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
