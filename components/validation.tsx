import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Database, Users2, BarChart3 } from "lucide-react"

const validationPoints = [
  {
    icon: Shield,
    title: "Políticas Verificadas",
    description: "Analisamos documentos internos, códigos de conduta e políticas de diversidade de cada empresa.",
  },
  {
    icon: Users2,
    title: "Entrevistas Reais",
    description: "Conversamos com funcionários trans atuais e ex-funcionários para entender a cultura real da empresa.",
  },
  {
    icon: Database,
    title: "Dados de Permanência",
    description:
      "Coletamos e analisamos dados sobre tempo de permanência e crescimento de carreira de profissionais trans.",
  },
  {
    icon: BarChart3,
    title: "Monitoramento Contínuo",
    description: "Atualizamos constantemente nossas avaliações com feedback da comunidade e novos dados.",
  },
]

export function Validation() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="secondary" className="mb-4">
              Nossa Metodologia
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Validação rigorosa para sua segurança</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Não basta apenas dizer que é inclusivo. Usamos tecnologia e pesquisa humana para garantir que cada empresa
              em nossa plataforma oferece um ambiente verdadeiramente seguro e com oportunidades reais de crescimento.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className="gap-2">
                <Database className="h-3 w-3" />
                Webscraping Automatizado
              </Badge>
              <Badge variant="outline" className="gap-2">
                <Users2 className="h-3 w-3" />
                Pesquisa Qualitativa
              </Badge>
              <Badge variant="outline" className="gap-2">
                <BarChart3 className="h-3 w-3" />
                Análise de Dados
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {validationPoints.map((point, index) => (
              <Card key={index} className="p-5 hover:shadow-lg transition-shadow">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <point.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-2 text-balance">{point.title}</h3>
                <p className="text-sm text-muted-foreground text-balance leading-relaxed">{point.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
