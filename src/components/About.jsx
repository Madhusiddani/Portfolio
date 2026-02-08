import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-navy-900/50 glass-section relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -z-10 opacity-50"></div>
            
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="section-title">About Me</h2>

                    <div className="glass-dense p-8 md:p-12 mt-8 text-left glass-noise glass-hover-lift">
                        <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                            I am a passionate web developer who enjoys building modern, responsive, and efficient web applications. I focus on creating clean user interfaces with smooth interactions and strong performance.
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-4">Key Strengths:</h3>
                        <ul className="grid md:grid-cols-2 gap-4">
                            {[
                                "Strong understanding of frontend fundamentals and modern web technologies",
                                "Good at building responsive and user-friendly interfaces",
                                "Write clean, maintainable, and readable code",
                                "Interested in learning new tools and improving performance"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-slate-400">
                                    <span className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-primary flex-shrink-0"></span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
