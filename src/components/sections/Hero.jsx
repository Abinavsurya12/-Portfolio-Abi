import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ChevronRight, Download } from 'lucide-react';
import passportImg from '../../assets/passportsize.jpg';
import splitResume from '../../assets/final spilt Format .pdf';


const Hero = ({ resumeFormat }) => {
    const containerRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".hero-title > span", {
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power4.out",
                delay: 0.5
            });

            gsap.from(".hero-subtitle", {
                opacity: 0,
                y: 20,
                duration: 1,
                delay: 1.2,
                ease: "power3.out"
            });

            gsap.from(".hero-cta", {
                opacity: 0,
                scale: 0.8,
                duration: 0.8,
                delay: 1.5,
                ease: "back.out(1.7)"
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const titleWords = "Full-Stack Developer crafting premium digital experiences".split(" ");

    return (
        <section
            ref={containerRef}
            id="hero"
            className="relative min-h-screen flex items-center pt-32 lg:pt-20 overflow-hidden"
        >
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side: Content */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 backdrop-blur-sm"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            <span className="text-xs font-semibold tracking-wider uppercase text-primary">Available for Projects</span>
                        </motion.div>

                        {/* Main Title */}
                        <div className="space-y-2">
                            <h1 className="hero-title text-6xl md:text-8xl font-black text-white leading-[0.9] mb-4">
                                Full-Stack<br />
                                <span className="neon-text">Developer</span>
                            </h1>
                        </div>

                        {/* Subtitle */}
                        <p className="hero-subtitle text-lg md:text-xl text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
                            Crafting premium digital experiences for Abinav Surya with a focus on modern
                            <span className="text-primary font-bold"> UI/UX Design</span> and <span className="text-primary font-bold">Scalable Architecture</span>.
                        </p>

                        {/* CTA Buttons */}
                        <div className="hero-cta flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 pt-4">
                            <a href="#projects" className="btn-primary group inline-block text-center w-full md:w-auto">
                                View Projects
                                <ChevronRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href={splitResume}
                                download="Abinav_Surya_Resume.pdf"
                                className="btn-outline group flex items-center justify-center gap-2 w-full md:w-auto"
                            >
                                <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                                Download CV
                            </a>
                        </div>
                    </div>

                    {/* Right Side: Image */}
                    <div className="relative flex items-center justify-center mt-12 lg:mt-0">

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                filter: "blur(0px)",
                                y: [0, -15, 0]
                            }}
                            transition={{
                                opacity: { duration: 1, delay: 0.5 },
                                scale: { duration: 1, delay: 0.5 },
                                filter: { duration: 1, delay: 0.5 },
                                y: {
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                            }}
                            className="relative group"
                        >
                            {/* Glowing Background Ring */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.2, 0.4, 0.2]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute -inset-4 bg-primary/30 rounded-full blur-2xl group-hover:bg-primary/50 transition-all duration-700"
                            />

                            {/* Circular Image Container */}
                            <motion.div
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.4 }
                                }}
                                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-white/20 shadow-[0_0_50px_rgba(6,182,212,0.3)] glass transform-gpu"
                            >
                                <img
                                    src={passportImg}
                                    alt="Abinav Surya"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-700" />
                            </motion.div>

                            {/* Floating Tech Badge */}
                            <motion.div
                                animate={{
                                    y: [0, 10, 0],
                                    rotate: [0, 5, 0]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1
                                }}
                                className="absolute -bottom-2 -right-2 p-4 glass rounded-2xl border border-white/20 shadow-neon z-20"
                            >
                                <p className="text-[10px] font-bold text-primary tracking-widest uppercase">Full Stack</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
            >
                <span className="text-[10px] uppercase tracking-widest font-bold">Scroll Down</span>
                <div className="w-5 h-8 border-2 border-slate-700 rounded-full flex justify-center p-1">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
