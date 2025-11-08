import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { Stats } from "@/components/stats"
import { FeaturedJobs } from "@/components/featured-jobs"
import { Validation } from "@/components/validation"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <HowItWorks />
      <Validation />
      <FeaturedJobs />
      <CTA />
      <Footer />
    </main>
  )
}
