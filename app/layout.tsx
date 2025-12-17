import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ELOOS - Vagas Inclusivas Validadas",
  description: "Conectando pessoas trans com empresas verdadeiramente inclusivas",
  icons: {
  icon: "/images/squad-queer-logo.png",
  shortcut: "/images/squad-queer-logo.png",
  apple: "/images/squad-queer-logo.png"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
