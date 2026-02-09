'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skillCategories = [
  {
    title: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Redux / Zustand', level: 85 },
      { name: 'HTML5 / CSS3', level: 95 },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js / Express', level: 90 },
      { name: 'NestJS', level: 80 },
      { name: 'PostgreSQL / MongoDB', level: 85 },
      { name: 'REST APIs / GraphQL', level: 90 },
      { name: 'Docker / CI/CD', level: 80 },
    ],
  },
  {
    title: 'RPA & Automation',
    icon: '🤖',
    skills: [
      { name: 'UiPath', level: 90 },
      { name: 'Automation Anywhere', level: 85 },
      { name: 'Blue Prism', level: 75 },
      { name: 'Python Scripting', level: 80 },
      { name: 'SQL / PL-SQL', level: 85 },
    ],
  },
  {
    title: 'Tools & Methods',
    icon: '🛠️',
    skills: [
      { name: 'Git / GitHub', level: 95 },
      { name: 'Agile / Scrum', level: 90 },
      { name: 'Jira / Confluence', level: 85 },
      { name: 'VS Code / WebStorm', level: 95 },
      { name: 'Figma / Design', level: 75 },
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-20 md:py-32 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Compétences
            </span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Un éventail de compétences couvrant le développement web moderne et l'automatisation RPA
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-foreground/60">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + index * 0.05 }}
                        className="h-full bg-gradient-to-r from-primary to-purple-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech logos strip */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-4 opacity-70"
        >
          {['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'MongoDB', 'Docker', 'UiPath', 'Git', 'Tailwind'].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-card rounded-full text-sm border border-border/50"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
