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

    // Lock body scroll when mobile menu open
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isMenuOpen]);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <>
            {/* Navbar bar */}
            <nav
                style={{ willChange: 'transform' }}
                className={`fixed top-0 w-full z-[100] transition-all duration-300 ${isScrolled || isMenuOpen
                    ? 'py-3 bg-[#f3f3f3] border-b-4 border-black shadow-[0_4px_0_0_#000]'
                    : 'py-6 bg-transparent'
                    }`}
            >
                <div className="max-w-[1440px] mx-auto px-5 md:px-24 flex items-center justify-between">
                    <a
                        href="#home"
                        onClick={() => setIsMenuOpen(false)}
                        className="text-2xl md:text-4xl font-display font-black tracking-tighter group flex items-center gap-1"
                    >
                        NISHANT<span className="text-brutalist-pink font-mono text-lg group-hover:scale-110 transition-transform">.</span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-12">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-black uppercase tracking-widest hover:text-brutalist-pink transition-colors"
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

                    {/* Hamburger button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2.5 border-2 border-black bg-white shadow-[2px_2px_0_0_#000] active:shadow-none transition-all z-[101]"
                        aria-label="Toggle menu"
                    >
                        <div className="w-5 h-5 flex flex-col justify-center gap-[5px]">
                            <motion.span
                                animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 7 : 0 }}
                                className="block h-[2px] w-full bg-black origin-center"
                            />
                            <motion.span
                                animate={{ opacity: isMenuOpen ? 0 : 1, scaleX: isMenuOpen ? 0 : 1 }}
                                className="block h-[2px] w-full bg-black"
                            />
                            <motion.span
                                animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -7 : 0 }}
                                className="block h-[2px] w-full bg-black origin-center"
                            />
                        </div>
                    </button>
                </div>
            </nav>

            {/* Mobile menu — rendered as sibling OUTSIDE nav to avoid z-index clipping */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.18 }}
                        className="fixed inset-0 z-[99] lg:hidden flex flex-col"
                        style={{ top: '0', backgroundColor: '#f3f3f3' }}
                    >
                        {/* Spacer for the nav bar height */}
                        <div className="h-[64px] border-b-4 border-black" />

                        {/* Links */}
                        <div className="flex-1 flex flex-col items-center justify-center gap-6 p-8">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.06 }}
                                    className="text-5xl font-bebas tracking-widest uppercase text-black hover:text-brutalist-pink transition-colors border-b-2 border-transparent hover:border-black pb-1"
                                >
                                    {link.name}
                                </motion.a>
                            ))}

                            <motion.a
                                href="#contact"
                                onClick={() => setIsMenuOpen(false)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: navLinks.length * 0.06 }}
                                className="mt-4 brutalist-button bg-brutalist-yellow text-sm"
                            >
                                Let's Talk
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
