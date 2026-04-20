"use client";

import { useState, useEffect, useRef } from "react";

export function Experience() {
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

  const expertiseAreas = [
    {
      title: "AI・機械学習統合",
      description:
        "AI顔認証システムの開発や、試験の自動採点・修了証発行など、AIを活用した業務自動化を実現。チャットボット、画像認識機能の実装により、ユーザー体験の向上とビジネスプロセスの効率化を支援しています。",
      number: "01",
    },
    {
      title: "Webシステム・ECサイト開発",
      description:
        "Next.js、Node.js、Laravel/PHPを使用したフルスタックWebシステムの開発。ECサイト、予約管理システム、SaaSプラットフォームの構築。Stripe決済統合、SendGridメール配信、WebSocket実装により、スケーラブルなシステムアーキテクチャを構築しています。",
      number: "02",
    },
    {
      title: "モバイルアプリ開発",
      description:
        "Flutter・React Nativeを使用したクロスプラットフォームモバイルアプリの開発。Firebase連携、FCMプッシュ通知、Health API統合、Salesforce CRM連携など、ビジネスニーズに応じた機能を実装し、実用性の高いアプリを提供しています。",
      number: "03",
    },
    {
      title: "ホームページ・コーポレートサイト",
      description:
        "WordPress、Laravel、Next.jsを活用した企業サイトの開発。要件定義からデザイン、実装、運用保守まで一貫して対応。レスポンシブデザインとSEO最適化により、集客力と保守性を両立したサイトを構築しています。",
      number: "04",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="min-h-screen flex items-center justify-center px-6 lg:px-12 py-12"
    >
      <div className="max-w-7xl w-full">
        <div className="space-y-16">
          <div
            className={`space-y-6 ${
              isVisible ? "animate-slide-up" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-semibold tracking-tight">
              専門分野
            </h2>
            <div className="h-px w-24 bg-foreground" />
            <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">
              フロントエンドからバックエンド、AI・機械学習、モバイルアプリまで幅広い技術領域での開発実績を基に、
              最新技術を活用した高品質なソリューションを提供いたします。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {expertiseAreas.map((area, index) => (
              <div
                key={area.number}
                className={`space-y-4 border-t border-border pt-6 hover:border-foreground transition-all duration-300 group ${
                  isVisible ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl lg:text-2xl font-display font-medium group-hover:text-foreground/80 transition-colors duration-300">
                    {area.title}
                  </h3>
                  <span className="text-4xl font-light text-muted-foreground/30 group-hover:text-muted-foreground/50 transition-colors duration-300">
                    {area.number}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">
                  {area.description}
                </p>
              </div>
            ))}
          </div>

          <div
            className={`pt-8 ${
              isVisible ? "animate-slide-up animation-delay-600" : "opacity-0"
            }`}
          >
            <div className="h-px w-full bg-border mb-8" />
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2 hover:scale-105 transition-transform duration-300 cursor-default">
                <p className="text-4xl lg:text-5xl font-display font-bold">
                  40+
                </p>
                <p className="text-sm text-muted-foreground">
                  プロジェクト実績
                </p>
              </div>
              <div className="space-y-2 hover:scale-105 transition-transform duration-300 cursor-default">
                <p className="text-4xl lg:text-5xl font-display font-bold">
                  8+
                </p>
                <p className="text-sm text-muted-foreground">年の経験</p>
              </div>
              <div className="space-y-2 hover:scale-105 transition-transform duration-300 cursor-default">
                <p className="text-4xl lg:text-5xl font-display font-bold">
                  25+
                </p>
                <p className="text-sm text-muted-foreground">
                  満足いただいたクライアント
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
