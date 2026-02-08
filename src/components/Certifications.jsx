import React from 'react';
import { motion } from 'framer-motion';
import { certifications } from '../data/certifications';
import { FaAward } from 'react-icons/fa';

const Certifications = () => {
    return (
        <section id="certifications" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="section-title text-center"
                >
                    Certifications
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.03 }}
                            className="glass-card p-6 flex items-start gap-4 hover:border-primary/30 group"
                        >
                            <div className="mt-1 p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-navy-900 transition-colors duration-300 flex-shrink-0">
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
                </div>
            </div>
        </section>
    );
};

export default Certifications;
