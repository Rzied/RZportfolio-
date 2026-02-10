'use client'

import { motion } from 'framer-motion'
import { Calendar, Building } from 'lucide-react'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const experiences = [
  {
    title: 'Freelance Consultant',
    company: 'Indépendant',
    period: 'Sep 2023 - Présent',
    location: 'Paris, France',
    type: 'Freelance',
    description: 'Développement web et consulting RPA pour divers clients. Création de solutions sur mesure et optimisation de processus métier.',
    achievements: [
      'Développement de plateforme e-commerce complète (Maison-Janah)',
      'Expérience utilisateur fluide et responsive, pensée mobile-first',
      'Paiements sécurisés et fiables via Stripe',
      'Conseil en architecture logicielle et choix techniques',
      'Formation et accompagnement du client',
    ],
    technologies: ['React.js', 'TypeScript', 'Vite', 'Supabase', 'Stripe', 'Tailwind CSS', 'Git', 'API'],
  },
  {
    title: 'Consultant Web & Développeur Full Stack - RPA',
    company: 'Kaora-Partners',
    period: 'Déc 2021 - Jui 2025',
    location: 'Paris, France',
    type: 'CDI',
    description: 'Consultant et développeur Full Stack intervenant sur des projets à forte complexité technique et métier, mêlant développement web, automatisation de processus (RPA) et solutions low-code. Participation à des projets stratégiques pour des acteurs publics et privés, du MVP à la mise en production, avec des enjeux de performance, de fiabilité et de time-to-market.',
    achievements: [
      'Automatisation de 15+ processus métier',
      'Digitalisation d’un processus métier complexe pour le Ministère de l’Intérieur, incluant la conception backend et le développement d’interfaces web dynamiques : Réduction de 70% du temps de traitement',
      'Développement et évolution d’applications web complexes en environnement contraint et sécurisé',
      'Interventions en urgence sur applications web en production(diagnostic, correction de bugs critiques, stabilisation du service)',
      'Conception et développement d’un MVP sur Microsoft Power Platform ayant conduit à la signature d’un marché avec un client grand compte à l’échelle internationale',
      'Création de Model - Driven Apps sur Power Apps avec modélisation des données dans Dataverse',
      'Mise en place d’automatisations métier via Power Automate',
      'Collaboration étroite avec les équipes métier pour cadrage, priorisation et livraison rapide de valeur',
      'Documentation et formation des équipes métier',
    ],
    technologies: ['UiPath', 'SQL', 'PHP/ Laravel 8', 'Node.js', 'Git', 'Vue.js', 'jQuery', 'JavaScript', 'Power Apps', 'Dataverse', 'Power Automate', 'API', 'dépannage production'],
  },
  {
    title: 'RPA Developer',
    company: 'Devoteam',
    period: 'Jan 2021 - Déc 2021',
    location: 'Paris La Défense, France',
    type: 'CDI',
    description: 'Conception et développement de solutions RPA pour le secteur automobile. Automatisation de processus de gestion et de reporting.',
    achievements: [
      'Automatisation des processus de gestion des stocks',
      'Intégration multi-systèmes (SAP, Excel, Web)',
      'Optimisation des processus de reporting financier',
      'Gestion des incidents et maintenance évolutive',
    ],
    technologies: ['UiPath', 'Automation Anywhere', 'Blue Prism', 'SAP', 'Excel VBA'],
  },
  {
    title: 'Full-Stack Developer',
    company: 'Capgemini',
    period: '2019 - 2020',
    location: 'Paris, France',
    type: 'Alternance',
    description: 'Développement d\'applications web pour des clients dans le secteur bancaire et assurance. Participation à toutes les phases du cycle de développement.',
    achievements: [
      'Développement de features front-end et back-end',
      'Participation aux revues de code et architecture',
      'Rédaction de tests unitaires et d\'intégration',
      'Collaboration agile avec les équipes métier',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Docker', 'Jenkins'],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  return (
    <section id="experience" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Expérience Professionnelle
            </span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Mon parcours professionnel dans le développement web et l'automatisation RPA
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-purple-600 transform md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.title}-${exp.company}-${index}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative mb-12"
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform -translate-x-1/2 mt-6 z-10" />

                  {/* Date - Desktop */}
                  <div className="hidden md:flex md:w-1/2 md:flex-row-reverse md:items-center md:justify-end">
                    <span className="text-sm font-medium text-foreground/60 bg-muted px-4 py-2 rounded-full">
                      {exp.period}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="ml-16 md:ml-0 md:w-1/2">
                    <div
                      className={`bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer ${expandedIndex === index ? 'ring-2 ring-primary/50' : ''}`}
                      onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    >
                      {/* Date - Mobile */}
                      <div className="flex items-center gap-2 mb-3 md:hidden">
                        <Calendar size={16} className="text-primary" />
                        <span className="text-sm text-foreground/60">{exp.period}</span>
                      </div>

                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                          <div className="flex items-center gap-2 text-foreground/60">
                            <Building size={16} />
                            <span className="text-sm">{exp.company}</span>
                          </div>
                        </div>
                        <span className="hidden md:inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                          {exp.type}
                        </span>
                      </div>

                      <p className="text-foreground/70 text-sm mb-4">{exp.description}</p>

                      {expandedIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="border-t border-border/50 pt-4 space-y-4"
                        >
                          <div>
                            <h4 className="font-medium mb-2 text-sm">Réalisations clés :</h4>
                            <ul className="space-y-2">
                              {exp.achievements.map((achievement) => (
                                <li key={achievement} className="flex items-start gap-2 text-sm text-foreground/70">
                                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-medium mb-2 text-sm">Technologies :</h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2 py-1 bg-muted rounded-full text-xs"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}

                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50">
                        <span className="text-xs text-foreground/50">{exp.location}</span>
                        <span className="text-xs text-primary">
                          {expandedIndex === index ? 'Moins de détails' : 'Plus de détails'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
