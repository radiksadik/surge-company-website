'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight, Send, Linkedin, Twitter, Github, Code, Palette, Rocket, Download } from 'lucide-react'
import Image from 'next/image'

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [downloadCount, setDownloadCount] = useState(100)
  const { scrollYProgress } = useScroll()
  
  const headerBg = useTransform(scrollYProgress, [0, 0.2], ['rgba(0,0,0,0)', 'rgba(0,0,0,1)'])
  
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    const interval = setInterval(() => {
      setDownloadCount(prev => prev + 1)
    }, 10000)
    
    return () => {
      clearInterval(interval)
    }
  }, [isMenuOpen])

  const processLineVariants = {
    hidden: { height: 0 },
    visible: { 
      height: '100%',
      transition: { duration: 1.5, ease: "easeInOut" }
    }
  }

  return (
    <div className="min-h-screen bg-[#000000] text-[#FFFFFF] overflow-x-hidden">
      <motion.header 
        style={{ backgroundColor: headerBg }}
        className="fixed top-0 left-0 right-0 z-50 p-6"
      >
        <div className="container mx-auto flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%9B%D0%BE%D0%B3%D0%BE-cFKBDUkxJBH85ohOkAWGiGNphQ8BSj.svg"
              alt="Surge Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-2xl font-bold">Surge</span>
          </motion.div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {['Work', 'Process', 'Team', 'Contact'].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <a href={`#${item.toLowerCase()}`} className="hover:text-[#FF5620] transition-colors">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#FF5620]"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </motion.button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 bg-[#000000] z-40 flex items-center justify-center"
          >
            <nav>
              <ul className="space-y-8 text-center">
                {['Work', 'Process', 'Team', 'Contact'].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      className="text-2xl hover:text-[#FF5620] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-8">
              Web Development
              <br />
              <span className="text-[#FF5620]">Reimagined</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-12">
              Creating digital experiences that matter
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-[#FF5620] text-[#FFFFFF] py-3 px-8 rounded-full font-medium text-lg"
            >
              Get Started
              <ArrowRight className="ml-2" />
            </motion.a>
          </motion.div>

          <motion.div 
            className="absolute inset-0 z-0"
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 1.5 }}
          >
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Abstract background"
              className="object-cover"
              fill
              priority
            />
          </motion.div>
        </section>

        <section id="work" className="py-24 bg-zinc-900">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-7xl font-bold mb-4">{downloadCount}<span className="text-[#FF5620]">+</span></h2>
              <p className="text-xl text-gray-400 flex items-center justify-center gap-2">
                <Download className="w-6 h-6" />
                Projects Delivered
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: item * 0.1 }}
                  className="bg-[#000000] rounded-lg overflow-hidden group"
                >
                  <div className="relative h-64">
                    <Image
                      src={`/placeholder.svg?height=400&width=600&text=Project ${item}`}
                      alt={`Project ${item}`}
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      fill
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#FF5620] text-[#FFFFFF] py-2 px-4 rounded-full"
                      >
                        View Project
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="py-32 bg-[#000000] relative">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-24 text-center"
            >
              Our <span className="text-[#FF5620]">Process</span>
            </motion.h2>

            <div className="relative">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="absolute left-1/2 top-0 w-1 bg-[#FF5620] h-full transform -translate-x-1/2 origin-top"
                variants={processLineVariants}
              />

              {[
                {
                  title: "Discovery & Planning",
                  description: "We start by understanding your vision, goals, and requirements. Our team analyzes your needs and creates a detailed roadmap for your project.",
                  icon: Code,
                  align: "right"
                },
                {
                  title: "Design & Development",
                  description: "Our designers and developers work together to create beautiful, functional websites that exceed expectations.",
                  icon: Palette,
                  align: "left"
                },
                {
                  title: "Launch & Support",
                  description: "We ensure a smooth launch and provide ongoing support to keep your website running perfectly.",
                  icon: Rocket,
                  align: "right"
                }
              ].map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: step.align === "right" ? 100 : -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative mb-32 flex items-center ${
                    step.align === "right" ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className={`w-1/2 ${step.align === "right" ? "pr-12 text-right" : "pl-12"}`}>
                    <div className="mb-4">
                      <step.icon className="inline-block w-8 h-8 text-[#FF5620]" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                  <div className="absolute left-1/2 w-4 h-4 bg-[#FF5620] rounded-full transform -translate-x-1/2" />
                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-zinc-900">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-16 text-center"
            >
              Why Choose <span className="text-[#FF5620]">Surge</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  title: "Expert Team",
                  description: "Our team of seasoned professionals brings years of experience in web development.",
                  icon: Code
                },
                {
                  title: "Modern Technology",
                  description: "We use cutting-edge technologies to build fast, secure, and scalable websites.",
                  icon: Palette
                },
                {
                  title: "Dedicated Support",
                  description: "We provide ongoing support and maintenance to ensure your website stays perfect.",
                  icon: Rocket
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-[#000000] p-8 rounded-lg text-center hover:transform hover:scale-105 transition-transform duration-300"
                >
                  <feature.icon className="w-12 h-12 text-[#FF5620] mx-auto mb-6" />
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#000000]">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-16 text-center"
            >
              Our <span className="text-[#FF5620]">Expertise</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Web Development",
                "UI/UX Design",
                "E-commerce",
                "Mobile-First Design",
                "Performance Optimization",
                "SEO"
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-zinc-900 p-6 rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-[#FF5620] rounded-full" />
                    <h3 className="text-lg font-semibold">{skill}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="py-24 bg-[#000000]">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-16 text-center"
            >
              Meet Our <span className="text-[#FF5620]">Team</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { name: "Jane Doe", role: "Lead Developer", image: "/placeholder.svg?height=400&width=300" },
                { name: "John Smith", role: "UX Designer", image: "/placeholder.svg?height=400&width=300" },
                { name: "Alice Johnson", role: "Project Manager", image: "/placeholder.svg?height=400&width=300" }
              ].map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="relative w-48 h-48 mx-auto mb-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      className="rounded-full object-cover"
                      fill
                    />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-[#FF5620] mb-4">{member.role}</p>
                  <div className="flex justify-center space-x-4">
                    {[Linkedin, Twitter, Github].map((Icon, i) => (
                      <motion.a
                        key={i}
                        href="#"
                        whileHover={{ scale: 1.2, color: '#FF5620' }}
                        className="text-gray-400 hover:text-[#FF5620] transition-colors"
                      >
                        <Icon className="w-6 h-6" />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 bg-zinc-900">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-16 text-center"
            >
              Get in <span className="text-[#FF5620]">Touch</span>
            </motion.h2>
            <motion.form
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl mx-auto space-y-6"
            >
              {['Name', 'Email', 'Message'].map((field, index) => (
                <motion.div
                  key={field}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <label htmlFor={field.toLowerCase()} className="block text-sm font-medium mb-2">{field}</label>
                  {field === 'Message' ? (
                    <textarea
                      id={field.toLowerCase()}
                      name={field.toLowerCase()}
                      rows={4}
                      className="w-full px-4 py-2 bg-[#000000] border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5620] transition-all"
                      required
                    />
                  ) : (
                    <input
                      type={field === 'Email' ? 'email' : 'text'}
                      id={field.toLowerCase()}
                      name={field.toLowerCase()}
                      className="w-full px-4 py-2 bg-[#000000] border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5620] transition-all"
                      required
                    />
                  )}
                </motion.div>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-[#FF5620] text-[#FFFFFF] py-3 px-6 rounded-md font-medium text-lg flex items-center justify-center"
                type="submit"
              >
                Send Message
                <Send className="w-5 h-5 ml-2" />
              </motion.button>
            </motion.form>
          </div>
        </section>
      </main>

      <footer className="bg-[#000000] py-8">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Surge. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}