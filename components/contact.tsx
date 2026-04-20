"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";

export function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 lg:px-12 py-12 bg-secondary"
    >
      <div className="max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div
            className={`space-y-6 ${
              isVisible ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight">
              お問い合わせ
            </h2>
            <div className="h-px w-16 bg-foreground" />
            <p className="text-base lg:text-lg leading-relaxed text-muted-foreground pt-4">
              プロジェクトのご相談やお問い合わせは、お気軽にご連絡ください。
            </p>
            <div className="space-y-4 pt-8">
              <div className="flex items-baseline gap-4">
                <span className="text-sm text-muted-foreground min-w-20">
                  Email
                </span>
                <a
                  href="mailto:windmansmart0101@gmail.com"
                  className="text-base hover:text-muted-foreground transition-all duration-300 relative group"
                >
                  <span className="relative">
                    windmansmart0101@gmail.com
                    <span className="absolute left-0 bottom-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
                  </span>
                </a>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-sm text-muted-foreground min-w-20">
                  Chatwork
                </span>
                <a
                  href="https://www.chatwork.com/aimhigh_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base hover:text-muted-foreground transition-all duration-300 relative group"
                >
                  <span className="relative">
                    aimhigh_
                    <span className="absolute left-0 bottom-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div
            className={`${isVisible ? "animate-slide-in-right" : "opacity-0"}`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm text-muted-foreground">
                  お名前 *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border focus:outline-none focus:border-foreground hover:border-muted-foreground transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm text-muted-foreground"
                >
                  メールアドレス *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border focus:outline-none focus:border-foreground hover:border-muted-foreground transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm text-muted-foreground"
                >
                  件名 *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border focus:outline-none focus:border-foreground hover:border-muted-foreground transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm text-muted-foreground"
                >
                  メッセージ *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border focus:outline-none focus:border-foreground hover:border-muted-foreground transition-all duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full sm:w-auto text-sm border border-foreground px-8 py-3 hover:bg-foreground hover:text-background transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 disabled:hover:scale-100"
              >
                {status === "sending"
                  ? "送信中..."
                  : status === "success"
                  ? "送信完了"
                  : "送信する"}
              </button>

              {status === "success" && (
                <p className="text-sm text-muted-foreground">
                  メッセージを送信しました。ありがとうございます。
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-destructive">
                  送信に失敗しました。もう一度お試しください。
                </p>
              )}
            </form>
          </div>
        </div>
        <div className="mt-24 pt-12 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            © 2025 Makoto Yamadō. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
