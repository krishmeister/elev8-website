'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Monitor, Cpu, Zap, ScanFace, Eye, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Simulated Logo Component since we don't have actual SVGs
const BrandLogo = ({ name, icon: Icon }: { name: string, icon: any }) => (
    <div className="group flex flex-col items-center justify-center gap-2 cursor-pointer opacity-40 hover:opacity-100 hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
        <Icon size={40} strokeWidth={1.5} className="text-white group-hover:text-elev8-yellow transition-colors" />
        <span className="text-[10px] font-space font-bold uppercase tracking-widest text-white/50 group-hover:text-white transition-colors hidden md:block">{name}</span>
    </div>
);

// Brand Data for Tooltip Interaction
const brandData = [
    {
        id: 1,
        name: "Amul",
        src: "/amul.png.png",
        description: "The Taste of India. World's dairy giant with $7B+ revenue. Fueling a nation daily."
    },
    {
        id: 2,
        name: "boAt",
        src: "/boat.png.png",
        description: "India's #1 Audio Wearable brand. Dominating the soundscape of a generation."
    },
    {
        id: 3,
        name: "Red Bull",
        src: "/redbull.png.png",
        description: "Global Energy Icon. Powering high performance, extreme sports, and culture worldwide."
    },
    {
        id: 4,
        name: "Lenskart",
        src: "/lenskart.png.png",
        description: "Visionary Unicorn. Revolutionizing eyewear retail across Asia with cutting-edge tech."
    },
    {
        id: 5,
        name: "HDFC ERGO",
        src: "/hdfc.png.png",
        description: "Insurance Titan. A powerhouse joint venture securing millions of futures across India."
    },
    {
        id: 6,
        name: "RCB",
        src: "/rcb.png.png",
        description: "Cricket Royalty. One of the IPL's most valuable, passionate, and iconic franchises."
    },
];

