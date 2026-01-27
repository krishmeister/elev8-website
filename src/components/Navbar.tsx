'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
    { label: 'Home', href: '/', scrollId: 'hero' },
    { label: 'Team', href: '/#team', scrollId: 'team' },
    { label: 'Games', href: '/#games', scrollId: 'games' },
    { label: 'Roadmap', href: '/roadmap', scrollId: null },
    { label: 'Tokenomics', href: '/tokenomics', scrollId: null },
    { label: 'Whitepaper', href: '/whitepaper', scrollId: null },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Smart scroll handler: scroll if on homepage, otherwise let Link navigate
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string | null) => {
        if (pathname === '/' && targetId) {
            e.preventDefault();
            if (targetId === 'hero') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                const element = document.getElementById(targetId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
        setIsOpen(false); // Close mobile menu
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "circOut" }}
            className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${scrolled
                ? 'bg-black/80 backdrop-blur-xl border-white/10 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
                : 'bg-gradient-to-b from-black/90 via-black/50 to-transparent border-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo (Neon Sign Upgrade) */}
                    <Link href="/" className="flex items-center gap-2 group ml-4">
                        <div className="relative h-12 md:h-20 w-auto transition-transform duration-300 group-hover:scale-105">
                            <Image
                                src="/elev8-logo.png"
                                alt="Elev8 Logo"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-auto h-full object-contain scale-150 origin-left drop-shadow-[0_0_12px_rgba(255,80,0,0.8)] group-hover:drop-shadow-[0_0_25px_rgba(255,165,0,0.8)] transition-all duration-300"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                onClick={(e) => handleNavClick(e, item.scrollId)}
                                className="relative text-sm font-bold font-orbitron uppercase tracking-widest text-white/90 transition-all duration-300 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] group"
                            >
                                {item.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full box-shadow-[0_0_8px_cyan]" />
                            </Link>
                        ))}

                        {/* "Buy $ELEV8" Liquid Cyber CTA */}
                        <button className="relative group overflow-hidden rounded-full px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold font-mono tracking-wider uppercase shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(139,92,246,0.6)] hover:scale-105 hover:rotate-1 transition-all duration-300">
                            <span className="relative z-10 flex items-center gap-2">
                                <Zap className="w-4 h-4 fill-current" />
                                BUY $ELEV8
                            </span>
                            {/* The Shine Effect */}
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent ease-in-out" />
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white hover:text-cyan-400 transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu - Full Screen Glassmorphic Overlay */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="md:hidden fixed inset-0 top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-xl z-40 flex flex-col items-center justify-center"
                >
                    {/* Close button at top right */}
                    <button
                        className="absolute top-6 right-6 text-white hover:text-cyan-400 transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        <X size={32} />
                    </button>

                    <div className="flex flex-col items-center gap-8 p-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                onClick={(e) => handleNavClick(e, item.scrollId)}
                                className="text-2xl font-orbitron font-bold uppercase tracking-wider text-white hover:text-cyan-400 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-all"
                            >
                                {item.label}
                            </Link>
                        ))}

                        {/* Mobile CTA Button */}
                        <button className="mt-4 relative group overflow-hidden rounded-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold font-mono tracking-wider uppercase shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(139,92,246,0.6)] hover:scale-105 transition-all duration-300">
                            <span className="relative z-10 flex items-center gap-2">
                                <Zap className="w-5 h-5 fill-current" />
                                BUY $ELEV8
                            </span>
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent ease-in-out" />
                        </button>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;
