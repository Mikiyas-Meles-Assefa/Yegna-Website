"use client"

import Link from "next/link"
import {
  ArrowLeft,
  CheckCircle,
  Clock,
  Users,
  Calendar,
  ExternalLink,
  Send,
  MessageCircle,
  Instagram,
  TwitterIcon as TikTok,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function USUndergraduateServices() {
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
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 max-w-6xl">
          {/* Back to Services */}
          <Link
            href="/services"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Link>

          {/* Hero Section */}
          <section className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">USA</span>
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">US Undergraduate Applications</h1>
                <p className="text-xl text-muted-foreground">Comprehensive support for your dream US university.</p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 items-center mb-8">
              <div>
                <p className="text-lg text-muted-foreground mb-4">
                  Navigating the US college application process can be complex. Yegna Write provides tailored guidance
                  and expert support to help Ethiopian students stand out and secure admissions to top universities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg">
                    <Link
                      href="https://www.commonapp.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    >
                      Visit Common App
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/contact" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                      Need Application Support?
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="font-semibold mb-4">Key Application Aspects</h3>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 text-orange-500 mr-2" />
                    <span className="font-medium">Early Action/Decision:</span>
                    <span className="ml-2">Oct-Nov (varies)</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 text-red-500 mr-2" />
                    <span className="font-medium">Regular Decision:</span>
                    <span className="ml-2">Jan (varies)</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Users className="h-4 w-4 text-blue-500 mr-2" />
                    <span className="font-medium">Key Components:</span>
                    <span className="ml-2">Essays, Transcripts, Recommendations</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Where Students Struggle */}
          <section className="mb-12 bg-muted/30 p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-6">Beyond Grades — Your Narrative Matters</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-muted-foreground mb-4">
                  US university applications require more than just good grades; they demand a compelling personal
                  narrative that showcases your unique experiences, aspirations, and potential.
                </p>
                <p className="text-muted-foreground mb-4">
                  Many students find it challenging to articulate their story effectively, especially when dealing with
                  cultural nuances and the specific expectations of American admissions committees.
                </p>
                <p className="font-medium">
                  If you have a powerful story but struggle to translate it into a standout application, Yegna Write is
                  here to guide you.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold">Common Challenges:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <Clock className="h-4 w-4 text-orange-500 mr-2" />
                    Crafting impactful personal statements and supplemental essays
                  </li>
                  <li className="flex items-center text-sm">
                    <Clock className="h-4 w-4 text-orange-500 mr-2" />
                    Navigating complex financial aid forms (CSS Profile)
                  </li>
                  <li className="flex items-center text-sm">
                    <Clock className="h-4 w-4 text-orange-500 mr-2" />
                    Identifying best-fit universities and scholarship opportunities
                  </li>
                  <li className="flex items-center text-sm">
                    <Clock className="h-4 w-4 text-orange-500 mr-2" />
                    Securing strong recommendation letters
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Our Services */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Yegna Write: US Application Support</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We offer comprehensive support, from initial college list creation to final essay polishing, ensuring your
              application truly shines.
            </p>

            <Tabs defaultValue="individual" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="individual">Individual Services</TabsTrigger>
                <TabsTrigger value="packages">Packages & Bundles</TabsTrigger>
              </TabsList>

              <TabsContent value="individual" className="mt-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="relative">
                    <div className="absolute top-4 right-4 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Popular 🔥
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">College List Preparation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold mb-2">250 ETB</div>
                      <p className="text-sm text-muted-foreground">Personalized list of suitable colleges.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">CSS Profile & Financial Aid Support</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold mb-2">1,500 ETB</div>
                      <p className="text-sm text-muted-foreground">Guidance on financial aid applications.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Essay Writing</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold mb-2">1,000 ETB</div>
                      <p className="text-sm text-muted-foreground">per 100 words</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Essay Translation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold mb-2">750 ETB</div>
                      <p className="text-sm text-muted-foreground">per 100 words (Amharic to English)</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Essay Editing</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold mb-2">500 ETB</div>
                      <p className="text-sm text-muted-foreground">per 100 words</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Essay Review</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold mb-2">250 ETB</div>
                      <p className="text-sm text-muted-foreground">per 100 words</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Recommendation Letter Drafting</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold mb-2">1,500 ETB</div>
                      <p className="text-sm text-muted-foreground">Professional drafting for your recommenders.</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="packages" className="mt-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="border-2 border-primary/20">
                    <CardHeader>
                      <CardTitle className="text-xl">Common App Full Support</CardTitle>
                      <CardDescription>Everything you need for the Common Application.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold mb-4">3,000 ETB</div>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Activity List Polishing
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Essay Review (no word limit, full assessment)
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          College List (up to 20 schools)
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Common App Guidance
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="relative border-2 border-primary shadow-lg">
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                      Our Choice 🔥
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">Full Package</CardTitle>
                      <CardDescription>Extensive support for a strong application.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold mb-4">10,000 ETB</div>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Everything in Common App Full Support
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          CSS Profile & Financial Aid Support
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />1 Personal Statement (650 words)
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />1 Supplemental Essay (250–400 words)
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />1 Essay Edited
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />1 Essay Reviewed (no word limit)
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />1 Recommendation Letter
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="relative border-2 border-primary/20">
                    <div className="absolute top-4 right-4 bg-primary/80 text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                      Premium
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">Premium Package</CardTitle>
                      <CardDescription>Maximum support for competitive applications.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold mb-4">20,000 ETB</div>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Everything in Full Package
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />1 Personal Statement (650 words max)
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />3 Supplemental Essays
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />3 Recommendation Letters
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Unlimited Essay Reviews
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </section>

          {/* College Selection Philosophy */}
          <section className="mb-12 bg-primary/5 p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-6 text-center">Our College Selection Philosophy</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                At Yegna Write, our primary goal is to help students secure **full-ride scholarships** to US
                universities. We understand that for many Ethiopian students, financial aid is a critical factor in
                making international education accessible.
              </p>
              <p>
                Our college list preparation service focuses on identifying institutions known for their generous
                financial aid policies and those that offer full-ride opportunities to international students. We
                prioritize schools where your academic profile and extracurriculars align with their scholarship
                criteria.
              </p>
              <p>
                However, we also work with students who have the ability to afford partial costs (e.g., tuition, meal
                plans, airfare). In such cases, we broaden our search to include a wider range of universities that
                offer significant partial scholarships or strong academic programs that align with your career goals.
              </p>
              <p className="font-medium text-center pt-4">
                Our guidance is always tailored to your financial needs and academic aspirations.
              </p>
            </div>
          </section>

          {/* Ready to Start */}
          <section className="text-center py-12 bg-primary/5 rounded-xl">
            <h2 className="text-3xl font-bold mb-4">Let's Build Your US University Dream</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't let the complexities of US applications hold you back. Partner with us to craft a compelling
              application that opens doors to your future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                  💬 Message Yegna Write Now
                </Link>
              </Button>
            </div>
          </section>
        </div>
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
