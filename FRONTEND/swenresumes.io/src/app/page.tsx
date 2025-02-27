import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, FileText, CheckCircle, Download, Users, Zap, Github, Linkedin, ArrowRight, Menu } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Code className="h-6 w-6" />
            <span>SWEResumes.io</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium transition-colors hover:text-primary">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium transition-colors hover:text-primary">
              How It Works
            </Link>
            <Link href="#testimonials" className="text-sm font-medium transition-colors hover:text-primary">
              Testimonials
            </Link>
            <Link href="#pricing" className="text-sm font-medium transition-colors hover:text-primary">
              Pricing
            </Link>
          </nav>
          <div className="hidden md:flex gap-4">
            <Button variant="outline" asChild>
              <Link href="/login">Log In</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Sign Up Free</Link>
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    LaTeX Resumes for Software Engineers
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Create professional, ATS-friendly resumes with our LaTeX templates designed specifically for
                    software engineers.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/signup">Get Started Free</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="#templates">View Templates</Link>
                  </Button>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>No credit card required</span>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg blur-3xl" />
                <Image
                  src="/placeholder.svg?height=550&width=550"
                  width={550}
                  height={550}
                  alt="Resume preview"
                  className="relative rounded-lg border bg-background shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Why Choose Our LaTeX Resume Builder?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform is designed specifically for software engineers who want to stand out with professional,
                  clean, and ATS-friendly resumes.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <FileText className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>LaTeX-Powered Templates</CardTitle>
                  <CardDescription>
                    Professional templates designed specifically for software engineers using LaTeX for perfect
                    formatting.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Zap className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>ATS-Optimized</CardTitle>
                  <CardDescription>
                    All templates are tested and optimized to pass through Applicant Tracking Systems with ease.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Download className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Multiple Export Formats</CardTitle>
                  <CardDescription>
                    Export your resume as PDF, LaTeX source, or even HTML for maximum flexibility.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Code className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Code Snippet Formatting</CardTitle>
                  <CardDescription>
                    Highlight your technical skills with properly formatted code snippets and syntax highlighting.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Github className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>GitHub Integration</CardTitle>
                  <CardDescription>
                    Import your projects and contributions directly from GitHub to showcase your work.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Linkedin className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>LinkedIn Sync</CardTitle>
                  <CardDescription>
                    Sync with your LinkedIn profile to keep your resume and professional profile consistent.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Process
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">How It Works</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Create your professional software engineer resume in just a few simple steps.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  1
                </div>
                <h3 className="mt-4 text-xl font-bold">Choose a Template</h3>
                <p className="mt-2 text-muted-foreground">
                  Select from our collection of LaTeX templates designed specifically for software engineers.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  2
                </div>
                <h3 className="mt-4 text-xl font-bold">Fill Your Details</h3>
                <p className="mt-2 text-muted-foreground">
                  Add your experience, skills, projects, and education using our intuitive editor.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  3
                </div>
                <h3 className="mt-4 text-xl font-bold">Export & Apply</h3>
                <p className="mt-2 text-muted-foreground">
                  Download your professionally formatted resume as PDF and start applying to your dream jobs.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <Button size="lg" asChild>
                <Link href="/signup">
                  Create Your Resume Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Software Engineers Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from engineers who landed their dream jobs using our LaTeX resume builder.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      width={60}
                      height={60}
                      alt="User avatar"
                      className="rounded-full"
                    />
                    <div>
                      <p className="text-sm leading-loose">
                        &apos;After switching to SWEResumes.io, I received callbacks from 80% of the companies I applied to,
                        including FAANG. The LaTeX formatting made my resume stand out while remaining ATS-friendly.&apos;
                      </p>
                      <div className="mt-4">
                        <p className="font-semibold">Sarah Chen</p>
                        <p className="text-sm text-muted-foreground">Senior Software Engineer at Google</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      width={60}
                      height={60}
                      alt="User avatar"
                      className="rounded-full"
                    />
                    <div>
                      <p className="text-sm leading-loose">
                        &apos;As a bootcamp graduate, I needed a resume that would help me compete with CS degree holders.
                        This platform helped me create a professional resume that highlighted my projects and skills
                        perfectly.&apos;
                      </p>
                      <div className="mt-4">
                        <p className="font-semibold">Michael Johnson</p>
                        <p className="text-sm text-muted-foreground">Frontend Developer at Stripe</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      width={60}
                      height={60}
                      alt="User avatar"
                      className="rounded-full"
                    />
                    <div>
                      <p className="text-sm leading-loose">
                        &apos;The GitHub integration is a game-changer. It automatically pulled in my projects and
                        contributions, saving me hours of manual work while making my resume more impressive.&apos;
                      </p>
                      <div className="mt-4">
                        <p className="font-semibold">Priya Patel</p>
                        <p className="text-sm text-muted-foreground">Backend Engineer at Airbnb</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      width={60}
                      height={60}
                      alt="User avatar"
                      className="rounded-full"
                    />
                    <div>
                      <p className="text-sm leading-loose">
                        &apos;I&apos;ve tried many resume builders, but this is the only one that truly understands what tech
                        recruiters are looking for. The LaTeX templates are clean, professional, and perfectly
                        formatted.&apos;
                      </p>
                      <div className="mt-4">
                        <p className="font-semibold">David Kim</p>
                        <p className="text-sm text-muted-foreground">Full Stack Developer at Netflix</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to Create Your Professional Resume?
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of software engineers who have landed their dream jobs with our LaTeX resume builder.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link href="/signup">Get Started Free</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#templates">View Templates</Link>
                </Button>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Join 50,000+ software engineers</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2 font-semibold">
            <Code className="h-5 w-5" />
            <span>SWEResumes.io</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SWEResumes.io. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

