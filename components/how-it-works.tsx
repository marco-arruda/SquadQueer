import { Card } from "@/components/ui/card"
import { Search, CheckCircle2, Briefcase, TrendingUp } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Buscamos as Vagas",
    description:
      "Utilizamos webscraping e parcerias diretas para encontrar oportunidades em empresas de todo o Brasil.",
  },
  {
    icon: CheckCircle2,
    title: "Validamos a Inclusão",
    description:
      "Analisamos políticas internas, dados de diversidade e entrevistamos funcionários trans para validar o ambiente.",
  },
  {
    icon: TrendingUp,
    title: "Verificamos Permanência",
    description: "Acompanhamos taxas de retenção e crescimento de profissionais trans nas empresas ao longo do tempo.",
  },
  {
    icon: Briefcase,
    title: "Conectamos Você",
    description: "Fazemos o match entre seu perfil e as melhores oportunidades, com suporte durante todo o processo.",
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Como Garantimos Vagas de Qualidade</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            Nosso processo rigoroso de validação garante que você encontre empresas que realmente valorizam e mantêm
            profissionais trans.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="p-6 relative hover:shadow-lg transition-shadow">
              <div className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">
                {index + 1}
              </div>
              <div className="flex justify-center mb-4 mt-2">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-accent/20">
                  <step.icon className="h-7 w-7 text-accent" />
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-3 text-center text-balance">{step.title}</h3>
              <p className="text-sm text-muted-foreground text-center text-balance leading-relaxed">
                {step.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
