import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useScrollAnimation, useReducedMotionSafe } from '../hooks';
import { 
  staggerContainer, 
  staggerItem, 
  headerReveal, 
  hoverLift 
} from '../variants';

const Projects = () => {
    const { ref: sectionRef, isInView: sectionInView } = useScrollAnimation();
    const prefersReducedMotion = useReducedMotionSafe();
    return (
        <section id="projects" className="py-20 bg-navy-900/50 glass-section relative">
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[80px] -z-10 opacity-50"></div>
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-[100px] -z-10"></div>
            
            <div className="max-w-7xl mx-auto px-6">
                <motion.h2
                    ref={sectionRef}
                    initial="initial"
                    animate={sectionInView ? "animate" : "initial"}
                    variants={prefersReducedMotion ? { initial: {}, animate: {} } : headerReveal}
                    className="section-title text-center"
                >
                    Featured Projects
                </motion.h2>

                <motion.div 
                    className="grid md:grid-cols-2 gap-8 mt-12"
                    variants={staggerContainer}
                    initial="initial"
                    animate={sectionInView ? "animate" : "initial"}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            variants={staggerItem}
                            whileHover={prefersReducedMotion ? {} : { y: -10 }}
                            className="glass-dense p-8 group relative overflow-hidden glass-noise glass-hover-lift"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-xl -z-10"></div>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[50px] -z-10 group-hover:bg-primary/20 transition-all duration-500"></div>

                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-slate-400 mb-6 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.techStack.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-500/20 border border-blue-400/30 rounded-full transition-all duration-300 hover:bg-blue-500/30 hover:border-blue-400/50"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-4">
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-slate-300 hover:text-blue-300 transition-colors"
                                >
                                    <FaGithub size={20} />
                                    <span>Code</span>
                                </a>
                                <a
                                    href={project.demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-slate-300 hover:text-blue-300 transition-colors"
                                >
                                    <FaExternalLinkAlt size={16} />
                                    <span>Live Demo</span>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
