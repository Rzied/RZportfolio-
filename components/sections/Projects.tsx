'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  {
    title: 'Maison Janah',
    description: 'Site e-commerce développé pour une marque de création de bougies parfumées avec personnalisation complète, intégrant un design épuré, une navigation optimisée et des animations modernes pour une expérience utilisateur premium.',
    image: '/projects/maison-janah.jpg',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn-ui', 'Radix UI', 'Supabase', 'Stripe'],
    github: 'https://github.com/ziedrjeb/maison-janah',
    demo: 'https://maison-janah.fr',
    featured: true,
    highlights: [
      'Frontend rapide et performant avec React 18, Vite et TypeScript',
      'UI premium et accessible grâce à Tailwind CSS, shadcn/ui et Radix UI',
      'Backend serverless scalable basé sur Supabase (auth, DB, storage)',
      'Paiements sécurisés et fiables via Stripe',
      'Expérience utilisateur fluide et responsive, pensée mobile-first',
    ],
  },
  {
    title: 'Dashboard Analytics',
    description: 'Tableau de bord interactif pour la visualisation de données en temps réel avec graphiques dynamiques et export de rapport.',
    image: '/projects/dashboard.jpg',
    tags: ['React', 'TypeScript', 'Chart.js', 'Node.js', 'MongoDB'],
    github: 'https://github.com/ziedrjeb/dashboard-analytics',
    featured: false,
  },
  {
    title: 'E-Commerce Platform',
    description: 'Plateforme e-commerce complète avec gestion des produits, panier, paiement Stripe et gestion des commandes.',
    image: '/projects/ecommerce.jpg',
    tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind', 'Prisma'],
    github: 'https://github.com/ziedrjeb/ecommerce-platform',
    featured: false,
  },
  {
    title: 'Task Management App',
    description: 'Application de gestion de tâches collaborative avec fonctionnalités de kanban, notifications et synchronisation en temps réel.',
    image: '/projects/taskapp.jpg',
    tags: ['React', 'Redux', 'Firebase', 'Tailwind'],
    github: 'https://github.com/ziedrjeb/task-management',
    featured: false,
  },
  {
    title: 'API RESTful',
    description: 'API RESTful robuste avec documentation Swagger, authentification JWT, tests unitaires et CI/CD.',
    image: '/projects/api.jpg',
    tags: ['Node.js', 'Express', 'JWT', 'Jest', 'Docker'],
    github: 'https://github.com/ziedrjeb/rest-api',
    featured: false,
  },
  {
    title: 'Portfolio V1',
    description: 'Première version de portfolio personnel avec animations et design moderne.',
    image: '/projects/portfolio-v1.jpg',
    tags: ['React', 'Framer Motion', 'Sass'],
    github: 'https://github.com/ziedrjeb/portfolio-v1',
    featured: false,
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Mes Projets
            </span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Une sélection de mes projets les plus significatifs
          </p>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 p-6 bg-gradient-to-br from-primary/10 via-purple-600/10 to-pink-600/10 rounded-3xl border-2 border-primary/30 relative overflow-hidden"
        >
          <div className="absolute top-4 right-4 px-4 py-1 bg-gradient-to-r from-primary to-purple-600 text-white text-sm font-semibold rounded-full">
            Projet Phare
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Project Image - Compact */}
            <div className="lg:col-span-1">
              <a
                href={projects[0].demo}
                target="_blank"
                rel="noopener noreferrer"
                className="block group rounded-xl overflow-hidden border border-border/50 hover:border-primary/50 transition-colors"
              >
                <img
                  src="/projects/maison-janah.png"
                  alt="Maison Janah"
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </a>
            </div>

            {/* Project Details */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Maison Janah
              </h3>
              <p className="text-foreground/70 mb-4 text-sm leading-relaxed">
                {projects[0].description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {projects[0].tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-card rounded-full text-xs border border-border/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mb-4">
                <a
                  href={projects[0].demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary to-purple-600 text-white rounded-full text-sm font-medium hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
                >
                  <ExternalLink size={16} />
                  Voir le site
                </a>
                <a
                  href={projects[0].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-primary text-primary rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Github size={16} />
                  Code source
                </a>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-foreground/80 text-sm">Points forts :</h4>
                <ul className="space-y-2">
                  {projects[0].highlights!.map((highlight) => (
                    <motion.li
                      key={highlight}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + projects[0].highlights!.indexOf(highlight) * 0.1 }}
                      className="flex items-start gap-2 text-sm"
                    >
                      <span className="w-1.5 h-1.5 mt-1.5 bg-gradient-to-r from-primary to-purple-600 rounded-full shrink-0" />
                      <span className="text-foreground/70">{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(1).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-purple-600/20 flex items-center justify-center">
                <span className="text-6xl opacity-20 group-hover:opacity-40 transition-opacity">
                  🚀
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/60 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-muted rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 bg-muted rounded-full text-xs">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-purple-600 transition-colors text-sm font-medium"
                >
                  <Github size={16} />
                  Voir sur GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
