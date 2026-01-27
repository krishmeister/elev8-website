'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Contact";
import Image from 'next/image';

const CricShotPage = () => {
    return (
        <main className="h-screen w-full relative overflow-hidden flex flex-col bg-black text-white selection:bg-orange-500 selection:text-black font-sans">
            <Navbar />

            {/* --- IMMERSIVE BACKGROUND --- */}

            {/* 1. Video Layer - Performance Optimized */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/20 z-10" /> {/* Minimal Dimmer */}
                {/* Cinematic Gradient Overlay (Top/Bottom Only) */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 z-20" />

                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    poster="/cricshot-poster.jpg"
                    className="absolute inset-0 w-full h-full object-cover z-0 brightness-[0.8]"
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

            {/* --- HERO CONTENT - CENTERED STACK --- */}
            <div className="flex-1 flex flex-col justify-center items-center w-full z-10 px-4 pt-32">

                {/* The Stack */}
                <div className="flex flex-col items-center gap-6 md:gap-8 max-w-5xl mx-auto text-center">

                    {/* Hero Logo */}
                    <div className="relative h-20 md:h-32 w-auto mx-auto mb-8 drop-shadow-[0_0_25px_rgba(255,165,0,0.6)]">
                        <Image
                            src="/cricshot-hero-logo.png"
                            alt="CricShot Logo"
                            width={500}
                            height={128}
                            className="h-full w-auto object-contain"
                            priority
                        />
                    </div>

                    {/* Headlines */}
                    <div className="flex flex-col items-center justify-center text-center space-y-2 w-full">
                        <h1 className="text-3xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-600 drop-shadow-lg font-orbitron uppercase md:whitespace-nowrap">
                            REAL CRICKET. ZERO HARDWARE.
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 font-medium max-w-2xl leading-relaxed drop-shadow-md mb-0">
                            Duck. Drive. Dominate. Your body is the only controller you need.
                        </p>
                    </div>

                    {/* Buttons - Fixed Dimension Container - "The Golden Ratio" Block */}
                    <div className="flex flex-col md:flex-row gap-6 w-auto justify-center items-center mt-8">

                        {/* 1. Android Trigger */}
                        <Link
                            href="https://play.google.com/store/apps/developer?id=MYSU+Tech&pli=1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <div className="
                                relative w-[280px] h-[60px]
                                bg-zinc-900/90 backdrop-blur-md
                                text-white font-bold text-lg tracking-widest
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
                                    <span>Android</span>
                                </div>
                            </div>
                        </Link>

                        {/* 2. Windows Trigger */}
                        <Link
                            href="https://drive.google.com/drive/folders/1q9oblaHl5s4c43n42BagTE_TJrd2K2WV"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <div className="
                                relative w-[280px] h-[60px]
                                bg-zinc-900/90 backdrop-blur-md
                                text-white font-bold text-lg tracking-widest
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
                                    <span>Windows</span>
                                </div>
                            </div>
                        </Link>

                    </div>

                </div>

            </div>

            <Footer compact={true} />
        </main>
    );
};

export default CricShotPage;
