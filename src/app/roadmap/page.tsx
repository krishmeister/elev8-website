'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, Lock, Unlock, ArrowRight, Zap, Target, Radio } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Contact';

const phases = [
    {
        phase: "Phase 1: Q1 2026",
        badge: "Q1 2026 // DEPLOYED",
        badgeStyle: "bg-cyan-500/10 border-cyan-400 text-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.4)]",
        title: "Live & Expanding",
        status: "COMPLETED",
        statusColor: "text-emerald-400",
        glow: "shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)]",
        border: "border-cyan-500",
        bg: "bg-gradient-to-r from-cyan-900/20 to-transparent hover:from-cyan-900/30",
        opacity: "opacity-100",
        icon: <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />,
        connector: "solid",
        items: [
            "Vision AI Motion Engine (Sub-30ms)",
            "CricShot Flagship Launch (Android/Win)",
            "Unity Motion SDK (Internal)"
        ]
    },
    {
        phase: "Phase 2: Q2 2026",
        badge: "Q2 2026 // LOADING",
        badgeStyle: "bg-orange-500/10 border-orange-400 text-orange-300 shadow-[0_0_10px_rgba(249,115,22,0.4)]",
        title: "Competitive Depth",
        status: "IN PROGRESS",
        statusColor: "text-yellow-400",
        glow: "shadow-[0_0_20px_rgba(249,115,22,0.2)] hover:shadow-[0_0_40px_rgba(249,115,22,0.4)]",
        border: "border-orange-500 animate-pulse",
        bg: "bg-white/5 hover:bg-orange-950/20",
        opacity: "opacity-90",
        icon: <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 animate-pulse" />,
        connector: "solid",
        items: [
            "CricShot v2 (Precision Aiming)",
            "Global Leaderboards & Profiles",
            "Match Replays & Highlights"
        ]
    },
    {
        phase: "Phase 3: Q3 2026",
        badge: "Q3 2026 // ENCRYPTED",
        badgeStyle: "bg-gray-800 border-gray-700 text-gray-500 group-hover:bg-purple-900/20 group-hover:border-purple-500 group-hover:text-purple-300 transition-colors",
        title: "The Motion Economy",
        status: "LOCKED",
        statusColor: "text-gray-400 group-hover:text-purple-400 transition-colors",
        glow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]",
        border: "border-white/10 border-dashed group-hover:border-purple-500/50 group-hover:border-solid",
        bg: "bg-white/5 hover:from-white/10 hover:to-purple-900/20 bg-gradient-to-br",
        opacity: "opacity-80 hover:opacity-100",
        icon: (
            <>
                <Lock className="w-5 h-5 text-gray-500 flex-shrink-0 group-hover:hidden" />
                <Unlock className="w-5 h-5 text-purple-400 flex-shrink-0 hidden group-hover:block animate-bounce" />
            </>
        ),
        connector: "dotted",
        items: [
            "$ELEV8 Token Launch",
            "Skill-to-Earn Wager Matches",
            "Vision Oracle (Anti-Cheat)"
        ]
    },
    {
        phase: "Phase 4: Q4 2026",
        badge: "Q4 2026 // ENCRYPTED",
        badgeStyle: "bg-gray-800 border-gray-700 text-gray-500 group-hover:bg-red-900/20 group-hover:border-red-500 group-hover:text-red-300 transition-colors",
        title: "The Spectator Layer",
        status: "LOCKED",
        statusColor: "text-gray-400 group-hover:text-red-400 transition-colors",
        glow: "hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]",
        border: "border-white/10 border-dashed group-hover:border-red-500/50 group-hover:border-solid",
        bg: "bg-white/5 hover:from-white/10 hover:to-red-900/20 bg-gradient-to-br",
        opacity: "opacity-80 hover:opacity-100",
        icon: (
            <>
                <Lock className="w-5 h-5 text-gray-500 flex-shrink-0 group-hover:hidden" />
                <Unlock className="w-5 h-5 text-red-500 flex-shrink-0 hidden group-hover:block animate-bounce" />
            </>
        ),
        connector: "dotted",
        items: [
            "Live Tournament Streaming",
            "Prediction Markets & Scouting",
            "First Global Elev8 Championship"
        ]
    },
    {
        phase: "Phase 5: 2027 & Beyond",
        badge: "2027 // CLASSIFIED",
        badgeStyle: "bg-gray-800 border-gray-700 text-gray-500 group-hover:bg-amber-900/20 group-hover:border-amber-400 group-hover:text-amber-300 transition-colors",
        title: "Decentralized Network",
        status: "LOCKED",
        statusColor: "text-gray-400 group-hover:text-amber-300 transition-colors",
        glow: "hover:shadow-[0_0_30px_rgba(252,211,77,0.3)]",
        border: "border-white/10 border-dashed group-hover:border-amber-400/50 group-hover:border-solid",
        bg: "bg-white/5 hover:from-white/10 hover:to-amber-900/20 bg-gradient-to-br",
        opacity: "opacity-80 hover:opacity-100",
        icon: (
            <>
                <Lock className="w-5 h-5 text-gray-500 flex-shrink-0 group-hover:hidden" />
                <Unlock className="w-5 h-5 text-amber-300 flex-shrink-0 hidden group-hover:block animate-bounce" />
            </>
        ),
        connector: "dotted",
        items: [
            "Public SDK for Devs (Build-to-Earn)",
            "Smart TV / Living Room Expansion",
            "Elev8 DAO Governance"
        ]
    }
];

