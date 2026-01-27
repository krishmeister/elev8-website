'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: "Do I need special hardware (VR headset)?",
        answer: "No! Elev8 is completely hardware-free. All you need is a laptop or computer with a webcam. Our proprietary Vision AI tracks your movements in real-time."
    },
    {
        question: "How accurate is the motion tracking?",
        answer: "Our tracking is extremely precise, boasting 98% accuracy on standard 720p webcams even in low-light conditions. It's comparable to dedicated hardware sensors."
    },
    {
        question: "Which top motion games can I play?",
        answer: "We currently feature hits like Basketball Saga, HoloFit, and Whack-A-Mole, with new titles added monthly."
    },
    {
        question: "Does Elev8 record my video?",
        answer: "No. All processing happens locally on your device in real-time. We never record or store your video feed. Your privacy is our top priority."
    },
    {
        question: "Can I use my phone to play Elev8?",
        answer: "Currently, we support desktop and laptop web browsers for the best experience, but mobile support is in beta testing."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-32 bg-black border-t border-white/5">
            <div className="max-w-4xl mx-auto px-6">

                <div className="mb-20">
                    <span className="text-elev8-yellow font-mono text-xs tracking-widest mb-4 block">/// SYSTEM_HELP</span>
                    <h2 className="text-5xl font-space font-bold text-white uppercase tracking-tighter">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="border-t border-gray-800">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border-b border-gray-800 group">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full text-left py-8 flex items-start justify-between group-hover:bg-white/5 transition-colors px-4 -mx-4 rounded-lg"
                            >
                                <span className={`text-xl md:text-2xl font-space font-bold transition-colors duration-300 ${openIndex === i ? 'text-elev8-yellow' : 'text-gray-300 group-hover:text-white'}`}>
                                    {faq.question}
                                </span>
                                <span className="pt-1 text-gray-500 group-hover:text-white transition-colors">
                                    {openIndex === i ? <Minus size={24} /> : <Plus size={24} />}
                                </span>
                            </button>

                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "circOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pb-8 pr-12 text-gray-400 text-lg leading-relaxed font-light">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
