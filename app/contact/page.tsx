import Link from "next/link"
import { Mail, MapPin, Phone, Send, Clock, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Contact() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Yegna Write</span>
          </Link>
          <nav className="flex gap-8 pr-2">
            <Link href="/blog" className="text-sm font-medium transition-colors hover:text-primary">
              Blog
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
              About Us
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Have questions about scholarships, applications, or need personalized guidance? We're here to help you
                  on your journey to global education.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods Section */}
        <section className="w-full py-12">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-3 mb-12">
              {/* Email Card */}
              <Card>
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Email Us</CardTitle>
                  <CardDescription>
                    Send us a detailed message and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-medium">hello@yegnawrite.com</p>
                  <p className="text-sm text-muted-foreground mt-2">For general inquiries and support</p>
                </CardContent>
              </Card>

              {/* Phone Card */}
              <Card>
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Call Us</CardTitle>
                  <CardDescription>
                    Speak directly with our advisors for urgent questions or consultations.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-medium">+251 911 123 456</p>
                  <p className="text-sm text-muted-foreground mt-2">Mon-Fri, 9AM-6PM (EAT)</p>
                </CardContent>
              </Card>

              {/* Telegram Card */}
              <Card>
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Join Our Community</CardTitle>
                  <CardDescription>Connect with fellow students and get real-time updates and tips.</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button asChild variant="outline" className="w-full">
                    <Link href="https://t.me/yegnawrite" target="_blank" rel="noopener noreferrer">
                      Join Telegram Channel
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="w-full py-12 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-start">
              {/* Contact Form */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter">Send Us a Message</h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll respond to your inquiry as soon as possible.
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium">
                        First Name *
                      </label>
                      <Input id="firstName" placeholder="Enter your first name" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium">
                        Last Name *
                      </label>
                      <Input id="lastName" placeholder="Enter your last name" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address *
                    </label>
                    <Input id="email" type="email" placeholder="Enter your email address" required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number (optional)" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject *
                    </label>
                    <Input id="subject" placeholder="What is your inquiry about?" required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Please provide details about your question or how we can help you..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Our Office</p>
                        <p className="text-sm text-muted-foreground">
                          Bole Sub City, Addis Ababa
                          <br />
                          Ethiopia
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Office Hours</p>
                        <p className="text-sm text-muted-foreground">
                          Monday - Friday: 9:00 AM - 6:00 PM
                          <br />
                          Saturday: 10:00 AM - 4:00 PM
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Mail className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Email Support</p>
                        <p className="text-sm text-muted-foreground">
                          General: hello@yegnawrite.com
                          <br />
                          Partnerships: partners@yegnawrite.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ Quick Links */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Quick Help</h3>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Looking for immediate answers? Check out our most common questions:
                    </p>
                    <ul className="space-y-1 text-sm">
                      <li>
                        <Link href="/blog/how-to-apply-scholarships-us" className="text-primary hover:underline">
                          • How to apply for US scholarships
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/preparing-toefl-exam" className="text-primary hover:underline">
                          • TOEFL preparation guide
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/blog/writing-compelling-personal-statement"
                          className="text-primary hover:underline"
                        >
                          • Writing personal statements
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Response Time */}
                <div className="bg-primary/5 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Response Time</h4>
                  <p className="text-sm text-muted-foreground">
                    We typically respond to all inquiries within 24 hours during business days. For urgent matters,
                    please call us directly or reach out via our Telegram channel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section (Placeholder) */}
        <section className="w-full py-12">
          <div className="container px-4 md:px-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-center">Find Us</h2>
              <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center space-y-2">
                  <MapPin className="h-8 w-8 text-muted-foreground mx-auto" />
                  <p className="text-muted-foreground">Interactive Map</p>
                  <p className="text-sm text-muted-foreground">Bole Sub City, Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-muted/50 py-12">
        <div className="container px-4 md:px-6">
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
                <Link href="/blog" className="text-sm hover:underline">
                  Blog
                </Link>
                <Link href="/about" className="text-sm hover:underline">
                  About Us
                </Link>
                <Link href="/contact" className="text-sm hover:underline">
                  Contact
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
                  className="text-muted-foreground hover:text-foreground"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-send"
                  >
                    <path d="m22 2-7 20-4-9-9-4Z" />
                    <path d="M22 2 11 13" />
                  </svg>
                  <span className="sr-only">Telegram</span>
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