export default function RoadmapPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black">
            <Navbar />

            {/* Background Layers */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                {/* Fixed Background Pattern */}
                <div className="fixed inset-0 z-0 opacity-20 pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}>
                </div>
                {/* Hexagon Grid Overlay */}
                <div className="absolute inset-0 bg-[url('/hex-grid.svg')] opacity-5 bg-[length:40px_40px]" />
                {/* Deep Gradient Atmosphere */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black opacity-80" />
            </div>

            <div className="relative z-10 pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center">

                {/* Header / Hero */}
                <div className="flex flex-col items-center justify-center text-center w-full max-w-4xl mx-auto pb-16 px-4 z-10 relative">
                    {/* 1. The Badge */}
                    <div className="mb-8 inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse mr-2" />
                        <span className="text-green-400 text-xs font-mono tracking-widest uppercase">
                            Current Phase: Q1 2026 // Scaling
                        </span>
                    </div>
                    {/* 2. The Title */}
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-500 mb-6 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] whitespace-nowrap">
                        BUILDING THE <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-200 to-gray-600">MOTION LAYER</span>
                    </h1>
                    {/* 3. The Subtitle */}
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        From a breakout game to a global decentralized motion network.
                    </p>
                </div>

                {/* Vertical Timeline Container */}
                <div className="relative w-full max-w-5xl pl-8 md:pl-0">
                    {/* Central Spine */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 via-purple-500 to-gray-800 md:-translate-x-1/2">
                        <div className="absolute top-0 bottom-0 w-full animate-pulse bg-white/30 blur-[1px]" />
                    </div>

                    <div className="flex flex-col gap-16 md:gap-12">
                        {phases.map((phase, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Card Side */}
                                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-10' : 'md:pr-10'} pl-8`}>
                                    <div className={`group relative ${phase.bg} backdrop-blur-md border p-6 md:p-8 rounded-2xl overflow-hidden transition-all duration-500 ${phase.border} ${phase.glow} ${phase.opacity} hover:-translate-y-2 hover:scale-[1.02] perspective-1000`}>

                                        {/* Badge */}
                                        <div className={`inline-block px-4 py-1 rounded-full border mb-4 text-xs md:text-sm font-bold tracking-wider font-mono ${phase.badgeStyle}`}>
                                            {phase.badge}
                                        </div>

                                        {/* Header */}
                                        <div className="flex justify-between items-start mb-6 border-b border-white/5 pb-4">
                                            <div>
                                                <h2 className="font-space font-bold text-2xl md:text-3xl text-white uppercase tracking-wide">
                                                    {phase.title}
                                                </h2>
                                            </div>
                                            <div className="bg-black/40 p-2 rounded-lg border border-white/5 transition-all duration-300 group-hover:bg-black/60">
                                                {phase.icon}
                                            </div>
                                        </div>

                                        {/* Items */}
                                        <ul className="space-y-4 font-mono text-sm text-gray-300">
                                            {phase.items.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    {/* We reuse the phase.icon logic but simplified for list markers, or keep existing markers? 
                                                        User request said "gamify the cards", maintaining existing list style for clarity but ensures colors match status. 
                                                    */}
                                                    <span className={`mt-1 w-1.5 h-1.5 rounded-full ${phase.status === 'COMPLETED' ? 'bg-cyan-400' : phase.status === 'IN PROGRESS' ? 'bg-orange-400' : 'bg-gray-600 group-hover:bg-white'} transition-colors`} />
                                                    <span className="leading-tight pt-0 group-hover:text-white transition-colors">{item}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Status Badge */}
                                        <div className={`relative mt-6 w-fit md:absolute md:top-4 md:right-4 md:mt-0 inline-flex items-center gap-2 px-3 py-1 bg-black/50 rounded text-[10px] font-bold tracking-widest ${phase.statusColor} border border-white/5`}>
                                            {phase.status}
                                        </div>
                                    </div>
                                </div>

                                {/* Circuit Connector (Desktop) */}
                                <div className={`hidden md:flex absolute top-1/2 -translate-y-1/2 w-8 h-[1px] z-0 ${index % 2 === 0 ? 'left-1/2' : 'left-1/2 -translate-x-full'}`}>
                                    <div className={`w-full h-full ${phase.connector === 'dotted' ? 'border-t border-dashed border-gray-600' : 'bg-cyan-500/50 shadow-[0_0_8px_cyan]'}`} />
                                </div>

                                {/* Center Dot */}
                                <div className={`absolute left-[-5px] md:left-1/2 top-10 md:top-1/2 md:-translate-y-1/2 w-3 h-3 rounded-full border-2 z-20 md:-translate-x-1/2 ${phase.connector === 'dotted' ? 'bg-black border-gray-600' : 'bg-cyan-500 border-white shadow-[0_0_15px_cyan] animate-pulse'}`} />

                                {/* Connector Line (Mobile) */}
                                <div className={`md:hidden absolute left-0 top-11 w-8 h-[1px] ${phase.connector === 'dotted' ? 'border-t border-dashed border-gray-600' : 'bg-cyan-500/50'}`} />

                                {/* Empty Side for Balance */}
                                <div className="hidden md:block w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* North Star CTA */}
                <div className="mt-32 text-center">
                    <h2 className="text-3xl md:text-4xl font-space font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-600">
                        Every screen is interactive. <br /> Every movement is rewarded.
                    </h2>
                    <Link href="/whitepaper">
                        <button className="group relative px-8 py-4 bg-white text-black font-space font-bold rounded-full overflow-hidden hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                            <span className="relative z-10 flex items-center gap-2">
                                READ WHITEPAPER <ArrowRight size={18} />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </button>
                    </Link>
                </div>

            </div>

            <Footer compact />
        </main>
    );
}
