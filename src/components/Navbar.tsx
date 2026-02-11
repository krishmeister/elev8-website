'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const Navbar = () => {
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
            const hash = window.location.hash.replace('#', '');
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
                            { name: 'Contact', href: '/#contact' }
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
                        {[
                            { name: 'Home', href: '/' },
                            { name: 'Team', href: '/#team' },
                            { name: 'Games', href: '/#games' },
                            { name: 'Contact', href: '/#contact' }
                        ].map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                scroll={false}
                                className="text-xl font-orbitron font-bold uppercase tracking-wider text-white hover:text-cyan-400 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-all text-left"
                                onClick={(e) => {
                                    setIsOpen(false);
                                    handleLinkClick(e, item.href);
                                }}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;
