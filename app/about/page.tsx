import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function About() {
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
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary text-primary">
              About Us
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
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
          <div className="container px-4 md:px-6">
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
                <div className="relative w-full max-w-md aspect-[4/3] overflow-hidden rounded-xl bg-muted">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    Our Journey Image
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Meet Our Team</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground">
                  Our diverse team of writers, advisors, and mentors are all united by one mission: helping Ethiopian
                  students succeed globally.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Team Member 1 */}
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="relative w-32 h-32 overflow-hidden rounded-full bg-muted">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
                    Photo
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Abebe Kebede</h3>
                  <p className="text-sm text-muted-foreground">Co-Founder & Lead Writer</p>
                  <p className="text-sm text-muted-foreground">
                    Scholarship recipient at Harvard University. Specializes in US university applications and
                    scholarship strategies.
                  </p>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="relative w-32 h-32 overflow-hidden rounded-full bg-muted">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
                    Photo
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Sara Haile</h3>
                  <p className="text-sm text-muted-foreground">Co-Founder & Content Strategist</p>
                  <p className="text-sm text-muted-foreground">
                    Rhodes Scholar at Oxford University. Expert in personal statement writing and European university
                    applications.
                  </p>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="relative w-32 h-32 overflow-hidden rounded-full bg-muted">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
                    Photo
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Kidist Alemu</h3>
                  <p className="text-sm text-muted-foreground">Senior Writer & Test Prep Specialist</p>
                  <p className="text-sm text-muted-foreground">
                    TOEFL/IELTS expert with 5+ years of experience helping students achieve high scores for
                    international admissions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Our Mission</h2>
                <p className="text-muted-foreground">
                  To democratize access to global educational opportunities for Ethiopian students by providing
                  comprehensive, actionable guidance and building a supportive community that empowers every student to
                  pursue their dreams, regardless of their background or circumstances.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Our Vision</h2>
                <p className="text-muted-foreground">
                  A future where every talented Ethiopian student has the knowledge, resources, and support needed to
                  access world-class education and contribute to global progress while maintaining strong connections to
                  their homeland and culture.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Get in Touch</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground">
                  Have questions or want to share your success story? We'd love to hear from you.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>hello@yegnawrite.com</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>+251 911 123 456</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Addis Ababa, Ethiopia</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button variant="outline" asChild>
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
