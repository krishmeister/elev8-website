'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Briefcase, Linkedin } from 'lucide-react';

const founder = {
    name: "KRISHNAN SUNDERARAJAN",
    role: "FOUNDER & CEO",
    bio: "Serial entrepreneur, creative technologist, and the guy who refuses to accept that screens should stay static. Krishnan has built startups, given TED-style talks, appeared on podcasts, and even pitched on Shark Tank India S1 before diving deep into motion tech. He blends big vision with relentless execution, leading Elev8’s mission to bring controller-free gaming to the world.",
    img: "/krishnan.jpg",
    linkedin: "https://www.linkedin.com/in/krishnan-sunderarajan/",
    badges: [
        { icon: "/tedx.png", text: "4x TEDx Speaker" },
        { icon: "/shark-tank.png", text: "Shark Tank Alumni" },
        { icon: "briefcase", text: "10+ Years Exp" } // Lucide icon logic handled in render
    ]
};

const squad = [
    { name: "DIPENDRA KUMAR", role: "SR. GAME DEV", bio: "Our tech wizard. Dipu brings futuristic ideas to life with rock-solid engineering, scalable systems, and the kind of clean code that makes games feel magical.", img: "/dipendra.jpg", linkedin: "https://www.linkedin.com/in/dipendra-kumar-b900a3172/?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
    { name: "VISHESH GUPTA", role: "UNITY DEV", bio: "Design geek + gameplay nerd. Vishesh crafts smooth, stylish, player-first experiences that make Elev8’s worlds feel alive and addictively fun.", img: "/vishesh.jpg", linkedin: "https://www.linkedin.com/in/vishesh-gupta-2567281b3/" },
    { name: "AYUSH ASREKAR", role: "3D MODELER & DESIGNER", bio: "The artist behind the vibes. Ayush builds stunning 3D worlds, characters, and effects with precision, personality, and a whole lot of flair.", img: "/ayush.png", linkedin: "https://www.linkedin.com/in/ayush-asrekar-a7875a258/" }
];

const Team = () => {
    return (
        <section className="py-32 bg-black relative overflow-hidden scroll-mt-24" id="team">
            {/* Scanline / Grid Background Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none z-0 opacity-20" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <h2 className="font-space font-bold text-5xl md:text-7xl text-white mb-4 uppercase tracking-tighter">
                        Core <span className="text-aurora-green">Architects</span>
                    </h2>
                    <div className="h-1 w-24 bg-aurora-green mx-auto rounded-full" />
                </div>

                {/* Founder Spotlight (The Captain's Interface) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full bg-white/5 backdrop-blur-md mb-24 overflow-hidden group border-l-4 border-transparent"
                    style={{ borderImage: 'linear-gradient(to bottom, #eab308, transparent) 1' }}
                >
                    <div className="flex flex-col md:flex-row items-stretch">
                        {/* Founder Image */}
                        <div className="relative w-full md:w-96 h-96 md:h-auto flex-shrink-0 bg-black">
                            <Image
                                src={founder.img}
                                alt={founder.name}
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                            {/* Inner Shadow to blend image edges */}
                            <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.8)] pointer-events-none" />
                        </div>

                        {/* Founder Content */}
                        <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-space font-bold text-4xl md:text-6xl text-white mb-2 uppercase tracking-tighter">
                                        {founder.name}
                                    </h3>
                                    <p className="text-yellow-400 font-mono text-sm mb-6 tracking-[0.2em] uppercase font-bold">
                                        {founder.role}
                                    </p>
                                </div>
                                <a
                                    href={founder.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white/10 hover:bg-[#0077b5] rounded-full text-white transition-colors duration-300"
                                >
                                    <Linkedin size={24} />
                                </a>
                            </div>

                            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-3xl font-light">
                                {founder.bio}
                            </p>

                            {/* Tactical Badges */}
                            <div className="flex flex-wrap gap-3">
                                {founder.badges.map((badge, idx) => (
                                    <div key={idx} className="flex items-center gap-2 bg-black/50 px-4 py-1.5 rounded-full border border-white/10 hover:border-yellow-500/50 transition-colors">
                                        {badge.icon === 'briefcase' ? (
                                            <Briefcase size={14} className="text-yellow-500" />
                                        ) : (
                                            <div className="relative w-4 h-4">
                                                <Image src={badge.icon} alt="icon" fill className="object-contain" />
                                            </div>
                                        )}
                                        <span className="text-gray-300 text-xs font-bold tracking-wider uppercase">{badge.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>


                {/* Squad Grid (The Operative Grid) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {squad.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 + 0.3 }}
                            className="group relative bg-transparent overflow-hidden"
                        >
                            {/* Card Image Area */}
                            <div className="relative h-80 w-full overflow-hidden mb-6">
                                <Image
                                    src={member.img}
                                    alt={member.name}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                />
                                {/* Mask Gradient (Fade to Black at bottom) */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                                {/* Hover Glow Effect */}
                                <div className="absolute bottom-0 left-0 right-0 h-32 bg-aurora-cyan/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            {/* Card Content Area */}
                            <div className="px-2 relative">
                                {/* Decorator Line */}
                                <div className="w-12 h-1 bg-gray-800 mb-4 group-hover:bg-aurora-cyan transition-colors duration-300" />

                                <div className="flex justify-between items-start mb-1">
                                    <h4 className="font-space font-bold text-2xl text-white uppercase tracking-tighter">
                                        {member.name}
                                    </h4>
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-[#0077b5] transition-colors duration-300"
                                    >
                                        <Linkedin size={20} />
                                    </a>
                                </div>
                                <p className="text-aurora-cyan font-mono text-xs uppercase tracking-widest mb-3 font-bold">
                                    {member.role}
                                </p>
                                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                                    {member.bio}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Team;
