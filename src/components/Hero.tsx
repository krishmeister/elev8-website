'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SpotlightButton from './SpotlightButton';

const Hero = () => {
    return (
        <section className="relative w-full h-screen overflow-hidden flex flex-col justify-end items-center bg-black pb-32 md:pb-24">

            {/* Video Background - The Star */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                {/* 1. Visor Gradient (Navbar Visibility) */}
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/90 via-black/50 to-transparent z-10" />

                {/* 2. Bottom Gradient Vignette (For Button/Text) */}
                <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />

                {/* 3. Center is 100% Transparent - Video Shines Through */}
                {/* TODO: Add poster="/hero-poster.jpg" to prevent black flash on load */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover brightness-[0.85]"
                >
                    <source src="/website.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="relative z-30 w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center">

                {/* Entrance Animation: Zoom Out & Fade In */}
                <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <h1 className="font-space font-bold uppercase tracking-tighter leading-none">
                        {/* Layer 1: HARDWARE-FREE (Solid, Floating) */}
                        <span className="block text-xl md:text-3xl text-white font-black tracking-[0.2em] mb-2 md:mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
                            HARDWARE-FREE
                        </span>

                        {/* Layer 2: MOTION GAMING (Massive, Hollow, Video-Through) */}
                        <span
                            className="block text-5xl md:text-8xl lg:text-[10rem] text-transparent drop-shadow-[0_5px_5px_rgba(0,0,0,1)]"
                            style={{
                                WebkitTextStroke: '2px rgba(255,255,255,0.8)',
                                strokeWidth: '2px',
                                stroke: 'rgba(255,255,255,0.8)'
                            }}
                        >
                            MOTION GAMING
                        </span>
                    </h1>
                </motion.div>

                {/* CTA - 3D Cyber-Key */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-12 md:mt-16"
                >
                    <SpotlightButton />
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
            </motion.div>
        </section>
    );
};

export default Hero;
