"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"

export default function ComoFunciona() {
  const steps = [
    {
      title: "Validação de Empresas",
      description:
        "Usamos webscraping avançado e pesquisa qualitativa para validar o compromisso de empresas com inclusão trans",
      icon: "🔍",
    },
    {
      title: "Análise de Permanência",
      description:
        "Monitoramos dados de permanência de funcionários trans para garantir inclusão real, não apenas superficial",
      icon: "📊",
    },
    {
      title: "Match Inteligente",
      description:
        "Conectamos pessoas trans com vagas em empresas verdadeiramente inclusivas baseado em perfil e experiência",
      icon: "🎯",
    },
    {
      title: "Suporte Contínuo",
      description: "Oferecemos acompanhamento pós-contratação para garantir uma experiência positiva e sustentável",
      icon: "🤝",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Como Funciona
            </h1>
            <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-16">
              Entenda nosso processo rigoroso de validação e match de oportunidades
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {steps.map((step, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
