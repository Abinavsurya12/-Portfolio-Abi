import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Smartphone, Monitor, Figma } from 'lucide-react';

const UIUX = () => {
    return (
        <section id="uiux" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Visual Demo (2D Cards) */}
                    <div className="relative h-[500px] flex items-center justify-center">
                        {/* Background Decor */}
                        <div className="absolute inset-0 bg-primary/5 rounded-[3rem] blur-3xl" />

                        {/* Mockup Cards */}
                        <motion.div
                            initial={{ rotate: -15, scale: 0.8, opacity: 0 }}
                            whileInView={{ rotate: -10, scale: 1, opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="absolute left-0 top-10 w-64 h-96 glass-dark rounded-3xl border-primary/20 backdrop-blur-2xl p-4 shadow-2xl z-10"
                        >
                            <div className="w-full h-32 bg-slate-800 rounded-2xl mb-4 overflow-hidden">
                                <div className="w-full h-full bg-gradient-to-br from-primary/40 to-transparent" />
                            </div>
                            <div className="space-y-3">
                                <div className="h-2 w-3/4 bg-slate-700 rounded" />
                                <div className="h-2 w-1/2 bg-slate-700 rounded" />
                                <div className="pt-4 grid grid-cols-2 gap-2">
                                    <div className="h-8 bg-primary/20 rounded-lg" />
                                    <div className="h-8 bg-slate-800 rounded-lg" />
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ rotate: 15, scale: 0.8, opacity: 0 }}
                            whileInView={{ rotate: 10, scale: 1, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="absolute right-0 bottom-10 w-64 h-96 glass bg-white/5 rounded-3xl border-white/10 backdrop-blur-sm p-4 shadow-2xl"
                        >
                            <div className="w-full h-full border border-dashed border-white/20 rounded-2xl flex items-center justify-center">
                                <Figma className="text-white/20 w-12 h-12" />
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-base font-bold text-primary uppercase tracking-[0.3em] mb-4">Design Expertise</h2>
                        <h3 className="text-4xl md:text-5xl font-black text-white mb-8">UI/UX Craftsmanship</h3>
                        <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                            I believe that design is not just how it looks, but how it works. I specialize in
                            creating functional, accessible, and high-converting user interfaces using
                            industry-leading tools and methodologies.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 shadow-neon">
                                    <Layout className="text-primary" />
                                </div>
                                <h4 className="text-lg font-bold text-white uppercase tracking-wider">Wireframing</h4>
                                <p className="text-slate-500 text-sm">Low-fidelity blueprints focusing on structure and user flow.</p>
                            </div>

                            <div className="space-y-4">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 shadow-neon">
                                    <Smartphone className="text-primary" />
                                </div>
                                <h4 className="text-lg font-bold text-white uppercase tracking-wider">Prototyping</h4>
                                <p className="text-slate-500 text-sm">Interactive prototypes to validate ideas before development.</p>
                            </div>

                            <div className="space-y-4">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 shadow-neon">
                                    <Monitor className="text-primary" />
                                </div>
                                <h4 className="text-lg font-bold text-white uppercase tracking-wider">Responsive Layouts</h4>
                                <p className="text-slate-500 text-sm">Ensuring a seamless experience across all device sizes.</p>
                            </div>

                            <div className="space-y-4">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 shadow-neon">
                                    <Figma className="text-primary" />
                                </div>
                                <h4 className="text-lg font-bold text-white uppercase tracking-wider">Design Systems</h4>
                                <p className="text-slate-500 text-sm">Scalable component libraries for consistent brand identity.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default UIUX;
