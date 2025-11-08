import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JobSearch } from "@/components/job-search"

export default function VagasPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <JobSearch />
      <Footer />
    </main>
  )
}
