import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, DollarSign, CheckCircle2 } from "lucide-react"

const jobs = [
  {
    company: "Tech Innovators",
    logo: "/tech-company-logo.jpg",
    position: "Desenvolvedora Full Stack",
    location: "São Paulo, SP",
    type: "CLT",
    salary: "R$ 8.000 - R$ 12.000",
    verified: true,
    retention: "92%",
    tags: ["React", "Node.js", "TypeScript"],
  },
  {
    company: "Design Studio",
    logo: "/design-studio-logo.png",
    position: "UX/UI Designer",
    location: "Remoto",
    type: "PJ",
    salary: "R$ 6.000 - R$ 9.000",
    verified: true,
    retention: "88%",
    tags: ["Figma", "Design System", "Pesquisa"],
  },
  {
    company: "Marketing Pro",
    logo: "/marketing-agency-logo.png",
    position: "Analista de Marketing",
    location: "Rio de Janeiro, RJ",
    type: "CLT",
    salary: "R$ 5.000 - R$ 7.000",
    verified: true,
    retention: "85%",
    tags: ["SEO", "Redes Sociais", "Analytics"],
  },
]

export function FeaturedJobs() {
  return (
    <section id="vagas" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Vagas em Destaque</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            Oportunidades verificadas em empresas com excelente histórico de inclusão e permanência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {jobs.map((job, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img
                    src={job.logo || "/placeholder.svg"}
                    alt={job.company}
                    className="h-12 w-12 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-balance">{job.company}</h3>
                    {job.verified && (
                      <div className="flex items-center gap-1 text-xs text-accent">
                        <CheckCircle2 className="h-3 w-3" />
                        Verificada
                      </div>
                    )}
                  </div>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {job.retention} permanência
                </Badge>
              </div>

              <h4 className="font-semibold text-lg mb-3 text-balance">{job.position}</h4>

              <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {job.location}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {job.type}
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  {job.salary}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {job.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Ver Detalhes</Button>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <a href="/vagas">
            <Button size="lg" variant="outline">
              Ver Todas as Vagas
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
