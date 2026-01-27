'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CyberButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

const CyberButton: React.FC<CyberButtonProps> = ({ children, onClick, className = '' }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        if (onClick) onClick();
        // Reset click state after animation
        setTimeout(() => setIsClicked(false), 300);
    };

    return (
        <div className="relative inline-block">
            {/* Shockwave Ring */}
            <AnimatePresence>
                {isClicked && (
                    <motion.span
                        initial={{ scale: 1, opacity: 0.8 }}
                        animate={{ scale: 2.5, opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="absolute inset-0 rounded-full border-2 border-elev8-yellow z-0"
                    />
                )}
            </AnimatePresence>

            <motion.button
                // Base State Animation (Breathing)
                animate={{
                    scale: isClicked ? 0.95 : [1, 1.02, 1],
                    backgroundColor: isClicked ? '#FFFFFF' : '#eab308', // Flash White on click
                }}
                transition={{
                    scale: {
                        duration: isClicked ? 0.1 : 2,
                        repeat: isClicked ? 0 : Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    },
                    backgroundColor: { duration: 0.1 }
                }}
                // Hover State (Charge Up)
                whileHover={{
                    scale: 1.05,
                    x: [0, -2, 2, -2, 2, 0], // Vibration effect
                    boxShadow: "0 0 20px 5px rgba(234, 179, 8, 0.6)", // Neon Halo
                    transition: {
                        x: { duration: 0.4, repeat: Infinity, repeatType: "mirror" },
                        boxShadow: { duration: 0.2 },
                        scale: { duration: 0.2 } // Override breathing for snappy hover
                    }
                }}
                whileTap={{ scale: 0.95 }}
                onClick={handleClick}
                className={`relative z-10 px-12 py-4 rounded-full bg-elev8-yellow text-black font-extrabold text-lg tracking-wide border-4 border-double border-yellow-600/20 hover:border-yellow-500/50 cursor-crosshair overflow-hidden select-none ${className}`}
            >
                {/* Inner Text */}
                <span className="relative z-10 flex items-center justify-center gap-2">
                    {children}
                </span>

                {/* Subtle Inner Highlight/Sheen */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.button>
        </div>
    );
};

export default CyberButton;
