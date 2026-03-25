import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-brutalist-bg/90 backdrop-blur-md border-b-3 border-black' : 'py-8'}`}>
            <div className="max-w-[1440px] mx-auto px-6 md:px-24 flex items-center justify-between">
                <motion.a
                    href="#home"
                    className="text-3xl md:text-4xl font-display font-black tracking-tighter group flex items-center gap-2"
                >
                    NISHANT<span className="text-brutalist-pink font-mono text-xl group-hover:scale-110 transition-transform">.</span>
                </motion.a>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-12">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-black uppercase tracking-widest hover:text-brutalist-pink transition-colors relative"
                        >
                            {link.name}
                        </a>
                    ))}

                    <button className="brutalist-button py-2 px-6 bg-brutalist-yellow text-xs shadow-brutalist hover:shadow-brutalist-lg">
                        Let's Talk
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="lg:hidden p-3 border-3 border-black bg-white shadow-brutalist active:shadow-none transition-all"
                >
                    <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
                        <motion.div animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 8 : 0 }} className="h-[3px] w-full bg-black" />
                        <motion.div animate={{ opacity: isMenuOpen ? 0 : 1 }} className="h-[3px] w-full bg-black" />
                        <motion.div animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -8 : 0 }} className="h-[3px] w-full bg-black" />
                    </div>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 top-[100px] bg-brutalist-bg border-t-3 border-black z-40 lg:hidden p-10 flex flex-col gap-8 items-center"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-4xl font-display font-black tracking-tighter uppercase p-2 border-b-2 border-transparent hover:border-black transition-all"
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
