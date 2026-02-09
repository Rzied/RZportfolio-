'use client'

import { motion } from 'framer-motion'
import { Code2, Bot, Rocket, Users } from 'lucide-react'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const highlights = [
  {
    icon: Code2,
    title: 'Full-Stack Developer',
    description: 'Expertise en JavaScript/TypeScript avec React, Next.js et Node.js',
  },
  {
    icon: Bot,
    title: 'Consultant RPA',
    description: 'Spécialiste en automatisation avec UiPath et Automation Anywhere',
  },
  {
    icon: Rocket,
    title: '5+ Ans d\'Expérience',
    description: 'Projets réussis dans divers secteurs : immobilier, bancaire, automobile',
  },
  {
    icon: Users,
    title: 'Approche Agile',
    description: 'Méthodologie Scrum et collaboration efficace avec les équipes',
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              À Propos de Moi
            </span>
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Développeur Full-Stack et Consultant RPA basé à Paris, je suis passionné par la création
            de solutions web innovantes et l'automatisation de processus métier. Avec plus de 5 ans
            d'expérience, j'ai eu l'opportunité de travailler sur des projets variés allant de
            plateformes immobilières à des systèmes d'automatisation complexes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
              >
                <item.icon className="text-white" size={24} />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-foreground/60 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-purple-600/10 rounded-3xl border border-primary/20"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-2">
                5+
              </div>
              <div className="text-foreground/60">Années d'expérience</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-2">
                15+
              </div>
              <div className="text-foreground/60">Projets réalisés</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-2">
                100%
              </div>
              <div className="text-foreground/60">Satisfaction client</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
