"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Briefcase, TrendingUp, Users } from "lucide-react"

export default function ParaEmpresas() {
  const benefits = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Acesso a Talento Qualificado",
      description: "Conecte-se com profissionais trans altamente qualificados e motivados",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Melhore Sua Reputação ESG",
      description: "Demonstre compromisso real com inclusão e diversidade",
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Suporte Especializado",
      description: "Orientação em políticas inclusivas e boas práticas",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Para Empresas
            </h1>
            <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-16">
              Construa uma empresa verdadeiramente inclusiva com a Squad Queer
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow text-center">
                  <div className="flex justify-center mb-4 text-primary">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 text-white hover:opacity-90 transition-opacity"
              >
                Registre Sua Empresa
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
