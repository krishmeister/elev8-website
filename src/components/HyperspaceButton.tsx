'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?/";

interface HyperspaceButtonProps {
    children: string; // Restricting to string for glitch effect
    onClick?: () => void;
    className?: string;
}

const HyperspaceButton: React.FC<HyperspaceButtonProps> = ({ children, onClick, className = '' }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [displayText, setDisplayText] = useState(children);

    // Glitch Effect
    useEffect(() => {
        if (!isClicked) {
            setDisplayText(children);
            return;
        }

        let iterations = 0;
        const interval = setInterval(() => {
            setDisplayText(children
                .split("")
                .map((char, index) => {
                    if (index < iterations) {
                        return children[index];
                    }
                    return chars[Math.floor(Math.random() * chars.length)];
                })
                .join("")
            );

            if (iterations >= children.length) {
                clearInterval(interval);
            }

            iterations += 1 / 2; // Speed of resolution
        }, 50);

        return () => clearInterval(interval);
    }, [isClicked, children]);

    const handleClick = () => {
        setIsClicked(true);
        if (onClick) onClick();
        setTimeout(() => setIsClicked(false), 2000); // Reset after animation sequence
    };

    return (
        <div className="relative inline-block group">
            <motion.button
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                onClick={handleClick}
                whileTap={{ scale: 0.9 }}
                whileHover={{
                    scale: 1.05,
                    x: [0, -2, 2, -2, 2, 0], // Cyber-Surge Shake
                    transition: { duration: 0.4 }
                }}
                className={`relative px-20 py-8 rounded-full overflow-hidden ${className}`}
                style={{
                    backdropFilter: "blur(4px)",
                }}
            >
                {/* 1. The Core (Nebula Background) */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-indigo-900 via-cyan-500 to-fuchsia-500"
                    style={{ backgroundSize: "200% 200%" }}
                    animate={{
                        backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                        duration: isHovered ? 0.2 : 5, // Hyper-Speed on Hover
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "linear"
                    }}
                />

                {/* 2. The Container (Glass Shell & Borders) */}
                <div className="absolute inset-0 rounded-full border-4 border-white/20 shadow-[inset_0_0_30px_rgba(255,255,255,0.3)] z-20 group-hover:border-white/40 transition-colors" />

                {/* Conic Gradient Spinner (Subtle) */}
                <motion.div
                    className="absolute -inset-[2px] rounded-full opacity-30 z-10"
                    style={{
                        background: "conic-gradient(from 0deg, transparent 0deg, cyan 180deg, transparent 360deg)"
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />

                {/* 3. The Electric Arcs (Lightning) */}
                <AnimatePresence>
                    {isHovered && (
                        <>
                            <LightningBolt className="top-0 left-10 text-cyan-300" delay={0} />
                            <LightningBolt className="bottom-0 right-10 text-yellow-300" delay={0.1} />
                            <LightningBolt className="top-1/2 left-2 text-white" delay={0.2} />
                        </>
                    )}
                </AnimatePresence>

                {/* 4. Supernova Shockwave (Click) */}
                <AnimatePresence>
                    {isClicked && (
                        <motion.div
                            initial={{ scale: 0.5, opacity: 1 }}
                            animate={{ scale: 3, opacity: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="absolute inset-0 rounded-full bg-white z-0"
                        />
                    )}
                </AnimatePresence>

                {/* Content */}
                <span className="relative z-30 font-orbitron font-black text-2xl tracking-widest text-white drop-shadow-md">
                    {displayText}
                </span>
            </motion.button>
        </div>
    );
};

// Simple SVG Lightning Component
const LightningBolt = ({ className, delay }: { className: string, delay: number }) => (
    <motion.svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className={`absolute w-8 h-8 z-30 pointer-events-none ${className}`}
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: [0, 1, 0, 1, 0], pathLength: [0, 1] }}
        transition={{ duration: 0.4, repeat: Infinity, repeatDelay: Math.random(), delay }}
    >
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </motion.svg>
);

export default HyperspaceButton;
