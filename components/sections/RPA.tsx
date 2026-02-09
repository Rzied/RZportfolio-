'use client'

import { motion } from 'framer-motion'
import { Bot, Workflow, Zap, TrendingUp, Shield, Clock } from 'lucide-react'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const rpaServices = [
  {
    icon: Workflow,
    title: 'Automatisation des Processus',
    description: 'Automatisation des processus métier répétitifs pour gagner du temps et réduire les erreurs',
  },
  {
    icon: Zap,
    title: 'Développement de Bots',
    description: 'Création de robots logiciels intelligents avec UiPath et Power automate',
  },
  {
    icon: TrendingUp,
    title: 'Optimisation & Performance',
    description: 'Analyse et optimisation des processus existants pour maximiser l\'efficacité',
  },
  {
    icon: Shield,
    title: 'Gestion des Risques',
    description: 'Identification et mitigation des risques liés à l\'automatisation',
  },
]

const rpaTech = [
  { name: 'Power Automate', level: 90 },
  { name: 'Power Apps', level: 80 },
  { name: 'UiPath', level: 80 },
  { name: 'Python / Scripting', level: 80 },
  { name: 'SQL / PL-SQL', level: 85 },
]

const benefits = [
  { icon: Clock, value: '70%', label: 'Réduction du temps de traitement' },
  { icon: TrendingUp, value: '3x', label: 'Augmentation de la productivité' },
  { icon: Shield, value: '99%', label: 'Précision des tâches automatisées' },
  { icon: Zap, value: '24/7', label: 'Disponibilité des processus' },
]

export default function RPA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="rpa" className="py-20 md:py-32 bg-gradient-to-b from-muted/30 to-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Bot size={20} className="text-primary" />
            <span className="text-primary font-medium">Consulting RPA</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Expertise en Automatisation
            </span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-3xl mx-auto">
            Consultant RPA expérimenté, je vous aide à automatiser vos processus métier pour
            gagner en efficacité et réduire les coûts. Spécialisé en UiPath et Microsoft Power Automate / Power Apps,
            j'interviens sur des projets d'automatisation dans divers secteurs.
          </p>
        </motion.div>

        {/* Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {rpaServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-foreground/60 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-card rounded-2xl p-8 border border-border/50 mb-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Technologies Maîtrisées</h3>
          <div className="flex flex-wrap justify-between gap-6">
            {rpaTech.map((tech) => (
              <div key={tech.name} className="text-center">
                <div className="relative w-20 h-20 mx-auto mb-3">
                  <svg className="w-full h-full -rotate-90">
                    <circle
                      cx="40"
                      cy="40"
                      r="35"
                      stroke="hsl(var(--muted))"
                      strokeWidth="6"
                      fill="none"
                    />
                    <motion.circle
                      cx="40"
                      cy="40"
                      r="35"
                      stroke="url(#gradient)"
                      strokeWidth="6"
                      fill="none"
                      strokeDasharray={220}
                      strokeDashoffset={220 - (220 * tech.level) / 100}
                      strokeLinecap="round"
                      initial={{ strokeDashoffset: 220 }}
                      animate={isInView ? { strokeDashoffset: 220 - (220 * tech.level) / 100 } : {}}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" />
                        <stop offset="100%" stopColor="hsl(var(--purple-600))" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-bold">{tech.level}%</span>
                  </div>
                </div>
                <span className="text-sm font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {benefits.map((benefit) => (
            <div
              key={benefit.label}
              className="bg-gradient-to-br from-primary/10 to-purple-600/10 rounded-2xl p-6 text-center border border-primary/20"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center">
                <benefit.icon className="text-white" size={24} />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-1">
                {benefit.value}
              </div>
              <div className="text-sm text-foreground/60">{benefit.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
          >
            <Bot size={20} />
            Discutons de votre projet d'automatisation
          </a>
        </motion.div>
      </div>
    </section>
  )
}
