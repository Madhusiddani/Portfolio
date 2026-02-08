import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';

const Skills = () => {
    return (
        <section id="skills" className="py-20 relative overflow-hidden glass-section">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full bg-navy-900 -z-20"></div>
            <div className="absolute top-1/3 right-0 w-72 h-72 bg-blue-600/10 rounded-full blur-[80px] -z-10"></div>
            <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10 opacity-50"></div>

            <div className="max-w-7xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="section-title text-center"
                >
                    My Skills
                </motion.h2>

                <div className="grid gap-8 mt-12">
                    {skills.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-xl font-semibold text-white mb-6 pl-4 border-l-4 border-gradient-to-b from-blue-400 to-primary">
                                {category.category}
                            </h3>

                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                                {category.items.map((skill, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ scale: 1.05, translateY: -5 }}
                                        className="glass-card glass-hover p-6 flex flex-col items-center justify-center gap-4 text-center group"
                                    >
                                        <div className="text-4xl text-slate-400 group-hover:text-primary transition-colors duration-300">
                                            <skill.icon />
                                        </div>
                                        <span className="text-slate-300 font-medium text-sm">{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
