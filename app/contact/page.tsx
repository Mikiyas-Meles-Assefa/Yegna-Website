"use client"

import Link from "next/link"
import { MessageCircle, Users, Clock, CheckCircle, Send, Instagram, TwitterIcon as TikTok } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Contact() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link
            href="/"
            className="flex items-center space-x-2"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="text-xl font-bold">Yegna Write</span>
          </Link>
          <nav className="flex gap-8 pr-2">
            <Link
              href="/services"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium transition-colors hover:text-primary text-primary"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Ready to start your journey to global education? Connect with us through multiple channels for
                  personalized guidance and support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Contact Options */}
        <section className="w-full py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              {/* Telegram Channel */}
              <Link
                href="https://t.me/yegnawrite"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              >
                <Card className="relative overflow-hidden border-2 border-blue-200 h-full group-hover:border-blue-300 transition-colors duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:bg-blue-200">
                      <svg className="h-10 w-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-1.61 7.59c-.12.54-.44.67-.89.42l-2.46-1.81-1.19 1.14c-.13.13-.24.24-.49.24l.17-2.43 4.47-4.03c.19-.17-.04-.27-.3-.1L9.28 13.47l-2.38-.75c-.52-.16-.53-.52.11-.77l9.3-3.58c.43-.16.81.1.67.73z" />
                      </svg>
                    </div>
                    <CardTitle className="text-2xl group-hover:text-blue-600 transition-colors duration-300">
                      Join Our Community
                    </CardTitle>
                    <CardDescription className="text-base">
                      Connect with thousands of Ethiopian students and get daily tips, updates, and motivation.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center justify-center text-sm">
                        <Users className="h-4 w-4 text-blue-500 mr-2" />
                        <span>Active community of students</span>
                      </div>
                      <div className="flex items-center justify-center text-sm">
                        <Clock className="h-4 w-4 text-blue-500 mr-2" />
                        <span>Daily tips and updates</span>
                      </div>
                      <div className="flex items-center justify-center text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                        <span>Free resources and guides</span>
                      </div>
                    </div>
                    <div className="bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300 rounded-lg p-4">
                      <p className="text-blue-700 font-medium">Click to join our Telegram channel</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              {/* Direct Message */}
              <Link
                href="https://t.me/yegnawriters"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              >
                <Card className="relative overflow-hidden border-2 border-green-200 h-full group-hover:border-green-300 transition-colors duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:bg-green-200">
                      <MessageCircle className="h-10 w-10 text-green-600" />
                    </div>
                    <CardTitle className="text-2xl group-hover:text-green-600 transition-colors duration-300">
                      Send us a Message
                    </CardTitle>
                    <CardDescription className="text-base">
                      Need personalized help? Get one-on-one support for your scholarship applications and essays.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center justify-center text-sm">
                        <MessageCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span>Direct personal support</span>
                      </div>
                      <div className="flex items-center justify-center text-sm">
                        <Clock className="h-4 w-4 text-green-500 mr-2" />
                        <span>Quick response time</span>
                      </div>
                      <div className="flex items-center justify-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span>Customized guidance</span>
                      </div>
                    </div>
                    <div className="bg-green-50 group-hover:bg-green-100 transition-colors duration-300 rounded-lg p-4">
                      <p className="text-green-700 font-medium">Click to send us a direct message</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* How We Can Help You Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">How We Can Help You</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Whether you're just starting your journey or need specific help with applications, we're here to support
                you.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Essay Writing & Editing */}
              <Link
                href="/services"
                className="block transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              >
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-200">
                      Essay Writing & Editing
                    </CardTitle>
                    <CardDescription>
                      Get expert help with personal statements, scholarship essays, and application documents.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              {/* Scholarship Guidance */}
              <Link
                href="/services"
                className="block transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              >
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-200">
                      Scholarship Guidance
                    </CardTitle>
                    <CardDescription>
                      Find the right scholarships and get step-by-step help with your applications.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              {/* One-on-One Mentoring */}
              <Link
                href="/services"
                className="block transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              >
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-200">
                      One-on-One Mentoring
                    </CardTitle>
                    <CardDescription>
                      Get personalized advice from successful Ethiopian students who've been where you are.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* Response Time */}
        <section className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="bg-primary/5 p-8 rounded-xl border">
                <h3 className="text-2xl font-bold mb-4">Quick Response Time</h3>
                <p className="text-muted-foreground mb-6">
                  We typically respond to messages within a few hours during business days. For urgent matters or
                  immediate questions, our Telegram channel community is always active and ready to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="https://t.me/yegnawriters"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Send Direct Message
                  </Link>
                  <Link
                    href="https://t.me/yegnawrite"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Join Community
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-muted/50 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-4">
              <Link href="/" className="inline-flex items-center space-x-2">
                <span className="text-xl font-bold">Yegna Write</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                Empowering Ethiopian students with the knowledge and resources they need to pursue global educational
                opportunities.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Links</h3>
              <nav className="flex flex-col space-y-2">
                <Link
                  href="/services"
                  className="text-sm hover:underline"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  Services
                </Link>
                <Link
                  href="/about"
                  className="text-sm hover:underline"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className="text-sm hover:underline"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  Contact Us
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
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
