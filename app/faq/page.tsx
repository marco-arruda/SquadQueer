"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"

export default function FAQ() {
  const faqs = [
    {
      question: "Como a Squad Queer valida as empresas?",
      answer:
        "Usamos webscraping de dados públicos, analisamos a permanência de funcionários trans e realizamos pesquisa qualitativa para garantir inclusão real.",
    },
    {
      question: "É gratuito para candidatos?",
      answer: "Sim! A plataforma é completamente gratuita para pessoas trans buscarem oportunidades.",
    },
    {
      question: "Quais são os critérios de inclusão das empresas?",
      answer:
        "As empresas devem demonstrar políticas inclusivas reais, ter registro de permanência de funcionários trans e estar comprometidas com a inclusão.",
    },
    {
      question: "Como funciona o match?",
      answer:
        "Após criar seu perfil, nosso algoritmo conecta você com vagas em empresas que combinam com suas habilidades e valores.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Perguntas Frequentes
            </h1>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
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
