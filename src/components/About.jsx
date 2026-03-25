import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 md:py-32 px-6">
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center space-y-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <p className="text-xs font-bold tracking-[0.2em] uppercase text-blue-600">ABOUT ME</p>
                    <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight leading-[1.1] text-black">
                        PASSIONATE ABOUT <br />
                        <span className="text-black/40">CRAFTING EXPERIENCES</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-3xl space-y-8"
                >
                    <p className="text-xl md:text-2xl text-black/70 leading-relaxed font-medium">
                        Currently focusing on React, Next.js, and modern CSS techniques to build
                        performant and visually stunning web applications. I believe that
                        every detail matters, and I'm dedicated to delivering excellence in every pixel.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
                        {[
                            { label: 'Experience', value: '3+ Years' },
                            { label: 'Projects', value: '25+' },
                            { label: 'Happy Clients', value: '40+' },
                            { label: 'Tech Stack', value: '10+' }
                        ].map((stat, i) => (
                            <div key={stat.label} className="space-y-2 border-l-4 border-black pl-6 text-left">
                                <p className="text-xs font-bold tracking-widest text-black/40 uppercase">{stat.label}</p>
                                <p className="text-2xl font-display font-black text-black">{stat.value}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
