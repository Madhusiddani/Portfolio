import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { useScrollAnimation, useReducedMotionSafe } from '../hooks';
import { scaleIn, headerReveal } from '../variants';

const Contact = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const { ref: sectionRef, isInView: sectionInView } = useScrollAnimation();
    const prefersReducedMotion = useReducedMotionSafe();

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        // Replace with actual keys
        const SERVICE_ID = 'YOUR_SERVICE_ID';
        const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
        const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
                publicKey: PUBLIC_KEY,
            })
            .then(
                () => {
                    setSubmitStatus('success');
                    form.current.reset();
                },
                (error) => {
                    console.error(error);
                    setSubmitStatus('error');
                },
            )
            .finally(() => {
                setIsSubmitting(false);
                // Clear success message after 5 seconds
                if (submitStatus === 'success') {
                    setTimeout(() => setSubmitStatus(null), 5000);
                }
            });
    };

    return (
        <section id="contact" className="py-20 relative glass-section">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -z-10 opacity-50"></div>
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-[100px] -z-10"></div>

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    ref={sectionRef}
                    initial="initial"
                    animate={sectionInView ? "animate" : "initial"}
                    variants={prefersReducedMotion ? { initial: {}, animate: {} } : scaleIn}
                    className="max-w-3xl mx-auto glass-dense p-8 md:p-12 glass-noise glass-hover-lift"
                >
                    <h2 className="section-title text-center mb-8">Keep in Touch</h2>

                    <p className="text-center text-slate-400 mb-10">
                        Have a question or want to work together? Send me a message!
                    </p>

                    <form ref={form} onSubmit={sendEmail} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">Name</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    required
                                    className="glass-input"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">Email</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    required
                                    className="glass-input"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300">Message</label>
                            <textarea
                                name="message"
                                required
                                rows="5"
                                className="glass-textarea"
                                placeholder="Write your message here..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 ${isSubmitting
                                ? 'bg-white/10 cursor-not-allowed opacity-70'
                                : 'bg-gradient-to-r from-blue-600 to-primary hover:from-blue-500 hover:to-primary/80 text-white shadow-lg hover:shadow-primary/25'
                                }`}
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <FaPaperPlane />
                                    Send Message
                                </>
                            )}
                        </button>

                        <AnimatePresence>
                            {submitStatus && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className={`p-4 rounded-lg flex items-center gap-3 glass-card ${submitStatus === 'success'
                                        ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                                        : 'bg-red-500/20 text-red-300 border border-red-500/30'
                                        }`}
                                >
                                    {submitStatus === 'success' ? (
                                        <>
                                            <FaCheckCircle size={20} />
                                            <span>Message sent successfully! I'll get back to you soon.</span>
                                        </>
                                    ) : (
                                        <>
                                            <FaExclamationCircle size={20} />
                                            <span>Oops! Something went wrong. Please try again later.</span>
                                        </>
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
