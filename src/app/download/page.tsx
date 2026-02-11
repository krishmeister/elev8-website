'use client';

import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Contact";
import { Lock, Gamepad2 } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const DownloadPage = () => {
    return (
        <main className="h-screen flex flex-col justify-between md:overflow-hidden overflow-y-auto bg-black text-white selection:bg-cyan-500 selection:text-black font-sans relative">
            <Navbar />

            {/* TRON Perspective Grid Floor - Absolute Bottom, Behind Everything (Z-0) */}
            <div
                className="absolute inset-x-0 bottom-0 h-[40vh] w-full pointer-events-none opacity-30 z-0"
                style={{
                    perspective: '500px',
                }}
            >
                <div
                    className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,243,255,0.2))]"
                />
                <motion.div
                    animate={{ backgroundPosition: ["0px 0px", "0px 100px"] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                    className="w-full h-[200%] absolute bottom-0 origin-bottom"
                    style={{
                        backgroundImage: `
                            linear-gradient(0deg, transparent 24%, rgba(0, 243, 255, .4) 25%, rgba(0, 243, 255, .4) 26%, transparent 27%, transparent 74%, rgba(0, 243, 255, .4) 75%, rgba(0, 243, 255, .4) 76%, transparent 77%, transparent), 
                            linear-gradient(90deg, transparent 24%, rgba(0, 243, 255, .4) 25%, rgba(0, 243, 255, .4) 26%, transparent 27%, transparent 74%, rgba(0, 243, 255, .4) 75%, rgba(0, 243, 255, .4) 76%, transparent 77%, transparent)
                        `,
                        backgroundSize: '100px 100px',
                        transform: 'rotateX(60deg) bg-bottom',
                        maskImage: 'linear-gradient(to top, black, transparent 80%)',
                        WebkitMaskImage: 'linear-gradient(to top, black, transparent 80%)',
                    }}
                />
            </div>

            {/* Main Content - Centered Flex Block (Z-10) */}
            <div className="flex-1 flex flex-col justify-center items-center w-full z-10 px-4 gap-8 pt-24 md:pt-36">

                {/* Header - Compact */}
                <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, ease: "backOut" }}
                    className="flex flex-col items-center justify-center text-center w-full z-20 gap-2"
                >
                    <h1 className="mx-auto font-orbitron font-black text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-cyan-400 animate-pulse tracking-widest uppercase drop-shadow-[0_0_15px_rgba(0,243,255,0.5)]">
                        SELECT PLATFORM
                    </h1>
                    <p className="w-fit mx-auto text-cyan-400/60 font-mono tracking-[0.2em] text-xs uppercase border-t border-cyan-900/50 pt-1">
                        // System Ready. Choose Deployment Vector.
                    </p>
                </motion.div>

                {/* Card Stack - Tight & Full Screen Optimization */}
                <div className="flex flex-col items-center w-full max-w-md mx-auto space-y-3 relative z-20">

                    {/* --- Active Group --- */}
                    <PlatformCard
                        href="https://play.google.com/store/apps/developer?id=MYSU+Tech&pli=1"
                        active={true}
                        delay={0.1}
                        glowColor="cyan"
                    >
                        <div className="flex items-center gap-4">
                            <div className="p-2 bg-white rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                                <Image
                                    src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg"
                                    alt="Google Play"
                                    width={32}
                                    height={32}
                                />
                            </div>
                            <div className="text-left">
                                <p className="text-[10px] text-cyan-300 font-mono uppercase tracking-widest">Get it on</p>
                                <GlitchText text="Google Play" className="text-xl font-bold font-sans text-white group-hover:text-cyan-100" />
                            </div>
                        </div>
                    </PlatformCard>

                    <PlatformCard
                        href="https://drive.google.com/drive/folders/1q9oblaHl5s4c43n42BagTE_TJrd2K2WV"
                        active={true}
                        delay={0.15}
                        glowColor="cyan"
                    >
                        <div className="flex items-center gap-4">
                            <div className="p-2 bg-white rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                                <Image
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png"
                                    alt="Microsoft"
                                    width={32}
                                    height={32}
                                    className="object-contain"
                                />
                            </div>
                            <div className="text-left">
                                <p className="text-[10px] text-cyan-300 font-mono uppercase tracking-widest">Get it from</p>
                                <GlitchText text="Microsoft" className="text-xl font-bold font-sans text-white group-hover:text-cyan-100" />
                            </div>
                        </div>
                    </PlatformCard>

                    <PlatformCard
                        href="/cricshot"
                        active={true}
                        delay={0.2}
                        glowColor="gold"
                        className="animate-border-pulse border-[#FFD700]/50"
                    >
                        {/* Fire Background for CricShot */}
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-yellow-600/20 opacity-50 pointer-events-none mix-blend-screen" />

                        <div className="flex items-center gap-4 relative z-10 w-full justify-between">
                            <div className="flex items-center gap-4">
                                <div className="p-2 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg shadow-[0_0_20px_rgba(255,165,0,0.5)]">
                                    <Gamepad2 className="w-8 h-8 text-black" />
                                </div>
                                <div className="text-left">
                                    <p className="text-[10px] text-yellow-400 font-mono uppercase tracking-widest">Play the Hit Game</p>
                                    <h3 className="text-2xl font-black font-orbitron italic text-white drop-shadow-[0_2px_0_rgba(255,165,0,1)]">
                                        CRICSHOT
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </PlatformCard>

                    {/* --- Divider --- */}
                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-900/50 to-transparent my-4" />

                    {/* --- Locked Group --- */}
                    <div className="space-y-3 opacity-80">
                        <PlatformCard
                            href="#"
                            active={false}
                            delay={0.25}
                            glowColor="gray"
                        >
                            <div className="flex items-center justify-between w-full opacity-60 hover:opacity-100 transition-opacity">
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-white/10 rounded-lg grayscale">
                                        <Image
                                            src="https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_logo_white.svg"
                                            alt="Apple"
                                            width={24}
                                            height={24}
                                        />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-[9px] text-gray-500 font-mono uppercase tracking-widest">Coming to</p>
                                        <h3 className="text-lg font-bold font-sans text-gray-400">App Store</h3>
                                    </div>
                                </div>

                                {/* LOCKED STATUS BADGE */}
                                <div className="group/badge relative px-2 py-1 rounded bg-black/50 border border-gray-700/50 backdrop-blur-sm overflow-hidden">
                                    <span className="relative z-10 font-mono text-[9px] tracking-widest text-gray-400 group-hover:text-red-400 transition-colors">
                                        <span className="group-hover:hidden">LOCKED</span>
                                        <span className="hidden group-hover:inline animate-pulse">DEV_IN_PROGRESS</span>
                                    </span>
                                    <div className="absolute inset-0 bg-red-900/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>
                        </PlatformCard>

                        <PlatformCard
                            href="#"
                            active={false}
                            delay={0.3}
                            glowColor="gray"
                        >
                            <div className="flex items-center justify-between w-full opacity-60 hover:opacity-100 transition-opacity">
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-white/10 rounded-lg grayscale">
                                        <Image
                                            src="https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_logo_white.svg"
                                            alt="Apple"
                                            width={24}
                                            height={24}
                                        />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-[9px] text-gray-500 font-mono uppercase tracking-widest">Coming to</p>
                                        <h3 className="text-lg font-bold font-sans text-gray-400">Mac App Store</h3>
                                    </div>
                                </div>

                                {/* LOCKED STATUS BADGE */}
                                <div className="group/badge relative px-2 py-1 rounded bg-black/50 border border-gray-700/50 backdrop-blur-sm overflow-hidden">
                                    <span className="relative z-10 font-mono text-[9px] tracking-widest text-gray-400 group-hover:text-red-400 transition-colors">
                                        <span className="group-hover:hidden">LOCKED</span>
                                        <span className="hidden group-hover:inline animate-pulse">DEV_IN_PROGRESS</span>
                                    </span>
                                    <div className="absolute inset-0 bg-red-900/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>
                        </PlatformCard>
                    </div>

                </div>
            </div>

            <Footer compact={true} />
        </main>
    );
};

