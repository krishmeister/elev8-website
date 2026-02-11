'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

// Helper component to handle search params logic within a Suspense boundary
const NavbarContent = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle Hash & Query Param Scroll (Robust Cross-Page & Same-Page)
    useEffect(() => {
        const handleRobustScroll = () => {
            // Check for target param OR hash
            const targetParam = searchParams.get('target');
            const hash = typeof window !== 'undefined' ? window.location.hash.replace('#', '') : '';
            const target = targetParam || (hash ? hash : null);

            if (target) {
                const attemptScroll = () => {
                    const element = document.getElementById(target);
                    if (element) {
                        const headerOffset = 100;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.scrollY - headerOffset;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth"
                        });
                        return true;
                    }
                    return false;
                };

                // Instant attempt
                if (attemptScroll()) return;

                // Poll for lazy loaded content
                const interval = setInterval(() => {
                    if (attemptScroll()) {
                        clearInterval(interval);
                    }
                }, 100);

                const timeout = setTimeout(() => clearInterval(interval), 5000);

                return () => {
                    clearInterval(interval);
                    clearTimeout(timeout);
                };
            }
        };

        handleRobustScroll();
    }, [searchParams, pathname]); // Re-run on path change/params

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        // If NOT on homepage, handle cross-page section navigation
        if (pathname !== '/') {
            if (href.startsWith('/#')) {
                e.preventDefault();
                const targetId = href.replace('/#', '');
                // Navigate to homepage with query param for more robust scrolling
                router.push(`/?target=${targetId}`, { scroll: false });
                setIsOpen(false);
                return;
            }
        }

        // On homepage
        if (href.startsWith('/#')) {
            const targetId = href.replace('/#', '');
            const element = document.getElementById(targetId);

            if (element) {
                e.preventDefault();
                const headerOffset = 100;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });

                // Manually update URL without jumping
                window.history.pushState({}, '', href);
            }
        }
        else if (href === '/') {
            if (pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
        setIsOpen(false);
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
                    <Link href="/" className="flex items-center gap-2 group ml-4" onClick={(e) => handleLinkClick(e, '/')}>
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
                        {[
                            { name: 'Home', href: '/' },
                            { name: 'Team', href: '/#team' },
                            { name: 'Games', href: '/#games' },
                            { name: 'Roadmap', href: '/roadmap' },
                            { name: 'Tokenomics', href: '/tokenomics' },
                            { name: 'Whitepaper', href: '/whitepaper' }
                        ].map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                scroll={false}
                                onClick={(e) => handleLinkClick(e, item.href)}
                                className="relative text-xs font-bold font-orbitron uppercase tracking-widest text-white/90 transition-all duration-300 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] group"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full box-shadow-[0_0_8px_cyan]" />
                            </Link>
                        ))}
                        {/* CTA Button (Liquid Cyber Style) */}
                        <button className="relative px-8 py-3 rounded-full font-orbitron font-black text-xs uppercase tracking-widest bg-transparent border-2 border-cyan-500 text-cyan-400 overflow-hidden group hover:text-black hover:border-cyan-400 transition-colors duration-300 shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:shadow-[0_0_25px_rgba(34,211,238,0.6)]">
                            <span className="relative z-10 group-hover:text-black transition-colors duration-300 flex items-center gap-2">
                                <Zap size={16} className="group-hover:fill-black transition-colors duration-300" />
                                BUY $ELEV8
                            </span>
                            <div className="absolute inset-0 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shimmer" />
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
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="md:hidden fixed inset-0 z-40 bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center"
                >
                    <button
                        className="absolute top-6 right-6 text-white hover:text-cyan-400 transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        <X size={40} />
                    </button>

                    <nav className="flex flex-col items-center gap-8">
                        {[
                            { name: 'Home', href: '/' },
                            { name: 'Team', href: '/#team' },
                            { name: 'Games', href: '/#games' },
                            { name: 'Roadmap', href: '/roadmap' },
                            { name: 'Tokenomics', href: '/tokenomics' },
                            { name: 'Whitepaper', href: '/whitepaper' },
                            { name: 'Contact', href: '/#contact' }
                        ].map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-2xl font-orbitron font-bold uppercase tracking-wider text-white hover:text-cyan-400 hover:scale-110 transition-all"
                                onClick={(e) => {
                                    setIsOpen(false);
                                    handleLinkClick(e, item.href);
                                }}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile CTA */}
                    <div className="mt-12">
                        <button className="relative px-8 py-4 rounded-full font-orbitron font-black text-sm uppercase tracking-widest bg-gradient-to-r from-cyan-500 to-blue-600 text-white overflow-hidden group hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                            <span className="relative z-10 flex items-center gap-2">
                                <Zap size={18} className="fill-current" />
                                BUY $ELEV8
                            </span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </button>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
};

const Navbar = () => {
    return (
        <Suspense fallback={<div className="fixed top-0 w-full h-20 bg-black/50 backdrop-blur-xl z-50" />}>
            <NavbarContent />
        </Suspense>
    );
};

export default Navbar;
