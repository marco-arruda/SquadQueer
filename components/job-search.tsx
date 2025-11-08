"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, ExternalLink, Loader2, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface Job {
  titulo: string
  empresa: string
  localizacao: string
  link: string
  data_postagem: string
}

export function JobSearch() {
  const [query, setQuery] = useState("")
  const [location, setLocation] = useState("")
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [searched, setSearched] = useState(false)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)
    setSearched(true)

    try {
      const response = await fetch("/api/vagas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query,
          location,
          num_pages: 1,
        }),
      })

      if (!response.ok) {
        throw new Error("Erro ao buscar vagas")
      }

      const data = await response.json()
      setJobs(Array.isArray(data) ? data : data.jobs || [])
    } catch (err) {
      setError("Erro ao buscar vagas. Por favor, tente novamente.")
      console.error("[v0] Erro:", err)
      setJobs([])
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString)
      return date.toLocaleDateString("pt-BR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    } catch {
      return dateString
    }
  }

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header da seção */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 rainbow-text text-balance">Buscar Vagas Inclusivas</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            Encontre oportunidades verificadas em empresas com histórico comprovado de inclusão e permanência para
            pessoas trans.
          </p>
        </div>

        {/* Formulário de busca */}
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-12">
          <div className="flex flex-col gap-4 sm:flex-row">
            <Input
              placeholder="Cargo, empresa ou palavra-chave"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              disabled={loading}
              className="flex-1"
            />
            <Input
              placeholder="Cidade, Estado, País"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              disabled={loading}
              className="flex-1"
            />
            <Button
              type="submit"
              disabled={loading || !query || !location}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Buscando...
                </>
              ) : (
                "Buscar"
              )}
            </Button>
          </div>
        </form>

        {/* Erro */}
        {error && (
          <Alert variant="destructive" className="max-w-2xl mx-auto mb-8">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {/* Resultados */}
        {searched && !loading && (
          <div>
            {jobs.length > 0 ? (
              <div>
                <p className="text-center text-muted-foreground mb-8">
                  Encontradas <span className="font-semibold text-foreground">{jobs.length}</span> vagas para "{query}"
                  em {location}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {jobs.map((job, index) => (
                    <Card
                      key={index}
                      className="p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-primary"
                    >
                      <div className="space-y-3">
                        <div>
                          <Badge className="mb-2 bg-primary/20 text-primary hover:bg-primary/30">{job.empresa}</Badge>
                          <h3 className="text-lg font-semibold text-balance">{job.titulo}</h3>
                        </div>

                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 flex-shrink-0" />
                            <span>{job.localizacao}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 flex-shrink-0" />
                            <span>{formatDate(job.data_postagem)}</span>
                          </div>
                        </div>

                        <a href={job.link} target="_blank" rel="noopener noreferrer" className="inline-block">
                          <Button
                            variant="outline"
                            className="w-full group border-primary text-primary hover:bg-primary/10 bg-transparent"
                          >
                            Ver Vaga
                            <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </a>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center">
                <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                <p className="text-muted-foreground mb-2">Nenhuma vaga encontrada</p>
                <p className="text-sm text-muted-foreground">Tente modificar seus critérios de busca</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
