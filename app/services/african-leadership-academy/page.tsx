"use client"

import Link from "next/link"
import {
  ArrowLeft,
  CheckCircle,
  Clock,
  Users,
  Award,
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

export default function AfricanLeadershipAcademy() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6 lg:px-8">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Yegna Write</span>
          </Link>
          <nav className="flex gap-6 md:gap-8">
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
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Link>

          {/* Hero Section */}
          <section className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">ALA</span>
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">African Leadership Academy</h1>
                <p className="text-xl text-muted-foreground">2026 Applications Are Open</p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 items-center mb-8">
              <div>
                <p className="text-lg text-muted-foreground mb-4">
                  Yegna Write helps students craft strong, original essays for ALA's competitive selection process.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg">
                    <Link
                      href="https://ala2.submittable.com/submit/5f5b890a-4f6c-4250-98ec-81e598f7263d/2026-diploma-program-eng"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Apply to ALA
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" onClick={() => {
                    const target = document.getElementById("pricing-section");
                    target?.scrollIntoView({ behavior: "smooth" });
                  }}>
                    Need Essay Support?
                  </Button>
                </div>
              </div>
              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="font-semibold mb-4">Key Deadlines</h3>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 text-orange-500 mr-2" />
                    <span className="font-medium">Early Deadline:</span>
                    <span className="ml-2">October 15, 2025</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 text-red-500 mr-2" />
                    <span className="font-medium">Final Deadline:</span>
                    <span className="ml-2">January 15, 2026</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Users className="h-4 w-4 text-blue-500 mr-2" />
                    <span className="font-medium">Age Requirement:</span>
                    <span className="ml-2">Born on/after Sept 1, 2006</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About ALA */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">🌍 What is ALA?</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  African Leadership Academy (ALA) is a world-class, two-year pre-university program based in South
                  Africa. It brings together exceptional young people from across the continent to learn, lead, and
                  launch change in their communities.
                </p>
                <p className="text-muted-foreground">
                  Graduates go on to attend top universities like Harvard, Ashesi, Yale, and AUB — and more importantly,
                  they carry a mission: to transform Africa.
                </p>
              </div>
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="h-5 w-5 mr-2 text-primary" />
                    Why ALA Matters
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      World-class education in South Africa
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Full scholarships available
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Direct pathway to top universities
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Network of African leaders
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Focus on African development
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Where Students Struggle */}
          <section className="mb-12 bg-muted/30 p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-6">Not Just Forms — Your Story Matters</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-muted-foreground mb-4">
                  The ALA application asks you to write — about your ideas, your impact, your vision for the future.
                </p>
                <p className="text-muted-foreground mb-4">
                  Not everyone finds that easy. Some students freeze. Some overthink. Some can't translate their
                  thoughts clearly into English.
                </p>
                <p className="font-medium">
                  If you know your story is worth telling — but you're not sure how — Yegna Write is here.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold">Common Challenges:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <Clock className="h-4 w-4 text-orange-500 mr-2" />
                    Writer's block on personal essays
                  </li>
                  <li className="flex items-center text-sm">
                    <Clock className="h-4 w-4 text-orange-500 mr-2" />
                    Translating ideas from Amharic to English
                  </li>
                  <li className="flex items-center text-sm">
                    <Clock className="h-4 w-4 text-orange-500 mr-2" />
                    Structuring complex thoughts clearly
                  </li>
                  <li className="flex items-center text-sm">
                    <Clock className="h-4 w-4 text-orange-500 mr-2" />
                    Meeting word count requirements
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Our Services */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Yegna Write: ALA Essay Support</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We've worked with students across Ethiopia and beyond to help them express themselves with clarity and
              confidence. You bring your story — we help shape it.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-blue-600 font-bold">✍️</span>
                  </div>
                  <CardTitle className="text-lg">Essay Writing</CardTitle>
                  <CardDescription>From idea to polished draft</CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-purple-600 font-bold">🪄</span>
                  </div>
                  <CardTitle className="text-lg">Essay Editing</CardTitle>
                  <CardDescription>Structure, grammar, and clarity</CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-green-600 font-bold">🧐</span>
                  </div>
                  <CardTitle className="text-lg">Essay Review</CardTitle>
                  <CardDescription>Constructive feedback, no edits</CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-orange-600 font-bold">🌍</span>
                  </div>
                  <CardTitle className="text-lg">Essay Translation</CardTitle>
                  <CardDescription>From Amharic to fluent English</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </section>

          {/* Pricing Section */}
          <section id="pricing-section" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Simple, Affordable Packages</h2>
            <p className="text-lg text-muted-foreground mb-8">
              💡 Choose a full package or get help with just one section.
            </p>

            <Tabs defaultValue="writing" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="writing">🟡 Writing</TabsTrigger>
                <TabsTrigger value="editing">🔵 Editing</TabsTrigger>
                <TabsTrigger value="review">🟢 Review</TabsTrigger>
              </TabsList>

              <TabsContent value="writing" className="mt-8" id = "pricing">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Community Essays</CardTitle>
                      <CardDescription>Essays 1A–1E</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold mb-2">4,500 ETB</div>
                      <p className="text-sm text-muted-foreground">Complete writing support</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Leadership Essays</CardTitle>
                      <CardDescription>Essays 2A–2C</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold mb-2">2,200 ETB</div>
                      <p className="text-sm text-muted-foreground">Complete writing support</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Work Sample Essays</CardTitle>
                      <CardDescription>Essays 3A–3B</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold mb-2">2,000 ETB</div>
                      <p className="text-sm text-muted-foreground">Complete writing support</p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-primary">
                    <CardHeader>
                      <CardTitle className="text-lg">Full Package</CardTitle>
                      <CardDescription>All 10 Essays</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold mb-2">8,000 ETB</div>
                      <p className="text-sm text-muted-foreground">Best value - Save 700 ETB</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="editing" className="mt-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Community Essays</CardTitle>
                      <CardDescription>Essays 1A–1E</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold mb-2">2,200 ETB</div>
                      <p className="text-sm text-muted-foreground">Professional editing</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Leadership Essays</CardTitle>
                      <CardDescription>Essays 2A–2C</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold mb-2">1,100 ETB</div>
                      <p className="text-sm text-muted-foreground">Professional editing</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Work Sample Essays</CardTitle>
                      <CardDescription>Essays 3A–3B</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold mb-2">1,000 ETB</div>
                      <p className="text-sm text-muted-foreground">Professional editing</p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-primary">
                    <CardHeader>
                      <CardTitle className="text-lg">Full Package</CardTitle>
                      <CardDescription>All 10 Essays</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold mb-2">4,000 ETB</div>
                      <p className="text-sm text-muted-foreground">Best value - Save 300 ETB</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="review" className="mt-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Community Essays</CardTitle>
                      <CardDescription>Essays 1A–1E</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold mb-2">1,100 ETB</div>
                      <p className="text-sm text-muted-foreground">Detailed feedback</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Leadership Essays</CardTitle>
                      <CardDescription>Essays 2A–2C</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold mb-2">550 ETB</div>
                      <p className="text-sm text-muted-foreground">Detailed feedback</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Work Sample Essays</CardTitle>
                      <CardDescription>Essays 3A–3B</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold mb-2">500 ETB</div>
                      <p className="text-sm text-muted-foreground">Detailed feedback</p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-primary">
                    <CardHeader>
                      <CardTitle className="text-lg">Full Package</CardTitle>
                      <CardDescription>All 10 Essays</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold mb-2">2,000 ETB</div>
                      <p className="text-sm text-muted-foreground">Best value - Save 150 ETB</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-8 p-6 bg-muted/30 rounded-lg">
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  🔹 Just need help with a paragraph or intro? We offer flexible per-word support too. DM us to ask.
                </p>
                <p>🔹 Turnaround: 1–3 days per essay depending on the service.</p>
              </div>
            </div>
          </section>

          {/* Ready to Start */}
          <section className="text-center py-12 bg-primary/5 rounded-xl">
            <h2 className="text-3xl font-bold mb-4">Let's Write Your Story</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              You don't need to do this alone. If you're serious about your ALA application, we're here to make sure
              your essays reflect your voice and potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-black text-white hover:bg-black/90">
                <Link href="https://t.me/yegnawriters" target="_blank" rel="noopener noreferrer">
                  💬 Message Yegna Write Now
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link
                  href="https://ala2.submittable.com/submit/5f5b890a-4f6c-4250-98ec-81e598f7263d/2026-diploma-program-eng"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🔗 Visit the ALA Application Page
                  <ExternalLink className="ml-2 h-4 w-4" />
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
