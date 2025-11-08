"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MessageSquare } from "lucide-react"

export default function Contato() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="py-20 px-4">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Entre em Contato
            </h1>
            <p className="text-xl text-muted-foreground text-center mb-16">Tem dúvidas? Queremos ouvir você!</p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <Mail className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground mb-4">contato@squadqueer.com</p>
                <Button variant="outline">Enviar Email</Button>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <MessageSquare className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">Chat</h3>
                <p className="text-muted-foreground mb-4">Fale com nossa equipe</p>
                <Button variant="outline">Abrir Chat</Button>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
