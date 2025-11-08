import { Button } from "@/components/ui/button"
import { Menu, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex h-20 items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/">
            <Image
              src="/images/squad-queer-logo.png"
              alt="Squad Queer"
              width={180}
              height={50}
              className="h-12 w-auto transition-transform duration-300 hover:scale-105 cursor-pointer"
              priority
            />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/como-funciona"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            Como Funciona
          </Link>
          <Link
            href="/vagas"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            Vagas
          </Link>
          <Link
            href="/para-empresas"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            Para Empresas
          </Link>
          <Link
            href="/sobre"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            Sobre
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            className="hidden md:flex items-center gap-2 hover:text-primary transition-all duration-200"
          >
            <User className="h-4 w-4" />
            Entrar
          </Button>
          <Button
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 hover:scale-105"
          >
            Cadastrar
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
