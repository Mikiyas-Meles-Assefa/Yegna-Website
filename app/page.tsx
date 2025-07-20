"use client"

import Link from "next/link"
import { ArrowRight, Send, MessageCircle, Instagram, TwitterIcon as TikTok } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <style jsx>{`
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      
      @keyframes slideInLeft {
        from {
          opacity: 0;
          transform: translateX(-30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @keyframes slideInRight {
        from {
          opacity: 0;
          transform: translateX(30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      .animate-fadeInUp {
        animation: fadeInUp 0.6s ease-out forwards;
      }
      
      .animate-fadeIn {
        animation: fadeIn 0.8s ease-out forwards;
      }
      
      .animate-slideInLeft {
        animation: slideInLeft 0.6s ease-out forwards;
      }
      
      .animate-slideInRight {
        animation: slideInRight 0.6s ease-out forwards;
      }
    `}</style>

      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-8 h-8 rounded-lg overflow-hidden bg-white shadow-sm border group-hover:shadow-md transition-shadow duration-200">
              <img src="/yegna-write-logo.png" alt="Yegna Write Logo" className="w-full h-full object-contain p-1" />
            </div>
            <span className="text-xl font-bold group-hover:text-primary transition-colors duration-200">
              Yegna Write
            </span>
          </Link>
          <nav className="flex gap-6 md:gap-8">
            <Link
              href="/services"
              className="text-sm font-medium transition-all duration-200 hover:text-primary hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-200 hover:after:w-full"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium transition-all duration-200 hover:text-primary hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-200 hover:after:w-full"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium transition-all duration-200 hover:text-primary hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-200 hover:after:w-full"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="flex flex-col items-center space-y-6 text-center animate-fadeInUp">
              <div className="space-y-4 max-w-4xl">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                  Your Guide to Global Opportunities
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl leading-relaxed">
                  We share real, actionable advice on scholarships and college applications to help Ethiopian students
                  achieve their dreams.
                </p>
              </div>
              <div
                className="flex flex-col gap-4 min-[400px]:flex-row animate-fadeInUp"
                style={{ animationDelay: "0.2s" }}
              >
                <Button asChild size="lg" className="bg-black text-white hover:bg-black/90">
                  <Link
                    href="/services"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Explore Our Services
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="group bg-transparent">
                  <Link
                    href="/about"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Learn About Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* How We Help You Succeed Section */}
        <section className="w-full py-12 md:py-24 bg-muted/30 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 animate-fadeInUp">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                How We Help You Succeed
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground leading-relaxed">
                From application support and university guidance to essay writing and community building - we provide
                comprehensive support for your educational journey.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {[
                {
                  icon: (
                    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  ),
                  title: "Personalized Guidance",
                  description:
                    "One-on-one support for scholarship applications, essay writing, and university selection tailored to each student's unique profile and goals.",
                  link: "/services",
                  delay: "0s",
                },
                {
                  icon: (
                    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  ),
                  title: "Professional Services",
                  description:
                    "Comprehensive essay writing, editing, and application support services designed to help you present your best self to admissions committees.",
                  link: "/services",
                  delay: "0.1s",
                },
                {
                  icon: (
                    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  ),
                  title: "Community Building",
                  description:
                    "Active Telegram and TikTok communities where students can connect, share experiences, and support each other throughout their educational journey.",
                  link: "https://t.me/yegnawrite",
                  external: true,
                  delay: "0.2s",
                },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  {...(item.external && { target: "_blank", rel: "noopener noreferrer" })}
                  className="group text-center p-8 rounded-2xl border bg-background/50 backdrop-blur-sm hover:bg-background hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fadeInUp cursor-pointer"
                  style={{ animationDelay: item.delay }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{item.description}</p>
                  <div className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium group-hover:underline transition-all duration-200">
                    <span>Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-16 animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
              <Button asChild size="lg" className="group">
                <Link href="/services" className="flex items-center">
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="w-full py-12 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-primary/5"></div>
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="max-w-4xl mx-auto space-y-8 animate-fadeInUp">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text mb-8">
                  Empowering Ethiopian Students
                </h2>
              </div>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed text-center">
                <p className="animate-slideInLeft" style={{ animationDelay: "0.1s" }}>
                  We understand the unique challenges Ethiopian students face when applying for international education
                  opportunities. From language barriers to unfamiliar application processes, we've been there and we're
                  here to help.
                </p>
                <p className="animate-slideInRight" style={{ animationDelay: "0.2s" }}>
                  Our team provides personalized support to help you craft compelling essays, navigate complex
                  applications, and present your authentic story in the best possible light. We believe every talented
                  Ethiopian student deserves access to world-class education.
                </p>
              </div>
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center mt-12 animate-fadeInUp"
                style={{ animationDelay: "0.3s" }}
              >
                <Button asChild size="lg" className="bg-black text-white hover:bg-black/90">
                  <Link
                    href="https://t.me/yegnawriters"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Contact Us Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="bg-black text-white hover:bg-black/90">
                  <Link
                    href="/about"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Learn Our Story
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-background/95 backdrop-blur-sm py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Column 1: Logo and Mission */}
            <div className="space-y-4 animate-slideInLeft">
              <Link
                href="/"
                className="inline-flex items-center space-x-3 group"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <div className="w-8 h-8 rounded-lg overflow-hidden bg-white shadow-sm border group-hover:shadow-md transition-shadow duration-200">
                  <img
                    src="/yegna-write-logo.png"
                    alt="Yegna Write Logo"
                    className="w-full h-full object-contain p-1"
                  />
                </div>
                <span className="text-xl font-bold group-hover:text-primary transition-colors duration-200">
                  Yegna Write
                </span>
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Empowering Ethiopian students with the knowledge and resources they need to pursue global educational
                opportunities.
              </p>
            </div>

            {/* Column 2: Links */}
            <div className="space-y-4 animate-fadeIn" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-lg font-medium">Links</h3>
              <nav className="flex flex-col space-y-3">
                <Link
                  href="/services"
                  className="text-sm hover:text-primary hover:underline transition-all duration-200 hover:translate-x-1"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  Services
                </Link>
                <Link
                  href="/about"
                  className="text-sm hover:text-primary hover:underline transition-all duration-200 hover:translate-x-1"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className="text-sm hover:text-primary hover:underline transition-all duration-200 hover:translate-x-1"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  Contact Us
                </Link>
              </nav>
            </div>

            {/* Column 3: Social Media & Email */}
            <div className="space-y-4 animate-slideInRight" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-lg font-medium">Connect With Us</h3>
              <div className="flex space-x-4">
                <Link
                  href="https://t.me/yegnawrite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110 hover:-translate-y-1"
                  title="Telegram Channel"
                >
                  <Send className="h-6 w-6" />
                  <span className="sr-only">Telegram Channel</span>
                </Link>
                <Link
                  href="https://t.me/yegnawriters"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110 hover:-translate-y-1"
                  title="Send us a Message"
                >
                  <MessageCircle className="h-6 w-6" />
                  <span className="sr-only">Send Message</span>
                </Link>
                <Link
                  href="https://tiktok.com/@yegna.write"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110 hover:-translate-y-1"
                  title="TikTok"
                >
                  <TikTok className="h-6 w-6" />
                  <span className="sr-only">TikTok</span>
                </Link>
                <Link
                  href="https://instagram.com/yegnawrite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110 hover:-translate-y-1"
                  title="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
              <div className="space-y-2 pt-2">
                <h4 className="text-sm font-medium">Email Us</h4>
                <Link
                  href="mailto:yegnawrite@gmail.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  yegnawrite@gmail.com
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-6">
            <p className="text-center text-xs text-muted-foreground">
              © {new Date().getFullYear()} Yegna Write. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
