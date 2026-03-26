import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail } from 'lucide-react';
import { Github, Linkedin, Twitter } from './SocialIcons';

const Contact = () => {
    return (
        <section id="contact" className="py-24 md:py-32 px-6">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="space-y-4">
                    <p className="text-xs font-bold tracking-[0.2em] uppercase text-brutalist-pink">GET IN TOUCH</p>
                    <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight leading-[1.1] text-black">
                        LET'S WORK <br />
                        <span className="text-black/40">TOGETHER</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-12"
                    >
                        <p className="text-xl md:text-2xl text-black/70 leading-relaxed font-medium">
                            Have a project in mind or just want to say hi? <br />
                            Feel free to reach out. I'm always open to <br />
                            discussing new opportunities and ideas.
                        </p>

                        <div className="space-y-6">
                            {[
                                { label: 'EMAIL', value: 'nishantchaubey8004@gmail.com', href: 'mailto:nishantchaubey8004@gmail.com', icon: Mail, isEmail: true },
                                { label: 'LINKEDIN', value: 'Nishant Chaubey', href: 'https://www.linkedin.com/in/nishant-chaubey-9b3080313?utm_source=share_via&utm_content=profile&utm_medium=member_android', icon: Linkedin },
                                { label: 'GITHUB', value: 'nishantchaubeyy', href: 'https://github.com/nishantchaubeyy', icon: Github },
                                { label: 'TWITTER', value: 'nishantchaubeyy', href: 'https://twitter.com/nishantchaubeyy', icon: Twitter }
                            ].map((link, i) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target={link.isEmail ? undefined : "_blank"}
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-6 p-6 brutalist-card hover:bg-brutalist-cyan transition-all"
                                >
                                    <div className="p-4 border-2 border-black bg-white group-hover:bg-black group-hover:text-white transition-all shadow-[4px_4px_0_0_#000]">
                                        <link.icon className="w-6 h-6" />
                                    </div>
                                    <div className="overflow-hidden">
                                        <p className="text-xs font-bold tracking-widest text-black/40 uppercase">{link.label}</p>
                                        <p className="text-lg font-display font-black text-black tracking-tight truncate">{link.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8 p-10 brutalist-card"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black tracking-widest text-black/40 uppercase pl-1">YOUR NAME</label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full px-6 py-4 bg-white border-3 border-black shadow-[4px_4px_0_0_#000] focus:shadow-none focus:translate-x-1 focus:translate-y-1 outline-none transition-all placeholder:text-black/20 font-black"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black tracking-widest text-black/40 uppercase pl-1">EMAIL ADDRESS</label>
                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full px-6 py-4 bg-white border-3 border-black shadow-[4px_4px_0_0_#000] focus:shadow-none focus:translate-x-1 focus:translate-y-1 outline-none transition-all placeholder:text-black/20 font-black"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black tracking-widest text-black/40 uppercase pl-1">YOUR MESSAGE</label>
                            <textarea
                                placeholder="Hey, I have a project..."
                                rows={6}
                                className="w-full px-6 py-4 bg-white border-3 border-black shadow-[4px_4px_0_0_#000] focus:shadow-none focus:translate-x-1 focus:translate-y-1 outline-none transition-all placeholder:text-black/20 font-black resize-none"
                            />
                        </div>

                        <button className="group w-full py-5 bg-brutalist-yellow border-3 border-black text-base font-black uppercase tracking-widest shadow-[6px_6px_0_0_#000] hover:shadow-none hover:translate-x-1.5 hover:translate-y-1.5 flex items-center justify-center gap-3 transition-all">
                            Send Message
                            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
