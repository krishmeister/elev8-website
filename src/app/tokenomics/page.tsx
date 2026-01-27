'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad, Terminal, Shield, Scale, Trophy, Lock, Wallet } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Contact';

export default function TokenomicsPage() {
    return (
        <main className="min-h-screen w-full bg-black text-white relative overflow-hidden font-space selection:bg-cyan-500 selection:text-black">
            <Navbar />

            {/* 1. FIXED BACKGROUND (-z-10) */}
            <div className="fixed inset-0 -z-10 bg-black">
                <div className="absolute inset-0 bg-[url('/hex-grid.svg')] bg-[length:50px_50px] opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

                {/* VISUAL UPGRADE 3: AMBIENT SPOTLIGHTS */}
                {/* Top Left: Massive Purple Orb */}
                <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px]" />
                {/* Bottom Right: Massive Cyan Orb */}
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[100px]" />
            </div>

            {/* 2. MAIN CONTENT WRAPPER */}
            <div className="relative z-0 pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-20">

                {/* SECTION 1: HERO HEADER */}
                <header className="text-center flex flex-col items-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-6xl md:text-8xl font-black tracking-tighter mb-6 glitch-text"
                    >
                        THE $ELEV8 ECONOMY
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-gray-400 max-w-3xl font-light"
                    >
                        The fuel for the decentralized, hardware-free spatial web.
                    </motion.p>
                </header>

                {/* VISUAL UPGRADE 1: STATS HUD (COMMAND DECK) */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="w-full max-w-5xl mx-auto"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { label: "TOTAL SUPPLY", value: "1,000,000,000" },
                            { label: "CIRCULATING", value: "95%" },
                            { label: "RESERVE", value: "15%" },
                            { label: "NETWORK", value: "SOLANA" }
                        ].map((stat, i) => (
                            <div
                                key={i}
                                className="bg-white/5 border border-white/10 p-6 rounded-lg backdrop-blur-md flex flex-col items-center justify-center text-center gap-2 hover:bg-white/10 transition-colors"
                            >
                                <span className="text-xs text-gray-400 tracking-widest font-mono">{stat.label}</span>
                                <span className="text-2xl font-mono text-cyan-400 font-bold">{stat.value}</span>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* VISUAL UPGRADE 2: MOTION ENGINE (ECOSYSTEM DIAGRAM) */}
                {/* Added 'relative' to verify Z-stacking for connectors */}
                <section className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 items-center py-10">

                    {/* SVG CONNECTORS (Background) */}
                    {/* Visible only on Large screens where layout is 3-col */}
                    <div className="hidden lg:block absolute inset-0 pointer-events-none -z-10">
                        <svg className="w-full h-full">
                            <defs>
                                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="transparent" />
                                    <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.3" />
                                    <stop offset="100%" stopColor="transparent" />
                                </linearGradient>
                            </defs>
                            {/* Lines radiating from center (approx 50% 50%) to side columns */}
                            {/* Creating a dynamic "X" or cross-beams */}
                            <path d="M 33% 20% L 50% 50% L 66% 20%" fill="none" stroke="url(#lineGrad)" strokeWidth="1" className="opacity-50" />
                            <path d="M 33% 80% L 50% 50% L 66% 80%" fill="none" stroke="url(#lineGrad)" strokeWidth="1" className="opacity-50" />
                        </svg>
                    </div>

                    {/* COLUMN 1: USERS (Left) */}
                    <div className="flex flex-col gap-12 lg:gap-24">
                        {/* Card A: Player Utility */}
                        <EcoCard
                            icon={<Trophy className="w-6 h-6 text-cyan-400" />}
                            title="PLAYER UTILITY"
                            desc="Skill-to-Earn in Wager Matches. Buy Skins & Battle Passes."
                            delay={0.3}
                            align="right"
                        />
                        {/* Card B: Developer Access */}
                        <EcoCard
                            icon={<Terminal className="w-6 h-6 text-purple-400" />}
                            title="DEVELOPER ACCESS"
                            desc="Burn tokens to access SDK. Earn rev-share on game volume."
                            delay={0.4}
                            align="right"
                        />
                    </div>

                    {/* COLUMN 2: THE ENGINE (Center Animation) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="relative flex flex-col items-center justify-center py-10 lg:py-0"
                    >
                        {/* Rings */}
                        <div className="absolute inset-0 flex items-center justify-center -z-10">
                            <div className="w-[300px] h-[300px] rounded-full border border-cyan-500/20 animate-[spin_10s_linear_infinite]" />
                            <div className="absolute w-[250px] h-[250px] rounded-full border border-purple-500/20 animate-[spin_15s_linear_infinite_reverse]" />
                            {/* Pulse Effect for Center */}
                            <div className="absolute w-40 h-40 rounded-full bg-cyan-500/20 blur-xl animate-pulse" />
                        </div>

                        {/* 3D Coin Representation */}
                        <div className="relative w-44 h-44 preserve-3d animate-[float_6s_ease-in-out_infinite]">
                            <div className="relative w-full h-full rounded-full bg-gradient-to-tr from-gray-900 to-black border-2 border-cyan-500/30 flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.4)] group">
                                <div className="text-4xl font-black italic tracking-widest text-white group-hover:scale-110 transition-transform duration-500 text-shadow-glow">$ELEV8</div>
                            </div>
                        </div>

                        <div className="mt-8 text-cyan-400 font-mono text-sm tracking-[0.3em] glow-text animate-pulse">MOTION ENGINE</div>
                    </motion.div>

                    {/* COLUMN 3: NETWORK (Right) */}
                    <div className="flex flex-col gap-12 lg:gap-24">
                        {/* Card C: Staking */}
                        <EcoCard
                            icon={<Lock className="w-6 h-6 text-green-400" />}
                            title="STAKING REWARDS"
                            desc="Lock tokens to secure the network and earn high-yield APY."
                            delay={0.6}
                            align="left"
                        />
                        {/* Card D: Governance */}
                        <EcoCard
                            icon={<Scale className="w-6 h-6 text-yellow-400" />}
                            title="GOVERNANCE"
                            desc="DAO Voting rights on protocol upgrades and treasury grants."
                            delay={0.7}
                            align="left"
                        />
                    </div>
                </section>

                {/* SECTION 4 (New): ACQUISITION PORTAL */}
                <section className="w-full max-w-7xl mx-auto my-32 p-[1px] rounded-3xl bg-gradient-to-r from-cyan-500/50 via-purple-500/50 to-cyan-500/50 relative group">
                    <div className="absolute inset-0 bg-purple-600/30 blur-[150px] -z-10" />

                    <div className="h-full w-full bg-black/80 backdrop-blur-xl rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">

                        {/* Left Side: Pitch */}
                        <div className="flex-1 text-center md:text-left z-10">
                            <h2 className="text-4xl md:text-5xl font-black font-orbitron mb-4 text-white">ACQUIRE THE ASSET.</h2>
                            <p className="text-gray-300 font-inter text-lg max-w-xl">
                                Secure your position in the hardware-free spatial economy. Early participants gain governance rights and staking priority.
                            </p>
                        </div>

                        {/* Right Side: Action */}
                        <div className="flex flex-col items-center gap-6 z-10">
                            <button className="relative overflow-hidden rounded-full px-12 py-6 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold font-mono text-xl tracking-wider uppercase shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:shadow-[0_0_60px_rgba(139,92,246,0.8)] hover:scale-105 transition-all duration-300 group">
                                <span className="relative z-10 flex items-center gap-3">
                                    <Wallet className="w-6 h-6 fill-current" />
                                    BUY $ELEV8 NOW
                                </span>
                                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent ease-in-out" />
                            </button>


                        </div>
                    </div>
                </section>

            </div>

            {/* 3. FOOTER */}
            <Footer />
        </main>
    );
}

// ------------------------------------------------------------------
// HELPER COMPONENTS
// ------------------------------------------------------------------

function EcoCard({ icon, title, desc, delay, align }: { icon: React.ReactNode, title: string, desc: string, delay: number, align: 'left' | 'right' }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: align === 'right' ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay }}
            className={`group relative p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm 
                hover:bg-white/10 hover:scale-105 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] 
                transition-all duration-300 overflow-hidden text-${align === 'right' ? 'right' : 'left'}`}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className={`relative flex items-center gap-4 ${align === 'right' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className="p-3 flex-shrink-0 rounded-lg bg-black/50 border border-white/10 group-hover:border-cyan-500/50 transition-colors shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                    {icon}
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-1 group-hover:text-cyan-400 transition-colors">{title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
                </div>
            </div>
        </motion.div>
    );
}