// --- Glitch Text Component ---
const GlitchText = ({ text, className }: { text: string, className?: string }) => {
    return (
        <span className={`relative group inline-block ${className}`}>
            <span className="relative z-10">{text}</span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-red-500 opacity-0 group-hover:opacity-70 group-hover:translate-x-[2px] group-hover:skew-x-12 transition-all duration-100">
                {text}
            </span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-cyan-500 opacity-0 group-hover:opacity-70 group-hover:-translate-x-[2px] group-hover:-skew-x-12 transition-all duration-100 delay-75">
                {text}
            </span>
        </span>
    );
};

interface PlatformCardProps {
    children: React.ReactNode;
    active: boolean;
    delay: number;
    href: string;
    glowColor: 'cyan' | 'gold' | 'gray';
    className?: string;
}

const PlatformCard = ({
    children,
    active,
    delay,
    href,
    glowColor,
    className = ""
}: PlatformCardProps) => {
    // 1. Magnetic Snap Physics (Instant Response)
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // "Zero Latency" Config: Ultra-stiff spring with low mass
    const mouseX = useSpring(x, { stiffness: 1200, damping: 60, mass: 0.2 });
    const mouseY = useSpring(y, { stiffness: 1200, damping: 60, mass: 0.2 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["12deg", "-12deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-12deg", "12deg"]);

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        if (!active) return; // Disable tilt for locked cards
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXVal = e.clientX - rect.left;
        const mouseYVal = e.clientY - rect.top;
        const xPct = mouseXVal / width - 0.5;
        const yPct = mouseYVal / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    // Locked Shake Logic
    const [isShaking, setIsShaking] = useState(false);
    const router = useRouter(); // Using Navigation Router

    const handleClick = (e: React.MouseEvent) => {
        if (!active) {
            e.preventDefault();
            setIsShaking(true);
            setTimeout(() => setIsShaking(false), 500);
        } else if (href.startsWith('/')) {
            // Internal Link - Use Client Router for Instant Transition
            e.preventDefault();
            router.push(href);
        }
    };

    const getGlowColor = () => {
        if (!active) return 'border-red-500/20'; // Dim Red for Locked
        switch (glowColor) {
            case 'cyan': return 'group-hover:shadow-[0_0_30px_rgba(0,243,255,0.4)] group-hover:border-cyan-400';
            case 'gold': return 'group-hover:shadow-[0_0_40px_rgba(255,215,0,0.5)] group-hover:border-[#FFD700]';
            default: return 'group-hover:border-gray-600';
        }
    };

    const CardContent = (
        <motion.a
            href={active ? href : undefined}
            target={active && !href.startsWith('/') ? "_blank" : undefined}
            rel={active && !href.startsWith('/') ? "noopener noreferrer" : undefined}
            onClick={handleClick}
            onMouseMove={(e) => handleMouseMove(e as unknown as React.MouseEvent<HTMLDivElement>)}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX: active ? rotateX : 0,
                rotateY: active ? rotateY : 0,
            }}
            className={`
                relative w-full block rounded-xl p-[2px] group transition-all duration-75 ease-out
                ${active ? 'cursor-pointer active:scale-95' : 'cursor-not-allowed'}
            `}
        >
            {/* Visual Card Container */}
            <div className={`
                relative w-full h-full rounded-xl p-4 md:p-4 
                bg-black/60 backdrop-blur-xl border border-white/10 
                transition-all duration-75 ease-out overflow-hidden
                ${getGlowColor()}
                ${className}
            `}>
                {/* Locked "Signal Noise" Overlay */}
                {!active && (
                    <div
                        className="absolute inset-0 opacity-20 pointer-events-none z-0 mix-blend-overlay"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                        }}
                    />
                )}

                {/* Content */}
                <div className="relative z-10 w-full">
                    {children}
                </div>
            </div>
        </motion.a>
    );

    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: isShaking ? [0, -10, 10, -10, 10, 0] : 0 }}
            transition={{
                delay,
                duration: 0.5,
                x: { duration: 0.4 } // Shake duration
            }}
            style={{
                perspective: 1000,
            }}
            className="w-full"
        >
            {active && href.startsWith('/') ? (
                <Link href={href} legacyBehavior passHref prefetch={true}>
                    {CardContent}
                </Link>
            ) : (
                CardContent
            )}
        </motion.div>
    );
};

export default DownloadPage;
