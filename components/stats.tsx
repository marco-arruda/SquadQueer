import { Card } from "@/components/ui/card"
import { TrendingUp, Users, Building2, Award } from "lucide-react"

const stats = [
  {
    icon: Building2,
    value: "150+",
    label: "Empresas Verificadas",
    description: "Com políticas inclusivas comprovadas",
  },
  {
    icon: Users,
    value: "2.500+",
    label: "Pessoas Conectadas",
    description: "Encontraram oportunidades reais",
  },
  {
    icon: TrendingUp,
    value: "87%",
    label: "Taxa de Permanência",
    description: "Após 12 meses de contratação",
  },
  {
    icon: Award,
    value: "4.8/5",
    label: "Satisfação",
    description: "Avaliação média das empresas",
  },
]

export function Stats() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground text-balance">{stat.description}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
