import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(formRef.current);

        try {
            const response = await fetch("https://formspree.io/f/mqakvjzy", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setSent(true);
                formRef.current.reset();
                setTimeout(() => setSent(false), 5000);
            }
        } catch (error) {
            console.error("Form submission error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16">

                    {/* Left: Info */}
                    <div>
                        <h2 className="text-base font-bold text-primary uppercase tracking-[0.3em] mb-4">Let&apos;s Connect</h2>
                        <h3 className="text-4xl md:text-5xl font-black text-white mb-8">Get In Touch</h3>
                        <p className="text-slate-400 text-lg mb-12 max-w-md italic">
                            &quot;Building the future of the web, one interaction at a time. Let&apos;s create something extraordinary together.&quot;
                        </p>

                        <div className="space-y-8 mb-12">
                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 shadow-neon transition-transform group-hover:scale-110">
                                    <Mail className="text-primary" />
                                </div>
                                <div>
                                    <span className="text-xs font-bold text-slate-500 tracking-widest block uppercase mb-1">Email Me</span>
                                    <a href="mailto:abinavsuryapm@gmail.com" className="text-xl font-bold text-white hover:text-primary transition-colors">abinavsuryapm@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 shadow-neon transition-transform group-hover:scale-110">
                                    <MapPin className="text-primary" />
                                </div>
                                <div>
                                    <span className="text-xs font-bold text-slate-500 tracking-widest block uppercase mb-1">Location</span>
                                    <span className="text-xl font-bold text-white">Coimbatore, India</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            {[
                                { Icon: Github, href: "https://github.com/Abinavsurya12" },
                                { Icon: Linkedin, href: "https://www.linkedin.com/in/abinavsurya-p-m-667034297/" }
                          
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    className="w-12 h-12 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/50 transition-all hover:shadow-neon"
                                >
                                    <social.Icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="glass-dark p-8 md:p-12 rounded-[2rem] border-primary/20"
                    >
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-2">Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-primary/50 focus:outline-none transition-all"
                                        placeholder="Abinav Surya"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-2">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-primary/50 focus:outline-none transition-all"
                                        placeholder="hello@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-2">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-primary/50 focus:outline-none transition-all"
                                    placeholder="Inquiry about Project"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-2">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="4"
                                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-primary/50 focus:outline-none transition-all resize-none"
                                    placeholder="How can I help you?"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading || sent}
                                className={`btn-primary w-full flex items-center justify-center gap-3 py-4 text-lg ${sent ? 'bg-green-500 hover:bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.5)]' : ''}`}
                            >
                                {loading ? 'Sending...' : sent ? 'Message Sent!' : (
                                    <>
                                        Send Message <Send size={20} />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
