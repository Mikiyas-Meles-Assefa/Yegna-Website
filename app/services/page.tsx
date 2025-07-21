"use client"

import Link from "next/link"
import { ArrowRight, Clock, CheckCircle, Send, MessageCircle, Instagram, TwitterIcon as TikTok } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Services() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center space-x-2"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="text-xl font-bold">Yegna Write</span>
          </Link>
          <nav className="flex gap-6 md:gap-8">
            <Link
              href="/services"
              className="text-sm font-medium transition-colors hover:text-primary text-primary"
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
        <section className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Specialized support for high school scholarship programs and university applications. We help
                  Ethiopian students succeed in competitive programs worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* High School Scholarship Programs */}
        <section className="w-full py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">High School Scholarship Programs</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Expert guidance for competitive pre-university programs that can transform your educational journey.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* African Leadership Academy - Available */}
              <Card className="relative overflow-hidden border-2 border-primary/20">
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                    Available Now
                  </span>
                </div>
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-lg">ALA</span>
                  </div>
                  <CardTitle className="text-xl">African Leadership Academy</CardTitle>
                  <CardDescription>
                    Two-year pre-university program in South Africa for exceptional African youth. Graduates attend top
                    universities worldwide.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Essay writing & editing support
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Application strategy guidance
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Interview preparation
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Document review & feedback
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <div className="text-sm text-muted-foreground">Starting from</div>
                    <div className="text-2xl font-bold">2,000 ETB</div>
                    <div className="text-sm text-muted-foreground">Full packages available</div>
                  </div>

                  <Button asChild className="w-full">
                    <Link href="/services/african-leadership-academy" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* UWC - Coming Soon */}
              <Card className="relative overflow-hidden opacity-75">
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                    Coming Soon
                  </span>
                </div>
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-lg">UWC</span>
                  </div>
                  <CardTitle className="text-xl">United World Colleges</CardTitle>
                  <CardDescription>
                    International Baccalaureate program with campuses worldwide. Full scholarships available for
                    Ethiopian students.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      Application support
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      Essay guidance
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      Interview preparation
                    </div>
                  </div>

                  <Button disabled className="w-full">
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>

              {/* Other Programs - Coming Soon */}
              <Card className="relative overflow-hidden opacity-75">
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                    Coming Soon
                  </span>
                </div>
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-sm">MORE</span>
                  </div>
                  <CardTitle className="text-xl">Other Scholarship Programs</CardTitle>
                  <CardDescription>
                    Additional high school scholarship opportunities including THINK Global School, Pearson College, and
                    more.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      Multiple program options
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      Comprehensive support
                    </div>
                  </div>

                  <Button disabled className="w-full">
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* University Applications */}
        <section className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">University Applications</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Comprehensive support for undergraduate and graduate university applications worldwide.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* US Undergraduate - Now Available */}
              <Card className="relative overflow-hidden border-2 border-primary/20">
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                    Available Now
                  </span>
                </div>
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-sm">USA</span>
                  </div>
                  <CardTitle className="text-xl">US Undergraduate Applications</CardTitle>
                  <CardDescription>
                    Complete support for US college applications including Common App, essays, and scholarship
                    applications.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Common Application support
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Essay writing & editing
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Scholarship guidance
                    </div>
                  </div>

                  <Button asChild className="w-full">
                    <Link href="/services/us-undergraduate" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Masters in Europe - Coming Soon */}
              <Card className="relative overflow-hidden opacity-75">
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                    Coming Soon
                  </span>
                </div>
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-yellow-400 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-sm">EUR</span>
                  </div>
                  <CardTitle className="text-xl">Masters Applications to Europe</CardTitle>
                  <CardDescription>
                    Graduate program applications for European universities including Erasmus scholarships and
                    country-specific programs.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      University selection
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      Statement of purpose
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      Scholarship applications
                    </div>
                  </div>

                  <Button disabled className="w-full">
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>

              {/* Other University Programs - Coming Soon */}
              <Card className="relative overflow-hidden opacity-75">
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                    Coming Soon
                  </span>
                </div>
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-sm">MORE</span>
                  </div>
                  <CardTitle className="text-xl">Other University Programs</CardTitle>
                  <CardDescription>
                    Additional university application support including Canada, Australia, and other destinations.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      Multiple destinations
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      Comprehensive guidance
                    </div>
                  </div>

                  <Button disabled className="w-full">
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Start Your Journey?</h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground">
                  Join hundreds of Ethiopian students who have successfully secured scholarships with our guidance.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button size="lg" asChild>
                  <Link href="/contact" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    Get Started Today
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="https://t.me/yegnawrite" target="_blank" rel="noopener noreferrer">
                    Join Our Community
                  </Link>
                </Button>
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
              <Link
                href="/"
                className="inline-flex items-center space-x-2"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
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
