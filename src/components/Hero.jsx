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
                            className="text-7xl md:text-9xl font-display font-black tracking-tighter"
                        >
                            WeLabs
                        </motion.h2>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="absolute -bottom-2 left-0 w-full h-2 bg-black origin-left shadow-[0_4px_0_#eef100]"
                        />
                    </div>

                    <div className="space-y-6">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-6xl font-display font-black leading-[1.1] tracking-tighter flex flex-col"
                        >
                            <span>We Build What</span>
                            <span className="text-brutalist-pink">You Vote For</span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="space-y-4 max-w-lg"
                        >
                            <p className="text-xl md:text-2xl font-mono leading-relaxed">
                                Custom development for businesses.
                            </p>
                            <p className="text-xl md:text-2xl font-mono leading-relaxed">
                                Open-source tools for everyone.
                            </p>
                            <div className="pt-4 flex items-center gap-3 text-brutalist-black/60 font-mono italic">
                                <span>→</span>
                                <span>One funds the other. Both get our best work.</span>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-wrap gap-4 pt-10"
                    >
                        <button className="brutalist-button bg-brutalist-yellow">
                            See Our Work
                        </button>
                        <button className="brutalist-button bg-white">
                            Suggest an Idea
                        </button>
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
                        <div className="flex flex-col items-center gap-4 text-center">
                            <div className="w-16 h-16 border-2 border-black rotate-45 mb-4 group-hover:rotate-180 transition-transform duration-1000" />
                            <p className="font-mono text-xs uppercase tracking-[0.2em] font-bold">Concept Labs v0.1</p>
                            <div className="w-1/2 h-[2px] bg-black/20" />
                            <p className="font-mono text-[10px] leading-tight opacity-60">
                                SYSTEM.CORE.BUILDING_BLOCKS<br />
                                OPTIMIZING.FLOW.STATE
                            </p>
                        </div>

                        {/* Additional brutalist deco */}
                        <div className="absolute top-4 left-4 w-4 h-4 bg-brutalist-yellow border-2 border-black" />
                        <div className="absolute bottom-4 right-4 w-12 h-1 bg-brutalist-pink border border-black" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
