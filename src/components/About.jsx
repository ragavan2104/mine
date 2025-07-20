import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Database, Globe, Lightbulb } from 'lucide-react'

const About = () => {
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
        staggerChildren: 0.2
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

  const goals = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Open Source Contribution",
      description: "Contribute to open-source MERN projects and collaborate with the developer community"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "System Design & DevOps",
      description: "Enhance skills in system design and DevOps to build scalable applications"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Real-world Projects",
      description: "Build a portfolio showcasing real-world projects that solve actual problems"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Continuous Learning",
      description: "Stay updated with latest technologies and industry best practices"
    }
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg blur"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-slate-700">
                  <h3 className="text-2xl font-bold text-white mb-6">Who I Am</h3>
                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>
                      👋 Hi there! I'm <span className="text-purple-400 font-semibold">Ragavan</span>, 
                      a passionate MERN Stack Developer and a final-year B.E. Computer Science Engineering student.
                    </p>
                    <p>
                      I love building full-stack web applications that solve real-world problems and provide 
                      seamless user experiences. My journey in web development has been driven by curiosity 
                      and a desire to create meaningful digital solutions.
                    </p>
                    <p>
                      💡 I'm continuously learning and exploring new technologies to improve my skills and 
                      contribute to open-source projects. I believe in writing clean, efficient code and 
                      building scalable solutions.
                    </p>
                    <p>
                      📫 Feel free to reach out or collaborate on exciting projects. I'm always open to 
                      learning and growing together!
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white mb-8 text-center">🚀 Current Goals</h3>
              <div className="grid gap-6">
                {goals.map((goal, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group"
                  >
                    <div className="relative">
                      <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative bg-slate-800/30 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50 hover:border-purple-400/50 transition-all duration-300">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white">
                            {goal.icon}
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-2">{goal.title}</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">{goal.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
