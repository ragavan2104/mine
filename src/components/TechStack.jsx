import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const TechStack = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  const techCategories = [
    {
      category: "Frontend",
      color: "from-blue-400 to-cyan-400",
      technologies: [
        { name: "React.js", level: 90, icon: "⚛️" },
        { name: "HTML5", level: 95, icon: "🌐" },
        { name: "CSS3", level: 90, icon: "🎨" },
        { name: "JavaScript", level: 88, icon: "⚡" },
        { name: "Tailwind CSS", level: 85, icon: "💨" }
      ]
    },
    {
      category: "Backend",
      color: "from-green-400 to-emerald-400",
      technologies: [
        { name: "Node.js", level: 85, icon: "🟢" },
        { name: "Express.js", level: 80, icon: "🚀" },
        { name: "Python", level: 75, icon: "🐍" }
      ]
    },
    {
      category: "Database & Cloud",
      color: "from-purple-400 to-pink-400",
      technologies: [
        { name: "MongoDB", level: 82, icon: "🍃" },
        { name: "Firebase", level: 78, icon: "🔥" },
        { name: "Vercel", level: 85, icon: "▲" }
      ]
    },
    {
      category: "Tools & Others",
      color: "from-orange-400 to-red-400",
      technologies: [
        { name: "Git", level: 88, icon: "📝" },
        { name: "GitHub", level: 90, icon: "😺" },
        { name: "Postman", level: 85, icon: "📮" },
        { name: "VS Code", level: 95, icon: "💻" }
      ]
    }
  ]

  return (
    <section id="tech" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Tech Stack
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
              Technologies I work with to bring ideas to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {techCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                variants={itemVariants}
                className="group"
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 hover:border-purple-400/50 transition-all duration-300 h-full">
                    <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${category.color} text-slate-900 font-semibold text-sm mb-6`}>
                      {category.category}
                    </div>
                    
                    <div className="space-y-4">
                      {category.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={tech.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: (categoryIndex * 0.1) + (techIndex * 0.05) }}
                          className="group/item"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              <span className="text-lg">{tech.icon}</span>
                              <span className="text-white font-medium">{tech.name}</span>
                            </div>
                            <span className="text-purple-400 text-sm font-semibold">{tech.level}%</span>
                          </div>
                          <div className="w-full bg-slate-700 rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={inView ? { width: `${tech.level}%` } : { width: 0 }}
                              transition={{ 
                                duration: 1, 
                                delay: (categoryIndex * 0.2) + (techIndex * 0.1),
                                ease: "easeOut"
                              }}
                              className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  2+
                </div>
                <div className="text-gray-400 text-sm">Years Learning</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  15+
                </div>
                <div className="text-gray-400 text-sm">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  10+
                </div>
                <div className="text-gray-400 text-sm">Projects Built</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  100+
                </div>
                <div className="text-gray-400 text-sm">Commits</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechStack
