import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="py-16 border-t-4 border-black bg-white">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-2xl font-display font-black tracking-tighter"
                >
                    NISHANT<span className="text-brutalist-pink">.</span>
                </motion.div>

                <div className="flex items-center gap-10">
                    <a href="#" className="text-xs font-black tracking-widest text-black/40 uppercase hover:text-brutalist-pink transition-colors">Twitter</a>
                    <a href="#" className="text-xs font-black tracking-widest text-black/40 uppercase hover:text-brutalist-pink transition-colors">LinkedIn</a>
                    <a href="#" className="text-xs font-black tracking-widest text-black/40 uppercase hover:text-brutalist-pink transition-colors">Github</a>
                </div>

                <div className="text-xs font-black tracking-widest text-black/20 uppercase">
                    © 2026 NISHANT • CRAFTED WITH VOTE
                </div>
            </div>
        </footer>
    );
};

export default Footer;