const Features = () => {
    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
    const [activeBrand, setActiveBrand] = React.useState<{ name: string, description: string } | null>(null);

    return (
        <section className="bg-black py-32 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-aurora-purple/20 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-1000" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-aurora-green/10 rounded-full blur-[100px] mix-blend-screen" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* ACHIEVEMENTS & AWARDS SECTION */}
                <div className="mb-40">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-elev8-yellow font-mono text-xs tracking-widest uppercase block mb-4">Recognized Excellence</span>
                        <h2 className="text-4xl md:text-5xl font-space font-bold text-white tracking-tight">
                            HALL OF <span className="text-transparent stroke-white" style={{ WebkitTextStroke: '1px white' }}>FAME</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1: Shark Tank */}
                        {/* Card 1: Shark Tank */}
                        <motion.a
                            href="https://www.youtube.com/watch?v=e_iZhYUV-Fs&t=151s"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center group hover:border-white/20 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] cursor-pointer"
                        >
                            <div className="relative h-32 md:h-40 w-full mb-6 flex items-center justify-center">
                                <Image
                                    src="/shark-tank.png"
                                    alt="Shark Tank India"
                                    width={300}
                                    height={160}
                                    className="object-contain h-full w-auto brightness-150 drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]"
                                />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed font-light mt-6">
                                Featured on Shark Tank India Season 1, recognized as a high-potential gaming venture.
                            </p>
                        </motion.a>

                        {/* Card 2: ISB */}
                        {/* Card 2: ISB */}
                        <motion.a
                            href="https://www.linkedin.com/feed/update/urn:li:activity:7382354226712084482/"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            whileHover={{ y: -10 }}
                            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center group hover:border-white/20 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] cursor-pointer"
                        >
                            <div className="relative h-32 md:h-40 w-full mb-6 flex items-center justify-center">
                                <Image
                                    src="/isb.png"
                                    alt="ISB"
                                    width={300}
                                    height={160}
                                    className="object-contain h-full w-auto brightness-150 drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]"
                                />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed font-light mt-6">
                                Selected for ISB Hyderabad's prestigious Gaming Accelerator, supported by industry titans.
                            </p>
                        </motion.a>

                        {/* Card 3: K-Startup */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            whileHover={{ y: -10 }}
                            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center group hover:border-white/20 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
                        >
                            <div className="relative h-32 md:h-40 w-full mb-6 flex items-center justify-center">
                                <Image
                                    src="/k-startup.png"
                                    alt="K-Startup Grand Challenge"
                                    width={300}
                                    height={160}
                                    className="object-contain h-full w-auto brightness-150 drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]"
                                />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed font-light mt-6">
                                Ranked among Top 80 startups globally in 2025, out of 4,500+ participants.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Featured On Strip - POWER HOVER REBUILD */}
                <div
                    className="py-20 text-center relative"
                    onMouseMove={(e) => {
                        // Track mouse position relative to the viewport for fixed positioning of tooltip
                        setMousePosition({ x: e.clientX, y: e.clientY });
                    }}
                >
                    <p className="text-sm font-space font-bold text-gray-500 mb-16 tracking-widest uppercase">BRANDS WE'VE WORKED WITH IN THE PAST</p>

                    {/* Brand Logos Grid - Fixed Alignment */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
                        {brandData.map((brand) => (
                            <motion.a
                                key={brand.id}
                                href="https://seed-coast-451.notion.site/LOKA-Brand-Activations-22b4d447929c8050ac3bf17ec7cfe793?source=copy_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group cursor-pointer relative"
                                onMouseEnter={() => setActiveBrand(brand)}
                                onMouseLeave={() => setActiveBrand(null)}
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <div className="p-4 rounded-xl transition-all duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.15)] group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                                    <Image
                                        src={brand.src}
                                        alt={brand.name}
                                        width={160}
                                        height={64}
                                        className="h-24 md:h-32 w-auto object-contain"
                                    />
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    {/* Floating Cursor Tooltip */}
                    <AnimatePresence mode="wait">
                        {activeBrand && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                                className="fixed z-50 pointer-events-none text-left max-w-xs md:max-w-sm"
                                style={{
                                    top: mousePosition.y + 20, // Offset so it doesn't cover cursor
                                    left: mousePosition.x + 20
                                }}
                            >
                                <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                                    <h4 className="text-xl font-bold text-white mb-2 font-space">{activeBrand.name}</h4>
                                    <p className="text-gray-300 text-sm leading-relaxed">{activeBrand.description}</p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Section Header */}
                <div className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-space font-bold text-white mb-6 tracking-tight leading-none"
                    >
                        HARDWARE <span className="text-gray-600">FREE.</span><br />
                        IMMERSION <span className="text-elev8-yellow">UNLEASHED.</span>
                    </motion.h2>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[300px]">

                    {/* Card 1: Large - No Hardware (Span 2 cols, 2 rows) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 md:row-span-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 flex flex-col justify-between group hover:border-aurora-green/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(74,222,128,0.2)]"
                    >
                        <div>
                            <div className="w-16 h-16 rounded-2xl bg-aurora-green/20 flex items-center justify-center mb-6 text-aurora-green">
                                <Monitor size={32} />
                            </div>
                            <h3 className="text-4xl font-space font-bold text-white mb-4">No Hardware Required.</h3>
                            <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
                                Forget VR headsets, controllers, and sensors. Just open your laptop, turn on the webcam, and start playing.
                            </p>
                        </div>
                        <div className="w-full h-48 bg-gradient-to-br from-aurora-green/20 to-transparent rounded-2xl mt-8 border border-white/5 overflow-hidden relative">
                            {/* Abstract Visualization */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <ScanFace size={80} className="text-white/20 group-hover:scale-110 group-hover:text-aurora-green transition-all duration-700" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2: Tall - Vision AI (Span 1 col, 2 rows) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="md:col-span-1 md:row-span-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center justify-center group hover:border-aurora-purple/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(126,34,206,0.2)]"
                    >
                        <div className="w-24 h-24 rounded-full bg-aurora-purple/10 flex items-center justify-center mb-8 relative">
                            <div className="absolute inset-0 rounded-full border border-aurora-purple/30 animate-ping opacity-20" />
                            <Eye size={40} className="text-aurora-purple" />
                        </div>
                        <h3 className="text-2xl font-space font-bold text-white mb-4">Vision AI Core</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            100% proprietary computer vision algorithms tracking 80+ points on your body efficiently.
                        </p>
                    </motion.div>

                    {/* Card 3: Small - Low Latency */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col justify-center group hover:border-elev8-yellow/50 transition-all duration-500 relative overflow-hidden"
                    >
                        <Zap size={32} className="text-elev8-yellow mb-4" />
                        <h3 className="text-xl font-space font-bold text-white mb-2">Zero Latency</h3>
                        <p className="text-gray-400 text-sm">Real-time processing directly on your device.</p>
                        <div className="absolute -right-4 -bottom-4 opacity-10">
                            <Zap size={100} />
                        </div>
                    </motion.div>

                    {/* Card 4: Small - Privacy */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col justify-center group hover:border-aurora-cyan/50 transition-all duration-500 relative overflow-hidden"
                    >
                        <Lock size={32} className="text-aurora-cyan mb-4" />
                        <h3 className="text-xl font-space font-bold text-white mb-2">Private by Design</h3>
                        <p className="text-gray-400 text-sm">Video never leaves your device. Local processing only.</p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Features;
