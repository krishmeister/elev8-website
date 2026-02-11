'use client';

import React from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';

const games = [
    { title: "Basketball Saga", src: "/basketball.webp" },
    { title: "Holofit", src: "/holofit.webp" },
    { title: "Whack-A-Mole", src: "/whack.webp" },
    { title: "Kickoff", src: "/kickoff.webp" },
    { title: "Burn It", src: "/burnit.avif" },
    { title: "Juice Ninja", src: "/ninja.webp" },
];

const Games = () => {
    // Double content for seamless loop
    const marqueeGames = [...games, ...games];

    return (
        <section className="py-24 bg-black relative overflow-hidden" id="games">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-aurora-purple/5 via-black to-black opacity-40 pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-6 relative z-10 mb-12">
                <div className="text-center">
                    <h2 className="font-space font-bold text-5xl md:text-7xl text-white mb-6 uppercase tracking-tighter">
                        Game <span className="text-aurora-cyan">Library</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Dive into the action. Endless possibilities.
                    </p>
                </div>
            </div>

            {/* Infinity Marquee Container */}
            <div className="w-full relative overflow-hidden">

                {/* Vignette Effects (Left & Right Fade) */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

                {/* Track */}
                <div className="flex w-max animate-scroll gap-8 hover:[animation-play-state:paused] px-8">
                    {marqueeGames.map((game, index) => (
                        <div
                            key={`${game.title}-${index}`}
                            className="group relative w-[300px] md:w-[400px] aspect-video shrink-0 cursor-pointer"
                        >
                            {/* Card Border & Shape */}
                            <div className="absolute inset-0 rounded-3xl border-4 border-white/20 group-hover:border-yellow-400 transition-colors duration-300 z-20 pointer-events-none" />

                            {/* Image Container */}
                            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-lg group-hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] transition-all duration-300">
                                <Image
                                    src={game.src}
                                    alt={game.title}
                                    fill
                                    className="object-cover"
                                />

                                {/* Dark Overlay */}
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300" />

                                {/* Play Button (Navigates to Center on Hover) */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                                    <div className="bg-yellow-400 text-black p-4 rounded-full shadow-[0_0_20px_rgba(250,204,21,0.8)]">
                                        <Play size={32} fill="currentColor" />
                                    </div>
                                </div>

                                {/* Title Label */}
                                <div className="absolute bottom-6 left-6 z-30">
                                    <h3 className="font-space font-bold text-white text-xl uppercase tracking-wider drop-shadow-md group-hover:text-yellow-400 transition-colors duration-300">
                                        {game.title}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Games;
