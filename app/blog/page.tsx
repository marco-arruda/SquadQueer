"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"

export default function Blog() {
  const posts = [
    {
      title: "Inclusão Trans: Além da Postura",
      excerpt: "O que realmente significa para uma empresa ser inclusiva com pessoas trans",
      date: "Dezembro 2024",
    },
    {
      title: "Histórias de Sucesso",
      excerpt: "Conheça profissionais trans que transformaram suas carreiras",
      date: "Novembro 2024",
    },
    {
      title: "Guia de Direitos Trabalhistas",
      excerpt: "Saiba mais sobre seus direitos como pessoa trans no mercado de trabalho",
      date: "Outubro 2024",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Blog
            </h1>
            <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-16">
              Histórias, artigos e recursos sobre inclusão e oportunidades
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <p className="text-sm text-primary mb-2">{post.date}</p>
                  <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <a href="#" className="text-primary font-semibold hover:underline">
                    Ler mais →
                  </a>
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
