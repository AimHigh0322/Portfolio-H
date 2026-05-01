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
      category: "業務基幹システム",
      description:
        "複数店舗を展開する買取事業者向けの予約管理システムを、要件定義から設計・実装・運用保守まで一貫して担当しました。本部・加盟店・査定スタッフが同時に利用する基幹システムとして、WebSocketによるリアルタイム同期、日／週／月のマルチビューカレンダー、多階層の権限管理、レポート集計、ブラックリスト・重複予約検知などを実装。一括取得から必要最小限のAPI取得方式へ刷新して読み込み速度と安定性を大幅に改善し、PWA対応で現場のスマホ運用にも最適化しています。",
      tags: ["Next.js", "TypeScript", "Prisma", "WebSocket", "PWA", "Google Cloud"],
      image: "/reservation.png",
      url: "",
    },
    {
      id: 2,
      title: "オンライン講義プラットフォーム",
      category: "Webシステム",
      description:
        "React・Node.js・Expressで構築したオンライン講義システムです。WebSocketとWebRTCを使ったライブ配信・双方向のやり取りを実装し、Stripeでのチケット購入、進捗トラッキング、受験時のAI顔認証、自動採点、合格時の修了証発行まで、一連の機能を開発しました。",
      tags: ["React", "Node.js", "Express", "WebSocket", "WebRTC", "Stripe"],
      image: "/manabou.png",
      url: "",
    },
    {
      id: 3,
      title: "もし活",
      category: "モバイルアプリ",
      description:
        "FlutterとHealth API・Prismaを使ったヘルスケア系のモバイルアプリです。Firebaseでリアルタイムのデータ管理と認証を行い、SalesforceをCRMとして顧客情報を一元管理。FCMでのプッシュ通知も実装して、ユーザーにタイムリーに情報を届けられるようにしました。",
      tags: ["Flutter", "Firebase", "Salesforce", "FCM"],
      image: "/moshikatsu.png",
      url: "",
    },
    {
      id: 4,
      title: "lajollahale",
      category: "ECサイト",
      description:
        "Shopifyで構築した酒類のECサイトです。カスタムテーマの開発と、商品の検索・絞り込み機能を実装しました。決済フローの最適化とUI/UXの改善で、購入完了率の向上につなげています。",
      tags: ["Shopify", "Liquid", "JavaScript", "E-commerce"],
      image: "/lajollahale.png",
      url: "",
    },
    {
      id: 5,
      title: "Shortwave",
      category: "AIプロダクト",
      description:
        "ShortwaveのコアとなるAI機能の設計と実装を担当しました。煩雑になりがちな受信メールをトリアージし、スレッドの要約や文脈に沿った返信ドラフト、スケジュール調整やフォローアップの提案までを自動化。プライバシーを守りつつ、本番環境でも安定したレイテンシと信頼性を実現しています。",
      tags: ["Python", "PyTorch", "BERT", "T5", "RAG", "FAISS", "Kubernetes"],
      image: "/shortwave.png",
      url: "",
    },
    {
      id: 6,
      title: "DogStar",
      category: "ブロックチェーン",
      description:
        "Rustで実装したスマートコントラクトをコアに、トークン管理・資産取引・オンチェーン履歴の検証ロジックを構築したブロックチェーンプロダクトです。フロントエンドはReactで、ウォレット接続から取引フローまでをスムーズに体験できるUIを実装。バックエンドはAWS Lambdaのサーバーレス構成で、DynamoDBを使った高速なデータアクセスとAWS上でのスケーラブルな運用を実現しています。",
      tags: ["React", "Rust", "Smart Contract", "AWS Lambda", "DynamoDB", "AWS"],
      image: "/dogstart.png",
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
                これまで多くのお客様に貴重な機会をいただき、AI・Web・SaaS・モバイルアプリと、幅広い領域でプロダクト開発に携わらせていただきました。心から感謝するとともに、その中で形にしてきた案件の一部をご紹介いたします。
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
            aria-label="閉じる"
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
                  前へ
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
                  次へ
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
