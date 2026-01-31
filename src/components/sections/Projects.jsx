import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, ChevronRight } from 'lucide-react';

const projects = [
    {
        title: "Hotel Booking System",
        desc: "A comprehensive hotel management platform with real-time room availability, secure booking, and admin dashboard.",
        tech: ["MongoDB", "Express", "React", "Node.js"],
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200",
        link: "https://github.com/Abinavsurya12",
        github: "https://github.com/Abinavsurya12"
    },
    {
        title: "Earworld Food Website",
        desc: "A premium food delivery platform with real-time tracking and sleek UI.",
        tech: ["React", "Tailwind", "Framer Motion"],
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1200",
        link: "https://github.com/Abinavsurya12",
        github: "https://github.com/Abinavsurya12"
    },
    {
        title: "LMS - Stripe Integrated",
        desc: "Modern Learning Management System with subscription model and video streaming.",
        tech: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1200",
        link: "https://github.com/Abinavsurya12",
        github: "https://github.com/Abinavsurya12"
    },
    {
        title: "Travel Booking App",
        desc: "Full-stack travel booking platform with MongoDB Atlas and Express API.",
        tech: ["React", "Express", "Node", "MongoDB"],
        image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=1200",
        link: "https://github.com/Abinavsurya12",
        github: "https://github.com/Abinavsurya12"
    }
];

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative glass-dark rounded-3xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-500"
        >
            {/* Image Container */}
            <div className="relative h-72 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* GitHub Overlay */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-6 text-center">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        className="space-y-4"
                    >
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 bg-white/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 hover:border-primary/50 group/icon"
                        >
                            <Github size={28} className="text-white group-hover/icon:text-primary transition-colors" />
                        </a>
                        <p className="text-white font-bold text-sm tracking-widest uppercase">View Code</p>
                    </motion.div>
                </div>

                {/* Top Right External Link */}
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 p-3 bg-primary/20 hover:bg-primary rounded-full backdrop-blur-md transition-all duration-300 border border-white/10 opacity-0 group-hover:opacity-100 translate-y-[-10px] group-hover:translate-y-0"
                >
                    <ExternalLink size={20} className="text-white font-bold" />
                </a>
            </div>

            {/* Content */}
            <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                        <span key={t} className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-primary/10 text-primary border border-primary/20 rounded">
                            {t}
                        </span>
                    ))}
                </div>
                <h4 className="text-2xl font-black text-white mb-2 group-hover:text-primary transition-colors flex items-center justify-between">
                    {project.title}
                    <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">
                    {project.desc}
                </p>

                <div className="flex items-center gap-4">
                    <button className="text-xs font-bold text-primary uppercase tracking-widest hover:underline underline-offset-4 flex items-center gap-2">
                        Project Details <ChevronRight size={14} />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-24 relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div>
                        <h2 className="text-base font-bold text-primary uppercase tracking-[0.3em] mb-4">Portfolio</h2>
                        <h3 className="text-4xl md:text-5xl font-black text-white">Highlighted Works</h3>
                    </div>
                    <p className="text-slate-400 max-w-sm text-sm">
                        A selection of my best projects involving complex backends, Stripe integrations, and high-end UI animations.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <ProjectCard key={idx} project={project} index={idx} />
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <button className="btn-outline">
                        Load More Projects
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Projects;
