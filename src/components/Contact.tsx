'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Mail, Linkedin, Twitter, Instagram, ArrowRight, Youtube, CheckCircle } from 'lucide-react';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setSubmitted(true);
            }
        } catch (error) {
            console.error('Form submission error:', error);
        }
    };

    return (
        <section className="pt-32 pb-0 bg-black relative overflow-hidden scroll-mt-32" id="contact">
            {/* Background Gradients */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-aurora-purple/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-5xl mx-auto px-6 relative z-10 mb-32">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-7xl font-space font-bold text-white mb-6 tracking-tighter">
                        READY TO <span className="text-elev8-yellow">PLAY?</span>
                    </h2>
                    <p className="text-gray-400 text-xl font-light">Join the hardware-free revolution today.</p>
                </div>

                <div className="bg-zinc-900/50 backdrop-blur-3xl rounded-[3rem] p-8 md:p-16 border border-white/5 shadow-2xl relative overflow-hidden group hover:border-white/10 transition-colors duration-500">

                    {submitted ? (
                        /* Success State */
                        <div className="flex flex-col items-center justify-center py-16 gap-6">
                            <CheckCircle className="w-16 h-16 text-green-400 animate-pulse drop-shadow-[0_0_20px_rgba(74,222,128,0.6)]" />
                            <p className="text-green-400 font-mono text-xl text-center tracking-wide drop-shadow-[0_0_10px_rgba(74,222,128,0.4)]">
                                TRANSMISSION RECEIVED.
                            </p>
                            <p className="text-green-400/70 font-mono text-lg text-center">
                                WE WILL CONTACT YOU SHORTLY.
                            </p>
                        </div>
                    ) : (
                        /* Form */
                        <form
                            action="https://formspree.io/f/mqkvrqwb"
                            method="POST"
                            onSubmit={handleSubmit}
                            className="space-y-8 relative z-10 max-w-2xl mx-auto"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <label className="block text-elev8-yellow font-mono text-xs tracking-widest mb-3 uppercase">Codename / Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        className="w-full bg-black/50 border-b border-white/20 rounded-t-lg p-4 text-white focus:outline-none focus:border-elev8-yellow focus:bg-white/5 transition-all placeholder:text-gray-700 text-lg font-space"
                                        placeholder="Enter Name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-elev8-yellow font-mono text-xs tracking-widest mb-3 uppercase">Transmission / Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full bg-black/50 border-b border-white/20 rounded-t-lg p-4 text-white focus:outline-none focus:border-elev8-yellow focus:bg-white/5 transition-all placeholder:text-gray-700 text-lg font-space"
                                        placeholder="Enter Email"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-elev8-yellow font-mono text-xs tracking-widest mb-3 uppercase">Message Data</label>
                                <textarea
                                    name="message"
                                    required
                                    className="w-full bg-black/50 border-b border-white/20 rounded-t-lg p-4 text-white focus:outline-none focus:border-elev8-yellow focus:bg-white/5 h-32 transition-all placeholder:text-gray-700 text-lg font-space resize-none"
                                    placeholder="Type your message..."
                                />
                            </div>

                            <div className="pt-4 text-center">
                                <button type="submit" className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-white text-black font-space font-bold text-lg uppercase tracking-wide hover:bg-elev8-yellow hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                                    <span>Initiate Contact</span>
                                    <ArrowRight size={20} />
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};


export const Footer = ({ compact = false }: { compact?: boolean }) => {
    return (
        <footer className={`bg-black ${compact ? 'pt-8 pb-4 border-t-0' : 'pt-20 pb-10 border-t'} border-white/10 relative overflow-hidden`}>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className={`flex flex-col items-center text-center gap-8 md:flex-row md:justify-between md:items-center md:text-left ${compact ? 'mb-8' : 'mb-20'}`}>

                    {/* Links */}
                    <div className="flex gap-8 text-sm font-space font-bold text-gray-500 uppercase tracking-widest justify-center md:justify-start">
                        <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">Docs</a>
                    </div>

                    {/* Socials */}
                    <div className="flex gap-6 justify-center">
                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/krishnan-sunderarajan/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-blue-500 hover:text-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300"
                        >
                            <Linkedin size={18} />
                        </a>

                        {/* YouTube */}
                        <a
                            href="https://www.youtube.com/@loka9598/videos"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-red-500 hover:text-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.5)] transition-all duration-300"
                        >
                            <Youtube size={18} />
                        </a>

                        {/* Twitter (X) */}
                        <a
                            href="https://x.com/metakrish"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-white hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300"
                        >
                            <Twitter size={18} />
                        </a>

                        {/* Instagram (Placeholder) */}
                        <a
                            href="https://www.instagram.com/elev8.games/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-pink-500 hover:text-pink-500 hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] transition-all duration-300"
                        >
                            <Instagram size={18} />
                        </a>
                    </div>
                </div>

                {/* MASSIVE FOOTER LOGO - Hide in compact mode if needed, or keep smaller? Layout request implies "One Screen". Massive logo takes space. I'll hide the massive logo in compact mode to save space. */}
                {!compact && (
                    <>
                        <div className="w-full border-b border-white/10 mb-8" />
                        <div className="text-center select-none">
                            <h1 className="text-[18vw] leading-[0.8] font-black font-space text-white/5 hover:text-white/10 transition-colors tracking-tighter mix-blend-difference">
                                ELEV8
                            </h1>
                        </div>
                    </>
                )}

                <div className={`text-center ${compact ? 'mt-4' : 'mt-12'}`}>
                    <p className="text-xs text-gray-500">
                        &copy; 2026 ELEV8 by LOKA Studios. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Contact;
