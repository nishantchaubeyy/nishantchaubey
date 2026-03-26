import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const rafRef = useRef(null);

    const handleScroll = useCallback(() => {
        if (rafRef.current) return;
        rafRef.current = requestAnimationFrame(() => {
            setIsScrolled(window.scrollY > 20);
            rafRef.current = null;
        });
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [handleScroll]);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            style={{ willChange: 'transform' }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                    ? 'py-4 bg-[#f3f3f3] border-b-4 border-black shadow-[0_4px_0_0_#000]'
                    : 'py-8 bg-transparent'
                }`}
        >
            <div className="max-w-[1440px] mx-auto px-6 md:px-24 flex items-center justify-between">
                <a
                    href="#home"
                    className="text-3xl md:text-4xl font-display font-black tracking-tighter group flex items-center gap-2"
                >
                    NISHANT<span className="text-brutalist-pink font-mono text-xl group-hover:scale-110 transition-transform">.</span>
                </a>

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

                    <a
                        href="#contact"
                        className="brutalist-button py-2 px-6 bg-brutalist-yellow text-xs"
                    >
                        Let's Talk
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="lg:hidden p-3 border-2 border-black bg-white shadow-[2px_2px_0_0_#000] active:shadow-none transition-all"
                    aria-label="Toggle menu"
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
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 top-[72px] bg-[#f3f3f3] border-t-4 border-black z-40 lg:hidden p-10 flex flex-col gap-8 items-center"
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
