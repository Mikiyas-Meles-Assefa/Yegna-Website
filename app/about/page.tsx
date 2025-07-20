"use client"

import Link from "next/link"
import { MessageCircle, Send, Instagram, TwitterIcon as TikTok } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center space-x-2">
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
              className="text-sm font-medium transition-colors hover:text-primary text-primary"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  About Yegna Write
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  We're passionate about helping Ethiopian students unlock global educational opportunities through
                  guidance, resources, and community support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Story</h2>
                <p className="text-muted-foreground">
                  Yegna Write was born from our own experiences as Ethiopian students navigating the complex world of
                  international education. We understand the challenges, the confusion, and the overwhelming amount of
                  information that students face when trying to pursue their dreams abroad.
                </p>
                <p className="text-muted-foreground">
                  After successfully securing scholarships and studying internationally, we realized that many talented
                  Ethiopian students were missing out on opportunities simply because they lacked access to the right
                  information and guidance. That's when we decided to create a platform that would bridge this gap.
                </p>
                <p className="text-muted-foreground">
                  Today, Yegna Write serves as a comprehensive resource hub, providing practical advice, step-by-step
                  guides, and ongoing support to help Ethiopian students achieve their educational goals worldwide.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md aspect-[4/3] overflow-hidden rounded-xl bg-white p-8 shadow-lg border">
                  <img src="/yegna-write-logo.png" alt="Yegna Write Logo" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Our Mission</h2>
                <p className="text-muted-foreground">
                  To empower Ethiopian students with the knowledge, resources, and support they need to successfully
                  navigate international education opportunities and achieve their academic dreams.
                </p>
                <p className="text-muted-foreground">
                  We believe that every talented Ethiopian student deserves access to world-class education, regardless
                  of their background or circumstances.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Our Vision</h2>
                <p className="text-muted-foreground">
                  A future where Ethiopian students are well-represented in top universities around the world,
                  contributing to global knowledge while maintaining strong connections to their homeland.
                </p>
                <p className="text-muted-foreground">
                  We envision a generation of Ethiopian leaders who will drive positive change both locally and
                  internationally.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">What We Do</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                We provide comprehensive support through multiple channels to ensure every student gets the help they
                need.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <MessageCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Personalized Guidance</h3>
                <p className="text-muted-foreground">
                  One-on-one support for scholarship applications, essay writing, and university selection tailored to
                  each student's unique profile and goals.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Educational Content</h3>
                <p className="text-muted-foreground">
                  Comprehensive blog posts, guides, and resources covering everything from test preparation to visa
                  applications and cultural adaptation.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Community Building</h3>
                <p className="text-muted-foreground">
                  Active Telegram and TikTok communities where students can connect, share experiences, and support each
                  other throughout their educational journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Connect With Us Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">Connect With Us</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Join our community and get the support you need for your educational journey.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 max-w-3xl mx-auto">
              {/* Telegram Channel */}
              <div className="text-center space-y-4 p-8 border rounded-lg">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <svg className="h-10 w-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-1.61 7.59c-.12.54-.44.67-.89.42l-2.46-1.81-1.19 1.14c-.13.13-.24.24-.49.24l.17-2.43 4.47-4.03c.19-.17-.04-.27-.3-.1L9.28 13.47l-2.38-.75c-.52-.16-.53-.52.11-.77l9.3-3.58c.43-.16.81.1.67.73z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Telegram Channel</h3>
                <p className="text-muted-foreground">
                  Join our community for daily tips, updates, and connect with fellow Ethiopian students pursuing
                  international education.
                </p>
                <Button asChild size="lg" className="w-full">
                  <Link
                    href="https://t.me/yegnawrite"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Join Channel
                  </Link>
                </Button>
              </div>

              {/* Send Message */}
              <div className="text-center space-y-4 p-8 border rounded-lg">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <MessageCircle className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold">Send us a Message</h3>
                <p className="text-muted-foreground">
                  Need personalized help? Send us a direct message for one-on-one support and guidance with your
                  applications.
                </p>
                <Button asChild size="lg" className="w-full">
                  <Link
                    href="https://t.me/yegnawriters"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Message Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">Our Values</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                The principles that guide everything we do at Yegna Write.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Authenticity</h3>
                <p className="text-muted-foreground text-sm">
                  We believe in helping students tell their genuine stories, not creating artificial narratives.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Excellence</h3>
                <p className="text-muted-foreground text-sm">
                  We strive for the highest quality in everything we do, from content creation to student support.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Community</h3>
                <p className="text-muted-foreground text-sm">
                  We foster a supportive community where students can learn from each other and grow together.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Innovation</h3>
                <p className="text-muted-foreground text-sm">
                  We continuously evolve our methods and resources to better serve the changing needs of students.
                </p>
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
