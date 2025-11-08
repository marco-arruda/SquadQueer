import { Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/squad-queer-logo.png"
                alt="Squad Queer"
                width={40}
                height={40}
                className="hover:scale-110 transition-transform duration-300"
              />
              <span className="font-bold text-lg bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Squad Queer
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Conectando pessoas trans com oportunidades reais em empresas verdadeiramente inclusivas.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Plataforma</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/como-funciona" className="hover:text-foreground transition-colors">
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link href="/vagas" className="hover:text-foreground transition-colors">
                  Vagas
                </Link>
              </li>
              <li>
                <Link href="/para-empresas" className="hover:text-foreground transition-colors">
                  Para Empresas
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/faq" className="hover:text-foreground transition-colors">
                  Central de Ajuda
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-foreground transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <a href="mailto:report@squadqueer.com" className="hover:text-foreground transition-colors">
                  Denunciar
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 Squad Queer. Todos os direitos reservados.</p>
          <p className="flex items-center gap-2">
            Feito com <Heart className="h-4 w-4 text-red-500 fill-red-500" /> para a comunidade trans
          </p>
        </div>
      </div>
    </footer>
  )
}
