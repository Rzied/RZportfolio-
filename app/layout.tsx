import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/providers/ThemeProvider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Zied RJEB | Full-Stack Developer & RPA Consultant",
  description: "Portfolio de Zied RJEB, développeur Full-Stack et consultant RPA. Expert en React, Next.js, Node.js, UiPath et Automation Anywhere. Basé à Paris.",
  keywords: ["Full-Stack Developer", "RPA Consultant", "React", "Next.js", "TypeScript", "UiPath", "Automation Anywhere", "Paris"],
  authors: [{ name: "Zied RJEB" }],
  openGraph: {
    title: "Zied RJEB | Full-Stack Developer & RPA Consultant",
    description: "Portfolio de Zied RJEB, développeur Full-Stack et consultant RPA.",
    type: "website",
    locale: "fr_FR",
    url: "https://ziedrjeb.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zied RJEB | Full-Stack Developer & RPA Consultant",
    description: "Portfolio de Zied RJEB, développeur Full-Stack et consultant RPA.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
