import React from 'react';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-navy-950 border-t border-white/5 py-8">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

                <p className="text-slate-500 text-sm text-center md:text-left">
                    © {new Date().getFullYear()} Madhu Lavanya Siddani. All rights reserved.
                </p>

                <div className="flex items-center gap-6">
                    <a
                        href="https://github.com/Madhusiddani"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors text-xl"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/madhu-lavanya-siddani/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors text-xl"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                </div>

                <p className="text-slate-600 text-xs flex items-center gap-1">
                    Built with <FaHeart className="text-red-500/50" /> using React & Tailwind
                </p>
            </div>
        </footer>
    );
};

export default Footer;
