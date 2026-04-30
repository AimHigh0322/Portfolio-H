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
              開発のご相談やお見積もりなど、お気軽にご連絡ください。
            </p>
            <div className="space-y-4 pt-8">
              <div className="flex items-center gap-4">
                <svg className="w-5 h-5 text-muted-foreground shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                <a
                  href="mailto:casmiyasu3811@gmail.com"
                  className="text-base hover:text-muted-foreground transition-all duration-300 relative group"
                >
                  <span className="relative">
                    casmiyasu3811@gmail.com
                    <span className="absolute left-0 bottom-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
                  </span>
                </a>
              </div>
              <div className="flex items-center gap-4">
                <svg className="w-5 h-5 text-muted-foreground shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
                <a
                  href="https://www.chatwork.com/casmi3811_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base hover:text-muted-foreground transition-all duration-300 relative group"
                >
                  <span className="relative">
                    Chatwork: casmi3811_
                    <span className="absolute left-0 bottom-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
                  </span>
                </a>
              </div>
              <div className="flex items-center gap-4">
                <svg className="w-5 h-5 text-muted-foreground shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                <a
                  href="https://t.me/casmi3811"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base hover:text-muted-foreground transition-all duration-300 relative group"
                >
                  <span className="relative">
                    Telegram: @casmi3811
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
                  ? "送信しました"
                  : "送信する"}
              </button>

              {status === "success" && (
                <p className="text-sm text-muted-foreground">
                  メッセージを受け付けました。折り返しご連絡いたします。
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-destructive">
                  送信できませんでした。お手数ですが、もう一度お試しください。
                </p>
              )}
            </form>
          </div>
        </div>
        <div className="mt-24 pt-12 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            © 2026 Abdul Hakim. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
