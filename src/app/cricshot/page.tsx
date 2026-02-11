'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Contact";
import Image from 'next/image';

const CricShotPage = () => {
    return (
        <main className="h-screen flex flex-col justify-between md:overflow-hidden overflow-y-auto bg-black text-white selection:bg-orange-500 selection:text-black font-sans relative">
            <Navbar />

            {/* --- IMMERSIVE BACKGROUND --- */}

            {/* 1. Video Layer */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/20 z-10" /> {/* Minimal Dimmer */}
                {/* Cinematic Gradient Overlay (Top/Bottom Only) */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 z-20" />

                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-100" // Maximum Visibility
                >
                    <source src="/cricshot-bg-loop.mp4" type="video/mp4" />
                </video>
            </div>

            {/* 2. Retro Grid Floor (Orange Tint) */}
            <div
                className="absolute inset-x-0 bottom-0 h-[30vh] w-full pointer-events-none opacity-40 z-0"
                style={{
                    perspective: '500px',
                }}
            >
                <div
                    className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(255,165,0,0.2))]"
                />
                <motion.div
                    animate={{ backgroundPosition: ["0px 0px", "0px 100px"] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                    className="w-full h-[200%] absolute bottom-0 origin-bottom"
                    style={{
                        backgroundImage: `
                            linear-gradient(0deg, transparent 24%, rgba(255, 165, 0, .4) 25%, rgba(255, 165, 0, .4) 26%, transparent 27%, transparent 74%, rgba(255, 165, 0, .4) 75%, rgba(255, 165, 0, .4) 76%, transparent 77%, transparent), 
                            linear-gradient(90deg, transparent 24%, rgba(255, 165, 0, .4) 25%, rgba(255, 165, 0, .4) 26%, transparent 27%, transparent 74%, rgba(255, 165, 0, .4) 75%, rgba(255, 165, 0, .4) 76%, transparent 77%, transparent)
                        `,
                        backgroundSize: '100px 100px',
                        transform: 'rotateX(60deg) bg-bottom',
                        maskImage: 'linear-gradient(to top, black, transparent 80%)',
                        WebkitMaskImage: 'linear-gradient(to top, black, transparent 80%)',
                    }}
                />
            </div>

            {/* --- HERO CONTENT --- */}
            <div className="flex-1 flex flex-col justify-center items-center text-center w-full z-10 gap-6 px-4 relative mt-16 md:mt-20">
                {/* Clean Header Separator */}
                <div className="w-[90%] md:w-full max-w-2xl mx-auto h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-8" />

                {/* Hero Logo - Static & Dominant */}
                <div className="relative w-[450px] md:w-[600px] aspect-[4/1] drop-shadow-[0_0_50px_rgba(255,180,0,0.8)]">
                    <Image
                        src="/cricshot-hero-logo.png"
                        alt="CricShot Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

                {/* Headlines - Ultra-Minimalist */}
                <div className="flex flex-col items-center justify-center text-center space-y-4 max-w-4xl w-fit mx-auto relative z-10">
                    <h1 className="font-black text-3xl md:text-5xl tracking-tighter text-yellow-400 font-orbitron uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                        REAL CRICKET. <span className="text-white block md:inline">ZERO HARDWARE.</span>
                    </h1>
                    <p className="text-gray-300 text-lg font-medium tracking-wide max-w-3xl mx-auto leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                        Duck. Drive. Dominate. Your body is the only controller you need.
                    </p>
                </div>

                {/* --- ARCADE LAUNCH TRIGGERS (Cyber-Slots) --- */}
                <div className="flex flex-col md:flex-row gap-4 mt-8 w-full max-w-3xl justify-center items-center">

                    {/* 1. Android Trigger (Neon Green) */}
                    <Link
                        href="https://play.google.com/store/apps/developer?id=MYSU+Tech&pli=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative w-full md:w-auto md:flex-1 max-w-sm"
                    >
                        <div className="
                            relative w-full
                            bg-zinc-900/90 backdrop-blur-md
                            text-white font-bold text-lg tracking-widest px-6 py-5
                            rounded-lg md:-skew-x-12
                            border-2 border-green-500
                            shadow-[0_0_20px_rgba(0,255,0,0.3)] hover:shadow-[0_0_40px_rgba(0,255,0,0.6)]
                            transition-all duration-75 ease-out
                            hover:brightness-125 hover:border-green-400
                            active:scale-95 active:shadow-none
                            flex items-center justify-center gap-4
                            uppercase font-orbitron
                        ">
                            <div className="md:skew-x-12 flex items-center gap-3">
                                <Image
                                    src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg"
                                    width={24} height={24} alt="Android"
                                />
                                <span>Play on Android</span>
                            </div>
                        </div>
                    </Link>

                    {/* 2. Windows Trigger (Neon Blue) */}
                    <Link
                        href="https://drive.google.com/drive/folders/1q9oblaHl5s4c43n42BagTE_TJrd2K2WV"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative w-full md:w-auto md:flex-1 max-w-sm"
                    >
                        <div className="
                            relative w-full
                            bg-zinc-900/90 backdrop-blur-md
                            text-white font-bold text-lg tracking-widest px-6 py-5
                            rounded-lg md:-skew-x-12
                            border-2 border-cyan-500
                            shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)]
                            transition-all duration-75 ease-out
                            hover:brightness-125 hover:border-cyan-400
                            active:scale-95 active:shadow-none
                            flex items-center justify-center gap-4
                            uppercase font-orbitron
                        ">
                            <div className="md:skew-x-12 flex items-center gap-3">
                                <Image
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png"
                                    width={24} height={24} alt="Windows"
                                    className="object-contain"
                                />
                                <span>Play on Windows</span>
                            </div>
                        </div>
                    </Link>

                </div>

            </div>

            <Footer compact={true} />
        </main>
    );
};

export default CricShotPage;
