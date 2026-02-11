'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Contact";
const PrivacyPage = () => {
    return (
        <main className="min-h-screen bg-black text-gray-300 font-sans relative selection:bg-cyan-500 selection:text-black">
            <Navbar />

            {/* --- BACKGROUND GRID (Fixed) --- */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,243,255,0.1))]" />
                <motion.div
                    animate={{ backgroundPosition: ["0px 0px", "0px 100px"] }}
                    transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                    className="w-full h-[200%] absolute top-0 left-0"
                    style={{
                        backgroundImage: `
                            linear-gradient(0deg, transparent 24%, rgba(0, 243, 255, .2) 25%, rgba(0, 243, 255, .2) 26%, transparent 27%, transparent 74%, rgba(0, 243, 255, .2) 75%, rgba(0, 243, 255, .2) 76%, transparent 77%, transparent), 
                            linear-gradient(90deg, transparent 24%, rgba(0, 243, 255, .2) 25%, rgba(0, 243, 255, .2) 26%, transparent 27%, transparent 74%, rgba(0, 243, 255, .2) 75%, rgba(0, 243, 255, .2) 76%, transparent 77%, transparent)
                        `,
                        backgroundSize: '60px 60px',
                    }}
                />
            </div>

            {/* --- CONTENT CONTAINER --- */}
            <div className="relative z-10 max-w-4xl mx-auto pt-32 pb-20 px-6">

                {/* TERMINAL BOX */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl border-t-4 border-t-cyan-500 p-8 md:p-12 shadow-2xl">

                    {/* TITLE */}
                    <h1 className="text-5xl md:text-6xl font-black font-orbitron text-white mb-12 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] tracking-tighter">
                        PRIVACY PROTOCOL
                    </h1>

                    <div className="space-y-12">
                        {/* HEADER */}
                        <div className="text-lg leading-relaxed border-b border-white/10 pb-8">
                            <p>
                                Mysutech Metaverse Pvt Ltd. ('Company', 'we', 'our') respects your privacy and is committed to protecting the personal information of our users ('User', 'you'). This Privacy Protocol explains how we collect, use, disclose, and safeguard your information when you access our application.
                            </p>
                        </div>

                        {/* SECTION 1 */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-mono text-cyan-400 font-bold uppercase tracking-widest">
                                1.0 // INFORMATION COLLECTION
                            </h2>
                            <p>We may collect information about you in a variety of ways. The information we may collect via the Application includes:</p>
                            <ul className="space-y-2 pl-4">
                                <li className="flex gap-2">
                                    <span className="text-cyan-500 font-bold">{' > '}</span>
                                    <span><strong className="text-white">Provided by Users:</strong> Account registration details (name, email), Payment information (processed securely by third-party providers like Google/Apple).</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-cyan-500 font-bold">{' > '}</span>
                                    <span><strong className="text-white">Collected Automatically:</strong> Usage Data, Device Specifications (OS, model), Log Data (IP address, timestamps).</span>
                                </li>
                            </ul>

                            <div className="bg-cyan-900/10 border border-cyan-500/30 p-4 rounded-lg mt-4">
                                <h3 className="text-cyan-400 font-bold font-mono text-sm mb-2">1.3 // MOTION TRACKING DATA (CRITICAL)</h3>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex gap-2">
                                        <span className="text-cyan-500">{'>>'}</span>
                                        <span>The Application uses a standard RGB camera for real-time motion tracking.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-cyan-500">{'>>'}</span>
                                        <span>No biometric data is stored, recorded, or transmitted to our servers.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-cyan-500">{'>>'}</span>
                                        <span>All computer vision processing occurs locally on the user's device.</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* SECTION 2 */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-mono text-cyan-400 font-bold uppercase tracking-widest">
                                2.0 // HOW WE USE YOUR INFORMATION
                            </h2>
                            <p>We use the information we collect to:</p>
                            <ul className="space-y-2 pl-4">
                                <li className="flex gap-2"><span className="text-cyan-500">{' > '}</span> Provide, operate, and maintain our services.</li>
                                <li className="flex gap-2"><span className="text-cyan-500">{' > '}</span> Personalize your gameplay experience.</li>
                                <li className="flex gap-2"><span className="text-cyan-500">{' > '}</span> Improve, personalize, and expand our application.</li>
                                <li className="flex gap-2"><span className="text-cyan-500">{' > '}</span> Enforce our terms, conditions, and policies.</li>
                                <li className="flex gap-2"><span className="text-cyan-500">{' > '}</span> Comply with legal obligations.</li>
                            </ul>
                        </section>

                        {/* SECTION 3 */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-mono text-cyan-400 font-bold uppercase tracking-widest">
                                3.0 // DATA SHARING
                            </h2>
                            <p>We may share information we have collected about you in certain situations:</p>
                            <ul className="space-y-2 pl-4">
                                <li className="flex gap-2"><span className="text-cyan-500">{' > '}</span> <strong className="text-white">Service Providers:</strong> For cloud hosting, analytics, and payment processing.</li>
                                <li className="flex gap-2"><span className="text-cyan-500">{' > '}</span> <strong className="text-white">Legal Compliance:</strong> If required by law or to protect our rights.</li>
                                <li className="flex gap-2"><span className="text-cyan-500">{' > '}</span> <strong className="text-white">Business Transfers:</strong> During mergers, sales, or asset transfers.</li>
                            </ul>
                            <p className="text-sm text-gray-400 mt-2 italic">We do not sell your personal data to third parties.</p>
                        </section>

                        {/* SECTION 4 */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-mono text-cyan-400 font-bold uppercase tracking-widest">
                                4.0 // YOUR RIGHTS
                            </h2>
                            <p>Depending on your location, you may have the right to:</p>
                            <ul className="space-y-2 pl-4">
                                <li className="flex gap-2"><span className="text-cyan-500">{' > '}</span> Access or update your personal information.</li>
                                <li className="flex gap-2"><span className="text-cyan-500">{' > '}</span> Opt-out of certain data collection practices.</li>
                                <li className="flex gap-2"><span className="text-cyan-500">{' > '}</span> Request deletion of your personal data.</li>
                            </ul>
                        </section>

                        {/* SECTION 5 */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-mono text-cyan-400 font-bold uppercase tracking-widest">
                                5.0 // DATA SECURITY
                            </h2>
                            <p>
                                We use administrative, technical, and physical security measures to help protect your personal information.
                                Most notably, our specialized <span className="text-white font-bold">local processing of motion-tracking data</span> ensures that your physical environment remains private.
                            </p>
                        </section>

                        {/* SECTION 6 */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-mono text-cyan-400 font-bold uppercase tracking-widest">
                                6.0 // CHILDREN'S PRIVACY
                            </h2>
                            <p>
                                Our services are not intended for use by children under the age of 13. We do not knowingly collect personally identifiable information from children under 13.
                            </p>
                        </section>

                        {/* SECTION 7 */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-mono text-cyan-400 font-bold uppercase tracking-widest">
                                7.0 // THIRD-PARTY SERVICES
                            </h2>
                            <p>
                                This application integrates with third-party services such as Google Play Services and Unity Analytics. These parties may collect data as per their own privacy policies.
                            </p>
                        </section>

                        {/* SECTION 8: CONTACT */}
                        <section className="space-y-4 pt-8 border-t border-white/10">
                            <h2 className="text-2xl font-mono text-cyan-400 font-bold uppercase tracking-widest">
                                8.0 // CONTACT CHANNEL
                            </h2>
                            <div className="bg-black/40 p-6 rounded-lg border border-white/5 space-y-2 font-mono">
                                <p><span className="text-gray-500">EMAIL:</span> <a href="mailto:elev8@lokaworld.app" className="text-white hover:text-cyan-400 transition-colors">elev8@lokaworld.app</a></p>
                                <p><span className="text-gray-500">WEB:</span> <a href="https://www.elev8.games/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors">https://www.elev8.games/</a></p>
                            </div>
                        </section>

                    </div>
                </div>

                {/* BOTTOM DECORATION */}
                <div className="text-center mt-12 text-xs font-mono text-gray-600 uppercase tracking-[0.3em]">
                    End of File_
                </div>
            </div>

            <Footer compact={false} />
        </main>
    );
};

export default PrivacyPage;
