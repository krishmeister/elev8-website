'use client';

import Link from 'next/link';
import { Download } from 'lucide-react';

interface SpotlightButtonProps {
    text?: string;
    onClick?: () => void;
    className?: string;
}

const SpotlightButton: React.FC<SpotlightButtonProps> = ({
    text = "DOWNLOAD NOW",
    onClick,
    className = ""
}) => {
    return (
        <Link
            href="/download"
            prefetch={true}
            onClick={onClick}
            className={`
                group relative inline-block
                bg-[#FFD700] 
                text-black font-black text-xl md:text-2xl tracking-widest px-12 py-5
                rounded-full 
                border-b-[6px] border-yellow-700 
                shadow-[0_10px_30px_rgba(255,215,0,0.4)] hover:shadow-[0_20px_40px_rgba(255,215,0,0.6)]
                transition-all duration-100 ease-out origin-center
                hover:-translate-y-1
                active:translate-y-[2px] active:border-b-[2px] active:shadow-none
                overflow-hidden
                ${className}
            `}
        >
            {/* Sheen Animation Container */}
            <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
                <div className="absolute top-0 bottom-0 left-[-100%] w-20 bg-gradient-to-r from-transparent via-white/70 to-transparent -skew-x-12 animate-sheen" />
            </div>

            {/* Inner Content */}
            <div className="relative z-10 flex items-center justify-center gap-3">
                <span>{text}</span>
                <Download
                    className="w-6 h-6 md:w-8 md:h-8 stroke-[3px] transition-transform duration-300 group-hover:animate-bounce"
                />
            </div>
        </Link>
    );
};

export default SpotlightButton;
