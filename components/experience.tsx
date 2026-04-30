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
      title: "LLM・RAGの組み込み",
      description:
        "OpenAIやClaudeのAPIを使ったチャットボット、社内ドキュメント検索（RAG）、要約・分類などを実装してきました。LangChainとベクトルDBを組み合わせて、業務で実際に使える形に落とし込むのが得意です。",
      number: "01",
    },
    {
      title: "AI機能を組み込んだWebアプリ",
      description:
        "Next.js・FastAPI・Node.jsを中心にしたフルスタック開発に、AI機能を組み込むのが得意です。試験の自動採点やAI顔認証、画像認識を組み込んだサービスなど、UIから推論APIまで一通り自分で作れます。",
      number: "02",
    },
    {
      title: "Webシステム・ECサイト",
      description:
        "Next.js、Node.js、Laravelでのフルスタック開発も継続して対応しています。予約管理、ECサイト、SaaSなど、Stripe決済やメール配信、リアルタイム機能まで含めて一気通貫で実装できます。",
      number: "03",
    },
    {
      title: "MLモデル・自動化",
      description:
        "PyTorchやOpenCV、Whisperを使った画像・音声処理の実装経験があります。既存モデルの活用と簡単なファインチューニング、業務自動化スクリプトまで、用途に合わせて選んで作っています。",
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
              得意分野
            </h2>
            <div className="h-px w-24 bg-foreground" />
            <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">
              AI機能の実装からWebアプリの開発まで、まとめて対応できるのが持ち味です。「AIを使ってこういうことしたい」をそのまま形にできます。
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
                  30+
                </p>
                <p className="text-sm text-muted-foreground">
                  開発プロジェクト
                </p>
              </div>
              <div className="space-y-2 hover:scale-105 transition-transform duration-300 cursor-default">
                <p className="text-4xl lg:text-5xl font-display font-bold">
                  8+
                </p>
                <p className="text-sm text-muted-foreground">
                  年の実務経験
                </p>
              </div>
              <div className="space-y-2 hover:scale-105 transition-transform duration-300 cursor-default">
                <p className="text-4xl lg:text-5xl font-display font-bold">
                  15+
                </p>
                <p className="text-sm text-muted-foreground">
                  取引先クライアント
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
