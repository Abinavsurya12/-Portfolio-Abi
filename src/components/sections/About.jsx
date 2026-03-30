import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Layers } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
    { name: 'Frontend (React, Next.js)', level: 95 },
    { name: 'Backend (Node.js, Express)', level: 90 },
    { name: 'UI/UX Design (Figma, GSAP)', level: 85 },
    { name: 'Database (MongoDB, SQL)', level: 88 },
];

const techIcons = ['React', 'Node', 'Mongo', 'Express', 'Tailwind', 'Figma', 'JS', 'HTML', 'CSS'];

const About = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".skill-bar", {
                scrollTrigger: {
                    trigger: ".skills-container",
                    start: "top 80%",
                },
                width: 0,
                duration: 1.5,
                ease: "power3.out",
                stagger: 0.2
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="about" ref={sectionRef} className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-base font-bold text-primary uppercase tracking-[0.3em] mb-4">About Me</h2>
                        <h3 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                            Abinav Surya <br />
                            <span className="text-slate-500">Full-Stack Developer + UI/UX Designer</span>
                        </h3>
                        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                            I am a passionate Full Stack Developer and UI/UX Designer with hands-on experience in building modern, responsive web applications. Along with developing projects, I actively work as a freelancer, delivering end-to-end solutions for clients.
                            <br /><br />
                            I specialize in UI/UX design, full stack development, and complete project deployment — from initial design to final hosting. I have successfully worked on multiple freelance projects, helping clients build scalable and user-friendly digital products.
                            <br /><br />
                            I am always focused on creating clean, efficient, and impactful solutions that provide real value.
                        </p>


                        <div className="grid grid-cols-2 gap-6 mb-10">
                            <div className="flex flex-col gap-2">
                                <span className="text-3xl font-black neon-text">1+</span>
                                <span className="text-xs uppercase tracking-widest text-slate-500 font-bold">Years Experience</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-3xl font-black neon-text">30+</span>
                                <span className="text-xs uppercase tracking-widest text-slate-500 font-bold">Projects Done</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Skills Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="glass-dark p-8 md:p-12 rounded-[2rem] border-primary/20 relative"
                    >
                        <h4 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                            <Code2 className="text-primary" /> Core Expertise
                        </h4>

                        <div className="skills-container space-y-8">
                            {skills.map((skill, index) => (
                                <div key={index} className="space-y-3">
                                    <div className="flex justify-between text-sm font-bold uppercase tracking-wider text-slate-300">
                                        <span>{skill.name}</span>
                                        <span className="text-primary">{skill.level}%</span>
                                    </div>
                                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                                        <div
                                            className="skill-bar h-full bg-primary shadow-neon"
                                            style={{ width: `${skill.level}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Floating Tech Icons Decor */}
                        <div className="absolute -top-10 -right-10 hidden xl:block">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="w-32 h-32 rounded-full border border-primary/10 flex items-center justify-center p-4 bg-background/50 backdrop-blur-sm"
                            >
                                <Layers className="text-primary/40 w-12 h-12" />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
