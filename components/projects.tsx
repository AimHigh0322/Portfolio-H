"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export function Projects() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
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

  const projects = [
    {
      id: 1,
      title: "出張買取プラス",
      category: "Webシステム",
      description:
        "出張買取プラス 予約管理カレンダー株式会社プラスが運営する出張買取サービス「出張買取プラス」の公式予約システムです。お客様がご自宅にスタッフを呼んで不用品の査定・買取を依頼する際、訪問希望日時をオンラインで簡単に予約・確認できるWebアプリケーションを担当しました。このサービスは、家具や家電、ブランド品、楽器など幅広い不用品を対象に、神奈川県を中心に東京の一部地域（世田谷区・目黒区・大田区など）で出張査定を行っています",
      tags: ["Next.js", "Google Cloud"],
      image: "/reservation.png",
      url: "",
    },
     {
      id: 2,
      title: "オンライン講義プラットフォーム",
      category: "Webシステム",
      description:
        "Next.jsを活用したオンライン講義システムを開発しました。Stripeを利用したチケット購入機能、SendGridを利用したメール送信機能、動画および文書ベースの学習コンテンツ、動画学習の進捗状況追跡機能、試験受験時のAI顔認証機能、試験の自動採点機能、試験合格時の修了証自動発行機能を実装しました。",
      tags: ["Next.js", "Stripe", "SendGrid", "AI"],
      image: "/manabou.png",
      url: "",
    },
    {
      id: 3,
      title: "もし活",
      category: "モバイルアプリ",
      description:
        "Flutter と Health API・Prisma を活用したモバイルアプリを開発。Firebase によるリアルタイムデータ管理と認証機能、CRM として Salesforce を統合し、顧客データの一元管理を実現。FCM によるプッシュ通知機能により、ユーザーへのタイムリーな情報配信を実現しました。",
      tags: ["Flutter", "Firebase", "Salesforce", "FCM"],
      image: "/moshikatsu.png",
      url: "",
    },
    
    {
      id: 4,
      title: "lajollahale",
      category: "E-Commerce",
      description:
        "酒類販売ECサイトをShopifyプラットフォームで構築。カスタムテーマの開発と、商品検索・フィルタリング機能を実装。決済処理の最適化と、お客様の購入体験向上のためのUI/UX改善により、コンバージョン率を向上させました。",
      tags: ["Shopify", "Liquid", "JavaScript", "E-commerce"],
      image: "/lajollahale.png",
      url: "",
    },
    {
      id: 5,
      title: "神戸電子専門学校",
      category: "Website",
      description:
        "専門学校様のウェブサイトをNode.jsとWebSocketを使用したリアルタイム通信機能で開発。学生向けの学習管理システムと、AIチャットボットの統合により、24時間対応のサポートシステムを構築。デザインとコーディングを担当し、学生の学習体験向上を実現しました。",
      tags: ["Node.js", "WebSocket", "MySQL", "AI"],
      image: "/ai-chatbot-dashboard.png",
      url: "",
    },
   {
      id: 6,
      title: "クラウドデンタルクリニック",
      category: "Website",
      description:
        "歯科医院様のウェブサイトをHTML5/CSS3とJavaScriptで開発。診療予約システムと患者様向けの情報提供機能を実装。モバイルファーストのレスポンシブデザインにより、患者様の利便性を向上させ、来院促進効果を実現しました。",
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive"],
      image: "/minimalist-portfolio-website-on-laptop.png",
      url: "",
    },
    {
      id: 7,
      title: "Aクリニック",
      category: "Website",
      description:
        "医療機関様のホームページをFigmaでデザインシステムを構築し、モダンなCSS Grid/Flexboxレイアウトで実装。患者様に安心感を与える清潔感のあるデザインと、診療情報の分かりやすい表示により、地域の皆様に愛されるクリニックのブランディングを支援しました。",
      tags: ["Figma", "CSS Grid", "Flexbox", "Performance"],
      image: "/colorful-figma-course-landing-page-on-desktop.png",
      url: "",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="min-h-screen px-6 lg:px-12 py-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="space-y-16">
          <div
            className={`space-y-8 ${
              isVisible ? "animate-slide-up" : "opacity-0"
            }`}
          >
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-light tracking-tight">
                開発実績
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl">
                フロントエンドからバックエンド、モバイルアプリまで幅広い技術スタックを活用し、
                クライアントのビジネス課題を解決するソリューションを提供しております。
              </p>
            </div>
            <div className="h-px w-32 bg-foreground" />
          </div>

          <div className="space-y-24 lg:space-y-32">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                } ${isVisible ? "animate-slide-up" : "opacity-0"}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <button
                  onClick={() => setSelectedImage(index)}
                  className={`group relative overflow-hidden bg-muted transition-all duration-500 hover:scale-[1.02] ${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                >
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={1905}
                    height={920}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-all duration-500" />
                </button>

                <div
                  className={`space-y-6 ${
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <div className="space-y-2">
                    <p className="text-xs tracking-wider uppercase text-muted-foreground">
                      {project.category}
                    </p>
                    <h3 className="text-2xl lg:text-3xl font-light">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 border border-border hover:bg-foreground hover:text-background transition-all duration-300 cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-background/95 z-50 flex items-center justify-center p-4 lg:p-6 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 lg:top-6 lg:right-6 text-3xl lg:text-4xl hover:text-muted-foreground transition-colors w-10 h-10 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            ×
          </button>
          <div className="max-w-6xl w-full">
            <div className="relative bg-muted">
              <Image
                src={projects[selectedImage].image || "/placeholder.svg"}
                alt={projects[selectedImage].title}
                width={1905}
                height={920}
                className="w-full h-auto"
              />
            </div>
            <div className="mt-6 lg:mt-8 text-center space-y-3">
              <p className="text-xs tracking-wider uppercase text-muted-foreground">
                {projects[selectedImage].category}
              </p>
              <h3 className="text-xl lg:text-2xl font-light">
                {projects[selectedImage].title}
              </h3>
              <p className="text-sm lg:text-base text-muted-foreground">
                {projects[selectedImage].description}
              </p>
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                {projects[selectedImage].tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <div className="flex items-center gap-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(
                      selectedImage > 0
                        ? selectedImage - 1
                        : projects.length - 1
                    );
                  }}
                  className="text-sm border border-foreground px-6 py-2 hover:bg-foreground hover:text-background transition-all duration-300 hover:-translate-x-1"
                >
                  Previous
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(
                      selectedImage < projects.length - 1
                        ? selectedImage + 1
                        : 0
                    );
                  }}
                  className="text-sm border border-foreground px-6 py-2 hover:bg-foreground hover:text-background transition-all duration-300 hover:translate-x-1"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
