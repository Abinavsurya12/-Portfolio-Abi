import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Palette, Code2 } from 'lucide-react';

const experiences = [
    {
        title: "UI/UX Designer & Frontend Dev",
        company: "Creative Pulse Studio",
        period: "2024-2025",
        desc: "Designed and implemented modern user interfaces for international clients. Specialized in GSAP animations and responsive design systems.",
        icon: <Palette className="w-5 h-5" />
    },
    {
        title: "Junior Web Developer",
        company: "Virtue's corporate",
        period: "2024-2025",
        desc: "Worked on various client projects using MERN Stack Development. Assisted in database management with SQL.",
        icon: <Code2 className="w-5 h-5" />
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 relative bg-background/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-base font-bold text-primary uppercase tracking-[0.3em] mb-4"
                    >
                        Journey
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl md:text-5xl font-black text-white"
                    >
                        Experience Timeline
                    </motion.h3>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line with Animation */}
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: '100%' }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent origin-top"
                    />

                    <div className="space-y-12">
                        {experiences.map((exp, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: idx * 0.1 }}
                                className={`relative flex flex-col md:flex-row items-center justify-between gap-8 ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                            >
                                {/* Content */}
                                <div className={`w-full md:w-[45%] ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                    <motion.div
                                        whileHover={{
                                            scale: 1.02,
                                            rotateY: idx % 2 === 0 ? -5 : 5,
                                            transition: { duration: 0.3 }
                                        }}
                                        className="glass-dark p-6 rounded-2xl border-white/5 hover:border-primary/40 transition-all duration-300 shadow-xl group cursor-default"
                                    >
                                        <span className="text-xs font-bold text-primary uppercase tracking-widest mb-2 block">{exp.period}</span>
                                        <h4 className="text-xl font-black text-white mb-2 group-hover:text-primary transition-colors">{exp.title}</h4>
                                        <span className="text-slate-500 font-bold block mb-4 italic">{exp.company}</span>
                                        <p className="text-slate-400 text-sm leading-relaxed">{exp.desc}</p>
                                    </motion.div>
                                </div>

                                {/* Center Icon with Pulse */}
                                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center z-10">
                                    <motion.div
                                        animate={{
                                            boxShadow: ["0 0 0px rgba(6,182,212,0)", "0 0 20px rgba(6,182,212,0.4)", "0 0 0px rgba(6,182,212,0)"]
                                        }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center text-primary shadow-neon"
                                    >
                                        <motion.div
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            {exp.icon}
                                        </motion.div>
                                    </motion.div>
                                </div>

                                {/* Empty space for alignment */}
                                <div className="hidden md:block w-[45%]" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
