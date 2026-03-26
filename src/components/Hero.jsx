import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden px-6 lg:px-24">
            {/* Animated Flow Line Background */}
            <svg className="absolute top-0 left-0 w-full h-full -z-10 opacity-30 pointer-events-none" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                <path
                    d="M-50,150 Q250,50 500,450 T1050,450"
                    fill="none"
                    stroke="#eef100"
                    strokeWidth="2"
                    className="flow-line"
                />
            </svg>

            <div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-12">
                    <div className="inline-block relative">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-7xl md:text-9xl font-bebas font-black tracking-tighter"
                        >
                            NISHANT CHAUBEY
                        </motion.h2>
                    </div>
                    <div className="space-y-6">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-6xl font-display font-black leading-[1.1] tracking-tighter"
                        >
                            Building for the <br />
                            <span className="text-brutalist-pink tracking-tight">Next Generation of the Web.</span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="space-y-4 max-w-2xl"
                        >
                            <p className="text-2xl md:text-3xl font-display font-medium leading-relaxed opacity-90 italic">
                                Exploring the synergy between <span className="text-black font-black">AI</span>,
                                <span className="text-black font-black"> Engineering</span>, and
                                <span className="text-black font-black"> Creativity</span>.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-wrap gap-4 pt-10"
                    >
                        <a href="#projects" className="brutalist-button bg-brutalist-yellow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                            See My Work
                        </a>
                        <a
                            href="/Nishantresume.pdf"
                            target="_blank"
                            className="brutalist-button bg-white hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
                        >
                            Download CV
                        </a>
                    </motion.div>
                </div>

                {/* Right side Artwork Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative flex justify-center lg:justify-end"
                >
                    <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-brutalist-cyan border-3 border-black shadow-[15px_15px_0px_#000000] p-8 flex items-center justify-center relative overflow-hidden group">
                        {/* Animated Grid Lines */}
                        <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 border border-black/5 opacity-20 pointer-events-none" />

                        {/* Artistic Element (Logo or Abstract Shape) */}
                        <div className="flex flex-col items-center gap-6 text-center z-10">
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1 }}
                                className="w-48 h-48 md:w-64 md:h-64 grayscale group-hover:grayscale-0 transition-all duration-700 border-4 border-black shadow-[10px_10px_0_0_#000] overflow-hidden rotate-3 group-hover:rotate-0"
                            >
                                <img
                                    src="/profile.jpeg"
                                    alt="Nishant Chaubey"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop';
                                    }}
                                />
                            </motion.div>
                            <div className="space-y-2">
                                <p className="font-bebas text-3xl md:text-4xl tracking-tight">NC.SYSTEM v1.0</p>
                                <div className="w-24 h-[3px] bg-black mx-auto" />
                                <p className="font-mono text-[10px] uppercase tracking-widest opacity-60">
                                    ESTABLISHED.2024<br />
                                    CORE.ENGINEERING.SUITE
                                </p>
                            </div>
                        </div>

                        {/* Additional brutalist deco */}
                        <div className="absolute top-4 left-4 w-4 h-4 bg-brutalist-yellow border-2 border-black" />
                        <div className="absolute bottom-4 right-4 w-12 h-1 bg-brutalist-pink border border-black" />
                        <div className="absolute top-10 right-10 w-8 h-8 rounded-full border-2 border-dashed border-black/20 animate-spin-slow" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
