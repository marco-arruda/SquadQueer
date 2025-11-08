"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"

export default function Sobre() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Sobre Squad Queer
            </h1>

            <div className="max-w-3xl mx-auto space-y-8">
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-4">Nossa Missão</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Conectar pessoas trans com oportunidades reais em empresas genuinamente comprometidas com inclusão.
                  Acreditamos que o trabalho deve ser um espaço seguro, acolhedor e de desenvolvimento para todos.
                </p>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-4">Nossa Abordagem</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Diferente de outras plataformas, validamos rigorosamente cada empresa através de webscraping de dados
                  públicos, análise de permanência de funcionários trans e pesquisa qualitativa. Isso garante que as
                  oportunidades listadas sejam genuinamente inclusivas.
                </p>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-4">Por Que Squad Queer?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Squad significa comunidade, equipe, rede. Somos mais que uma plataforma de vagas - somos uma
                  comunidade que apoia, valida e celebra a presença de pessoas trans no mercado de trabalho. Queer é
                  nossa identidade, nossa força e nosso compromisso com a autenticidade.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
