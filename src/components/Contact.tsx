'use client';

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Linkedin, Twitter, Instagram, ArrowRight, Youtube, CheckCircle } from 'lucide-react';

const Contact = () => {
    const [state, handleSubmit] = useForm("mgolywpd");

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

                    {state.succeeded ? (
                        /* Success State - Enhanced Cyber UI */
                        <div className="flex flex-col items-center justify-center py-16 gap-6 relative">
                            {/* Glitch Effect Background */}
                            <div className="absolute inset-0 bg-cyan-500/5 animate-pulse rounded-[3rem]" />

                            <CheckCircle className="w-20 h-20 text-cyan-400 animate-bounce drop-shadow-[0_0_20px_rgba(34,211,238,0.6)]" />

                            <div className="text-center space-y-2 relative z-10">
                                <h3 className="text-3xl font-spacing font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                                    UPLINK ESTABLISHED
                                </h3>
                                <p className="text-cyan-400/80 font-mono text-lg tracking-wider">
                                    TRANSMISSION SUCCESSFUL.
                                </p>
                            </div>

                            <p className="text-gray-400 max-w-md text-center">
                                Your message has been encrypted and sent to our secure terminal. We will initiate contact shortly.
                            </p>

                            <button
                                onClick={() => window.location.reload()}
                                className="mt-8 px-8 py-3 rounded-full border border-white/10 text-white font-mono text-sm tracking-widest hover:bg-white/10 hover:border-cyan-400 transition-all duration-300"
                            >
                                SEND ANOTHER TRANSMISSION
                            </button>
                        </div>
                    ) : (
                        /* Form */
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-8 relative z-10 max-w-2xl mx-auto"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <label className="block text-elev8-yellow font-mono text-xs tracking-widest mb-3 uppercase">Codename / Name</label>
                                    <input
                                        type="text"
                                        name="Name"
                                        required
                                        className="w-full bg-black/50 border-b border-white/20 rounded-t-lg p-4 text-white focus:outline-none focus:border-elev8-yellow focus:bg-white/5 transition-all placeholder:text-gray-700 text-lg font-space"
                                        placeholder="Enter Name"
                                    />
                                    <ValidationError prefix="Name" field="Name" errors={state.errors} className="text-red-500 text-xs mt-1" />
                                </div>
                                <div>
                                    <label className="block text-elev8-yellow font-mono text-xs tracking-widest mb-3 uppercase">Transmission / Email</label>
                                    <input
                                        type="email"
                                        name="Email"
                                        required
                                        className="w-full bg-black/50 border-b border-white/20 rounded-t-lg p-4 text-white focus:outline-none focus:border-elev8-yellow focus:bg-white/5 transition-all placeholder:text-gray-700 text-lg font-space"
                                        placeholder="Enter Email"
                                    />
                                    <ValidationError prefix="Email" field="Email" errors={state.errors} className="text-red-500 text-xs mt-1" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-elev8-yellow font-mono text-xs tracking-widest mb-3 uppercase">Message Data</label>
                                <textarea
                                    name="Message"
                                    required
                                    className="w-full bg-black/50 border-b border-white/20 rounded-t-lg p-4 text-white focus:outline-none focus:border-elev8-yellow focus:bg-white/5 h-32 transition-all placeholder:text-gray-700 text-lg font-space resize-none"
                                    placeholder="Type your message..."
                                />
                                <ValidationError prefix="Message" field="Message" errors={state.errors} className="text-red-500 text-xs mt-1" />
                            </div>

                            <div className="pt-4 text-center">
                                <button
                                    type="submit"
                                    disabled={state.submitting}
                                    className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-white text-black font-space font-bold text-lg uppercase tracking-wide hover:bg-elev8-yellow hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <span>{state.submitting ? 'Transmitting...' : 'Initiate Contact'}</span>
                                    {!state.submitting && <ArrowRight size={20} />}
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
