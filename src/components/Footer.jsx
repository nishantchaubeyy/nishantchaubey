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
                    <a href="https://twitter.com/nishantchaubeyy" target="_blank" rel="noopener noreferrer" className="text-xs font-black tracking-widest text-black/40 uppercase hover:text-brutalist-pink transition-colors">Twitter</a>
                    <a href="https://www.linkedin.com/in/nishant-chaubey-9b3080313?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="text-xs font-black tracking-widest text-black/40 uppercase hover:text-brutalist-pink transition-colors">LinkedIn</a>
                    <a href="https://github.com/nishantchaubeyy" target="_blank" rel="noopener noreferrer" className="text-xs font-black tracking-widest text-black/40 uppercase hover:text-brutalist-pink transition-colors">Github</a>
                </div>

                <div className="text-xs font-black tracking-widest text-black/20 uppercase">
                    © 2026 NISHANT • CRAFTED WITH IMPACT
                </div>
            </div>
        </footer>
    );
};

export default Footer;
