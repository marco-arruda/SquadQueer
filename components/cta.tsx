import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Building2 } from "lucide-react"

export function CTA() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="p-8 md:p-10 bg-primary text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Pronta para encontrar sua próxima oportunidade?
            </h2>
            <p className="text-lg mb-8 opacity-90 leading-relaxed text-balance">
              Cadastre-se gratuitamente e tenha acesso a vagas exclusivas em empresas verdadeiramente inclusivas.
            </p>
            <Button size="lg" variant="secondary" className="gap-2">
              Criar Conta Grátis
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Card>

          <Card className="p-8 md:p-10" id="empresas">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20">
                <Building2 className="h-6 w-6 text-accent" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-balance">Para Empresas</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-balance">
              Quer fazer parte da nossa rede de empresas verificadas? Entre em contato para conhecer nosso processo de
              validação.
            </p>
            <Button size="lg" variant="outline" className="gap-2 bg-transparent">
              Falar com Especialista
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  )
}
