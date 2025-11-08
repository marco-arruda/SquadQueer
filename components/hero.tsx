import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Sparkles } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/10 animate-gradient" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center animate-fade-in-up">
          <Badge variant="secondary" className="mb-6 gap-2 animate-rainbow-pulse border-primary/20">
            <Sparkles className="h-3 w-3 text-primary" />
            Vagas 100% Validadas
          </Badge>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance mb-6">
            Oportunidades reais em empresas{" "}
            <span className="rainbow-text animate-gradient">verdadeiramente inclusivas</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground text-balance mb-10 max-w-2xl mx-auto leading-relaxed">
            Conectamos pessoas trans com empresas que não apenas contratam, mas garantem permanência, crescimento e um
            ambiente seguro de trabalho.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/vagas">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 text-base px-8 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
              >
                <Search className="h-5 w-5" />
                Encontrar Vagas
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 bg-transparent border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:scale-105"
            >
              Sou Empresa
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2 transition-transform duration-200 hover:scale-110">
              <div className="h-2 w-2 rounded-full bg-[var(--rainbow-red)] animate-pulse" />
              <span>Empresas verificadas</span>
            </div>
            <div className="flex items-center gap-2 transition-transform duration-200 hover:scale-110">
              <div
                className="h-2 w-2 rounded-full bg-[var(--rainbow-green)] animate-pulse"
                style={{ animationDelay: "0.3s" }}
              />
              <span>Dados de permanência</span>
            </div>
            <div className="flex items-center gap-2 transition-transform duration-200 hover:scale-110">
              <div
                className="h-2 w-2 rounded-full bg-[var(--rainbow-purple)] animate-pulse"
                style={{ animationDelay: "0.6s" }}
              />
              <span>100% gratuito</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
