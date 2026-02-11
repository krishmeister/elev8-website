'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Download, Scan, Fingerprint, FileText, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Contact';

interface WhitepaperClientProps {
    pdfSize: string;
}

export default function WhitepaperClient({ pdfSize }: WhitepaperClientProps) {
    return (
        // Root container: Relative position, min-h-screen
        <main className="min-h-screen w-full relative flex flex-col text-white font-space selection:bg-cyan-500 selection:text-black">
            <Navbar />

            {/* 1. FIXED BACKGROUND (-z-10) */}
            {/* This ensures the background never overlaps the Navbar (z-50) */}
            <div className="fixed inset-0 -z-10 bg-black">
                <div className="absolute inset-0 bg-[url('/hex-grid.svg')] bg-[length:50px_50px] opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
            </div>

            {/* 2. MAIN CONTENT (z-0 but with pt-32 to clear Navbar) */}
            <div className="flex-1 w-full pt-32 pb-20 px-6 md:px-12 flex flex-col items-center justify-center">
                <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* LEFT COLUMN: THE DIGITAL ASSET (3D Glass Card) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center"
                    >
                        {/* Glass Document Card */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-[320px] h-[460px] md:w-[400px] md:h-[580px] rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-md shadow-[0_0_40px_rgba(6,182,212,0.1)] flex flex-col items-center justify-between p-8 group perspective-1000 transform-style-3d hover:shadow-[0_0_60px_rgba(6,182,212,0.2)] transition-shadow"
                        >
                            {/* Decorative Lines */}
                            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
                            <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

                            {/* Top: Classified Badge */}
                            <div className="w-full flex justify-between items-start">
                                <Scan className="text-cyan-500/50 w-8 h-8" />
                                <div className="text-right">
                                    <div className="text-cyan-400 font-mono text-xs tracking-widest mb-1">CLASSIFIED // V1.0</div>
                                    <div className="text-[10px] text-gray-500 font-mono">ENCRYPTED</div>
                                </div>
                            </div>

                            {/* Center: Logo */}
                            <div className="text-center">
                                <h1 className="text-7xl md:text-8xl font-black tracking-tighter text-white glitch-text mb-2">ELEV8</h1>
                                <div className="text-xs font-mono text-gray-500 tracking-[0.4em] uppercase">The Motion Layer</div>
                            </div>

                            {/* Bottom: Fingerprint */}
                            <div className="w-full flex flex-col items-center gap-4">
                                <Fingerprint className="text-white/20 w-16 h-16" />
                                <div className="text-center">
                                    <div className="text-white font-bold tracking-widest text-sm">TECHNICAL WHITEPAPER</div>
                                    <div className="text-[10px] text-gray-500 font-mono mt-1">ID: 8A-29F-X1</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT COLUMN: THE CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col justify-center"
                    >
                        <h2 className="text-5xl md:text-6xl font-black mb-6 leading-[0.9] text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500">
                            THE BLUEPRINT FOR <br />
                            <span className="text-cyan-500">THE MOTION LAYER.</span>
                        </h2>
                        <p className="text-lg text-gray-400 mb-12 max-w-xl">
                            Download the technical specification for the decentralized protocol powering the future of spatial gaming.
                        </p>

                        {/* What's Covered List */}
                        <div className="space-y-8 mb-12">
                            {[
                                { id: "01", title: "THE FRICTION", desc: "Why hardware barriers and walled gardens are killing VR/AR adoption." },
                                { id: "02", title: "THE VISION CORE", desc: "Deep dive into our sub-30ms AI tracking engine." },
                                { id: "03", title: "THE $ELEV8 ECONOMY", desc: "Token utility, governance, and skill-to-earn mechanics." },
                                { id: "04", title: "ROADMAP", desc: "From breakout game to global decentralized infrastructure." },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + (i * 0.1) }}
                                    className="flex gap-6 group"
                                >
                                    <span className="font-mono text-cyan-500/50 text-sm group-hover:text-cyan-400 transition-colors">
                                        // {item.id}
                                    </span>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1 group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                                        <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Primary Action */}
                        <div className="w-full flex flex-col items-center md:items-start">
                            <a
                                href="/Elev8_Whitepaper_v1.pdf"
                                download="Elev8_Whitepaper_v1.pdf"
                                className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-cyan-500 text-black font-bold text-xl rounded hover:bg-cyan-400 transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] hover:-translate-y-1"
                            >
                                <Download className="w-6 h-6" />
                                DOWNLOAD PDF
                            </a>
                            <div className="mt-4 flex items-center justify-center md:justify-start gap-3 text-xs font-mono text-gray-500">
                                <span>PDF FILE</span>
                                <span className="w-1 h-1 bg-gray-700 rounded-full" />
                                <span>{pdfSize}</span>
                                <span className="w-1 h-1 bg-gray-700 rounded-full" />
                                <span>UPDATED Q1 2026</span>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* 3. FOOTER INTEGRATION */}
            <Footer />
        </main>
    );
}
