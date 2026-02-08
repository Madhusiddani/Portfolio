import React from 'react';
import { motion } from 'framer-motion';
import { certifications } from '../data/certifications';
import { FaAward } from 'react-icons/fa';
import { useScrollAnimation, useReducedMotionSafe } from '../hooks';
import { 
  staggerContainer, 
  staggerItem, 
  headerReveal, 
  scaleIn 
} from '../variants';

const Certifications = () => {
    const { ref: sectionRef, isInView: sectionInView } = useScrollAnimation();
    const prefersReducedMotion = useReducedMotionSafe();
    return (
        <section id="certifications" className="py-20 relative glass-section">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[80px] -z-10 opacity-50"></div>
            <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-primary/5 rounded-full blur-[100px] -z-10"></div>
            
            <div className="max-w-7xl mx-auto px-6">
                <motion.h2
                    ref={sectionRef}
                    initial="initial"
                    animate={sectionInView ? "animate" : "initial"}
                    variants={prefersReducedMotion ? { initial: {}, animate: {} } : headerReveal}
                    className="section-title text-center"
                >
                    Certifications
                </motion.h2>

                <motion.div 
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
                    variants={staggerContainer}
                    initial="initial"
                    animate={sectionInView ? "animate" : "initial"}
                >
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            variants={staggerItem}
                            whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
                            className="glass-dense p-6 flex items-start gap-4 hover:border-primary/50 group glass-hover-lift glass-noise"
                        >
                            <div className="mt-1 p-3 bg-gradient-to-br from-blue-500/30 to-primary/30 border border-blue-400/30 rounded-lg text-blue-300 group-hover:from-blue-500/50 group-hover:to-primary/50 group-hover:border-blue-400/50 group-hover:text-blue-200 transition-all duration-300 flex-shrink-0">
                                <FaAward size={24} />
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                    {cert.name}
                                </h3>
                                <p className="text-slate-400 text-sm mb-1">{cert.issuer}</p>
                                <p className="text-slate-500 text-xs">{cert.date}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Certifications;
