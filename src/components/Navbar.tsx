'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
                    <div className="hidden md:flex items-center gap-10">
                        {['Home', 'Games', 'Team', 'Docs'].map((item) => (
                            <Link
                                key={item}
                                href={item === 'Home' ? '/' : `#${item.toLowerCase()}`}
                                className="relative text-sm font-bold font-orbitron uppercase tracking-widest text-white/90 transition-all duration-300 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] group"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full box-shadow-[0_0_8px_cyan]" />
                            </Link>
                        ))}

                        <button className="relative px-8 py-3 rounded-full font-orbitron font-black text-xs uppercase tracking-widest bg-transparent border-2 border-cyan-500 text-cyan-400 overflow-hidden group hover:text-black hover:border-cyan-400 transition-colors duration-300 shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:shadow-[0_0_25px_rgba(34,211,238,0.6)]">
                            <span className="relative z-10 group-hover:text-black transition-colors duration-300">Source</span>
                            <div className="absolute inset-0 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
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

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-t border-white/10"
                >
                    <div className="flex flex-col p-8 gap-6">
                        {['Home', 'Games', 'Team', 'Docs'].map((item) => (
                            <Link
                                key={item}
                                href={item === 'Home' ? '/' : `#${item.toLowerCase()}`}
                                className="text-xl font-orbitron font-bold uppercase tracking-wider text-white hover:text-cyan-400 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-all"
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}
                        <button className="w-full py-4 mt-4 rounded-xl font-orbitron font-black text-sm uppercase tracking-widest bg-cyan-500 text-black hover:bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all">
                            Source
                        </button>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;
