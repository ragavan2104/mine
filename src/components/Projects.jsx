import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { ExternalLink, Github, Code, Database, Globe } from 'lucide-react'

const Projects = () => {
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

  // My real projects
  const projects = [
    {
      title: "Weather App",
      description: "A comprehensive weather application that provides real-time weather data, forecasts, and detailed weather analytics. Built with modern web technologies for a seamless user experience.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "JavaScript", "Weather API", "CSS3", "HTML5"],
      github: "https://github.com/ragavan2104",
      demo: "https://weather-ti5e-b7v5mmz9n-raagavans-projects.vercel.app/",
      category: "Frontend"
    },
    {
      title: "Task Manager",
      description: "A powerful task management application with intuitive interface for organizing tasks, setting priorities, and tracking progress. Features include task categorization and deadline management.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "JavaScript", "Local Storage", "CSS3", "HTML5"],
      github: "https://github.com/ragavan2104",
      demo: "https://taskmanager-5o4x8koc7-raagavans-projects.vercel.app/",
      category: "Frontend"
    },
    {
      title: "CineVault",
      description: "A modern movie discovery platform where users can explore movies, view detailed information, ratings, and reviews. Features a sleek interface with advanced search and filtering capabilities.",
      image: "https://images.unsplash.com/photo-1489599856641-b9d8553a8f6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Movie API", "JavaScript", "CSS3", "Responsive Design"],
      github: "https://github.com/ragavan2104",
      demo: "https://cinevault-beta.vercel.app/",
      category: "Frontend"
    },
    {
      title: "Bulk Mail Sender",
      description: "A professional bulk email sending application that allows users to send personalized emails to multiple recipients efficiently. Features email templates and delivery tracking.",
      image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["MERN Stack", "Node.js", "Express", "MongoDB", "Email APIs"],
      github: "https://github.com/ragavan2104",
      demo: "https://mailsender-x8cv-6t269n12u-raagavans-projects.vercel.app/",
      category: "Full Stack"
    },
    {
      title: "Peer App",
      description: "A collaborative platform for developers to share code, showcase projects, and collaborate on GitHub repositories. Features real-time code sharing, project demonstrations, and seamless GitHub integration for repository sharing.",
      image: "https://images.unsplash.com/photo-1515378791036-0648a814c963?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "GitHub API", "Code Sharing", "Node.js", "Real-time Collaboration"],
      github: "https://github.com/ragavan2104",
      demo: "https://peer-kimv.vercel.app/",
      category: "Full Stack"
    }
  ]

  const categories = ["All", "Full Stack", "Frontend", "Backend"]
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="projects" className="py-20 relative">
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
                My Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
              Here are some of the projects I've worked on, showcasing my skills in full-stack development
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-4 p-2 bg-slate-800/50 rounded-full backdrop-blur-sm border border-slate-700">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-slate-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${project.title}-${selectedCategory}`}
                variants={itemVariants}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-slate-700 hover:border-purple-400/50 transition-all duration-300">
                    {/* Project Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="px-3 py-1 bg-purple-600 text-white text-xs rounded-full">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-slate-700 text-purple-300 text-xs rounded-full border border-slate-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Project Links */}
                      <div className="flex justify-between items-center">
                        <div className="flex space-x-4">
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors duration-300"
                          >
                            <Github size={20} />
                          </motion.a>
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                          >
                            <ExternalLink size={20} />
                          </motion.a>
                        </div>
                        
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                        >
                          View Details
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* GitHub Stats */}
          <motion.div variants={itemVariants} className="mt-20">
            <h3 className="text-2xl font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                GitHub Activity
              </span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 text-center">
                <img
                  src="https://github-readme-stats.vercel.app/api?username=ragavan2104&theme=tokyonight&hide_border=true&include_all_commits=false&count_private=false"
                  alt="GitHub Stats"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 text-center">
                <img
                  src="https://github-readme-streak-stats.herokuapp.com/?user=ragavan2104&theme=tokyonight&hide_border=true"
                  alt="GitHub Streak"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 text-center">
                <img
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=ragavan2104&theme=tokyonight&hide_border=true&include_all_commits=false&count_private=false&layout=compact"
                  alt="Top Languages"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
