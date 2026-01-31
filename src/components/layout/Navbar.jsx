import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';

const Navbar = ({ resumeFormat, setResumeFormat }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'UI/UX', href: '#uiux' },
        { name: 'Contact', href: '#contact' },
    ];

    const resumeLink = resumeFormat === 'ats' ? '/resume-ats.pdf' : '/resume-split.pdf';

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
            <div className="container mx-auto px-6">
                <div className={`glass px-6 py-3 rounded-2xl flex items-center justify-between transition-all duration-300 ${isScrolled ? 'bg-black/40 border-primary/20 shadow-neon' : ''}`}>
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2 cursor-pointer"
                    >
                        <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/50 shadow-neon">
                            <Terminal className="text-primary w-6 h-6" />
                        </div>
                        <span className="text-xl font-bold tracking-tighter neon-text hidden sm:block">
                            Abinav <span className="text-white">Portfolio</span>
                        </span>
                    </motion.div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {/* Format Switcher */}
                        <div className="flex bg-slate-900/50 rounded-lg p-1 border border-white/10 mr-4">
                            <button
                                onClick={() => setResumeFormat('ats')}
                                className={`px-2 py-1 text-[10px] uppercase font-bold rounded-md transition-all ${resumeFormat === 'ats' ? 'bg-primary text-background shadow-neon' : 'text-slate-400 hover:text-white'}`}
                            >
                                ATS
                            </button>
                            <button
                                onClick={() => setResumeFormat('split')}
                                className={`px-2 py-1 text-[10px] uppercase font-bold rounded-md transition-all ${resumeFormat === 'split' ? 'bg-primary text-background shadow-neon' : 'text-slate-400 hover:text-white'}`}
                            >
                                Split
                            </button>
                        </div>

                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-slate-400 hover:text-primary transition-colors hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href={resumeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary text-xs py-2 px-4 inline-block text-center"
                        >
                            View Resume
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-slate-200"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden absolute top-full left-0 right-0 px-6 py-4"
                    >
                        <div className="glass-dark rounded-2xl p-6 flex flex-col gap-4 text-center">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-lg font-medium text-slate-300 hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href={resumeFormat === 'ats' ? '/resume-ats.pdf' : '/resume-split.pdf'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary w-full mt-2 inline-block text-center"
                            >
                                View Resume
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
