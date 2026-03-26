import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden px-6 lg:px-24" style={{ paddingTop: '100px', paddingBottom: '60px' }}>
            {/* Subtle background line */}
            <svg className="absolute top-0 left-0 w-full h-full -z-10 opacity-20 pointer-events-none" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                <path
                    d="M-50,150 Q250,50 500,450 T1050,450"
                    fill="none"
                    stroke="#eef100"
                    strokeWidth="2"
                    className="flow-line"
                />
            </svg>

            <div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Left content */}
                <div className="space-y-8">

                    {/* Eyebrow label */}
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="text-xs font-black tracking-[0.3em] uppercase text-brutalist-pink"
                    >
                        B.Tech CSE · AI · Web Engineering
                    </motion.p>

                    {/* Name — clean, well-spaced */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h2 className="font-bebas font-black leading-none tracking-wide"
                            style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)', letterSpacing: '0.02em' }}>
                            NISHANT
                        </h2>
                        <h2 className="font-bebas font-black leading-none tracking-wide"
                            style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)', letterSpacing: '0.02em' }}>
                            CHAUBEY
                        </h2>
                    </motion.div>

                    {/* Tagline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 }}
                        className="text-lg md:text-2xl font-display font-black leading-snug tracking-tight"
                    >
                        Building for the{' '}
                        <span className="text-brutalist-pink">Next Generation</span>
                        {' '}of the Web.
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-base md:text-lg font-medium leading-relaxed text-black/60 max-w-md"
                    >
                        Exploring the synergy between <strong className="text-black">AI</strong>,{' '}
                        <strong className="text-black">Engineering</strong>, and{' '}
                        <strong className="text-black">Creativity</strong>.
                    </motion.p>

                    {/* CTA buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.65 }}
                        className="flex flex-wrap gap-4 pt-2"
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

                {/* Right — photo card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="relative flex justify-center lg:justify-end"
                >
                    <div className="w-[280px] h-[280px] md:w-[440px] md:h-[440px] bg-brutalist-cyan border-4 border-black shadow-[12px_12px_0px_#000000] p-6 flex items-center justify-center relative overflow-hidden group">

                        {/* Decorative deco */}
                        <div className="absolute top-4 left-4 w-4 h-4 bg-brutalist-yellow border-2 border-black" />
                        <div className="absolute bottom-4 right-4 w-12 h-1 bg-brutalist-pink border border-black" />

                        <div className="flex flex-col items-center gap-5 text-center z-10">
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="w-44 h-44 md:w-60 md:h-60 grayscale group-hover:grayscale-0 transition-all duration-700 border-4 border-black shadow-[8px_8px_0_0_#000] overflow-hidden rotate-2 group-hover:rotate-0"
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
                            <div className="space-y-1">
                                <p className="font-bebas text-2xl md:text-3xl tracking-wide">NC.SYSTEM v1.0</p>
                                <div className="w-16 h-[2px] bg-black mx-auto" />
                                <p className="font-mono text-[9px] uppercase tracking-widest opacity-50">
                                    ESTABLISHED.2024 · CORE.ENGINEERING
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
