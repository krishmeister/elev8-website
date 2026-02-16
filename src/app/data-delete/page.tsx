'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Contact";

const DataDeletePage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-black font-orbitron text-white mb-12 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] tracking-tighter uppercase">
                        Data Deletion Request
                    </h1>

                    <div className="space-y-12">
                        {/* HEADER */}
                        <div className="text-lg leading-relaxed border-b border-white/10 pb-8">
                            <p className="mb-4">
                                <strong className="text-white">Last updated: February 16, 2026</strong>
                            </p>
                            <p>
                                At LokaWorld, we respect your privacy and your right to control your personal data. This page explains how you can request deletion of your account and associated data from our systems.
                            </p>
                            <p className="mt-4">
                                This page applies to all users of the LokaWorld mobile application and related services.
                            </p>
                        </div>

                        {/* SECTION 1 */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-mono text-cyan-400 font-bold uppercase tracking-widest">
                                1.0 // YOUR RIGHT TO DELETE DATA
                            </h2>
                            <p>You have the right to request deletion of:</p>
                            <ul className="space-y-2 pl-4">
                                <li className="flex gap-2"><span className="text-cyan-500">{' > '}</span> Your LokaWorld account</li>
                                <li className="flex gap-2"><span className="text-cyan-500">{' > '}</span> Personal information associated with your account</li>
                                <li className="flex gap-2"><span className="text-cyan-500">{' > '}</span> User-generated data associated with your account</li>
                                <li className="flex gap-2"><span className="text-cyan-500">{' > '}</span> Any stored identifiers linked to your account</li>
                            </ul>
                            <p className="text-sm text-gray-400 mt-2">
                                Upon successful verification of your request, we will delete or anonymize your personal data in accordance with applicable laws and Google Play policies.
                            </p>
                        </section>

                        {/* SECTION 2 */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-mono text-cyan-400 font-bold uppercase tracking-widest">
                                2.0 // HOW TO REQUEST DELETION
                            </h2>
                            <p>You can request deletion of your data using one of the following methods:</p>

                            <div className="bg-cyan-900/10 border border-cyan-500/30 p-6 rounded-lg mt-4">
                                <h3 className="text-cyan-400 font-bold font-mono text-sm mb-4">METHOD 1: FROM WITHIN THE APP (RECOMMENDED)</h3>
                                <ol className="list-decimal pl-5 space-y-2 text-white">
                                    <li>Open the <strong className="text-cyan-400">LokaWorld app</strong></li>
                                    <li>Go to <strong>Settings</strong></li>
                                    <li>Navigate to <strong>Account Settings</strong></li>
                                    <li>Tap <strong>Delete Account</strong></li>
                                    <li>Follow the on-screen instructions</li>
                                </ol>
                                <p className="text-sm text-gray-400 mt-4 italic">This is the fastest way to process your request.</p>
                            </div>

                            <div className="bg-white/5 border border-white/10 p-6 rounded-lg mt-4">
                                <h3 className="text-cyan-400 font-bold font-mono text-sm mb-4">METHOD 2: REQUEST VIA EMAIL</h3>
                                <p className="mb-4">If you cannot access the app or prefer email, you may request deletion by contacting us:</p>
                                <ul className="space-y-2 pl-4 mb-4">
                                    <li className="flex gap-2"><span className="text-gray-500">EMAIL:</span> <a href="mailto:meta@lokaworld.app" className="text-white hover:text-cyan-400 transition-colors">meta@lokaworld.app</a></li>
                                    <li className="flex gap-2"><span className="text-gray-500">SUBJECT:</span> <span className="text-white">Data Deletion Request – LokaWorld</span></li>
                                </ul>
                                <p className="text-sm text-gray-400 mb-2">Please include the following information:</p>
                                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                                    <li>Your registered email address</li>
                                    <li>Your username (if applicable)</li>
                                    <li>The name of the app: <strong>LokaWorld</strong></li>
                                    <li>Confirmation that you want your data deleted</li>
                                </ul>
                                <p className="text-xs text-gray-500 mt-4">We may request additional information to verify your identity before processing the request.</p>
                            </div>
                        </section>

                        {/* SECTION 3 */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-mono text-cyan-400 font-bold uppercase tracking-widest">
                                3.0 // WHAT DATA WILL BE DELETED
                            </h2>
                            <p>When your deletion request is processed, we will delete:</p>
                            <ul className="space-y-2 pl-4">
                                <li className="flex gap-2"><span className="text-cyan-500">{' > '}</span> Your account profile information</li>
                                <li className="flex gap-2"><span className="text-cyan-500">{' > '}</span> Your email address and login credentials</li>
                                <li className="flex gap-2"><span className="text-cyan-500">{' > '}</span> Your app usage data associated with your account</li>
                                <li className="flex gap-2"><span className="text-cyan-500">{' > '}</span> Your preferences and settings</li>
                                <li className="flex gap-2"><span className="text-cyan-500">{' > '}</span> Any user-generated content linked exclusively to your account</li>
                                <li className="flex gap-2"><span className="text-cyan-500">{' > '}</span> Device identifiers linked to your account (where applicable)</li>
                            </ul>
                        </section>

                        {/* SECTION 4 */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-mono text-cyan-400 font-bold uppercase tracking-widest">
                                4.0 // WHAT DATA MAY BE RETAINED
                            </h2>
                            <p>Some data may be retained for limited purposes, including:</p>
                            <ul className="space-y-2 pl-4">
                                <li className="flex gap-2"><span className="text-cyan-500">{' > '}</span> Legal compliance</li>
                                <li className="flex gap-2"><span className="text-cyan-500">{' > '}</span> Fraud prevention</li>
                                <li className="flex gap-2"><span className="text-cyan-500">{' > '}</span> Security and abuse prevention</li>
                                <li className="flex gap-2"><span className="text-cyan-500">{' > '}</span> Enforcement of our Terms of Service</li>
                                <li className="flex gap-2"><span className="text-cyan-500">{' > '}</span> Financial or transaction records (if applicable, required by law)</li>
                            </ul>
                            <p className="text-sm text-gray-400 mt-2">
                                This retained data will be minimized and retained only for the period required by law.
                            </p>
                        </section>

                        {/* SECTION 5 */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-mono text-cyan-400 font-bold uppercase tracking-widest">
                                5.0 // DATA RETENTION TIMELINE
                            </h2>
                            <p>Once your deletion request is verified:</p>
                            <ul className="space-y-2 pl-4">
                                <li className="flex gap-2"><span className="text-cyan-500">{' > '}</span> <strong className="text-white">Account deactivation:</strong> Immediate or within 24 hours</li>
                                <li className="flex gap-2"><span className="text-cyan-500">{' > '}</span> <strong className="text-white">Full data deletion from active systems:</strong> Within 30 days</li>
                                <li className="flex gap-2"><span className="text-cyan-500">{' > '}</span> <strong className="text-white">Backup system removal:</strong> Within 90 days</li>
                            </ul>
                            <p className="text-sm text-gray-400 mt-2">
                                Some anonymized or aggregated data may be retained indefinitely as it cannot be linked back to you.
                            </p>
                        </section>

                        {/* SECTION 6 */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-mono text-cyan-400 font-bold uppercase tracking-widest">
                                6.0 // POST-DELETION IMPACT
                            </h2>
                            <p>Once your account is deleted:</p>
                            <ul className="space-y-2 pl-4">
                                <li className="flex gap-2"><span className="text-red-500">{' ! '}</span> You will lose access to your account permanently</li>
                                <li className="flex gap-2"><span className="text-red-500">{' ! '}</span> Your data cannot be recovered</li>
                                <li className="flex gap-2"><span className="text-red-500">{' ! '}</span> Any associated progress, content, or settings will be permanently removed</li>
                            </ul>
                            <p className="text-sm text-gray-400 mt-2">
                                You will need to create a new account if you wish to use the app again.
                            </p>
                        </section>

                        {/* SECTION 7 */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-mono text-cyan-400 font-bold uppercase tracking-widest">
                                7.0 // THIRD-PARTY DATA
                            </h2>
                            <p>
                                If you signed in using third-party services such as Google Sign-In, Apple Sign-In, or Facebook Login, you may also need to manage your data directly with those providers.
                            </p>
                            <p>
                                We will delete all data stored on our systems, but third-party providers manage their own data independently.
                            </p>
                        </section>

                        {/* SECTION 8 */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-mono text-cyan-400 font-bold uppercase tracking-widest">
                                8.0 // CHILDREN'S DATA
                            </h2>
                            <p>
                                If we become aware that personal data of a child has been collected without parental consent, we will delete such data promptly upon request.
                            </p>
                            <p>
                                Parents or guardians may contact us at: <a href="mailto:meta@lokaworld.app" className="text-cyan-400 hover:text-white transition-colors">meta@lokaworld.app</a>
                            </p>
                        </section>

                        {/* SECTION 9 */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-mono text-cyan-400 font-bold uppercase tracking-widest">
                                9.0 // COMPLIANCE
                            </h2>
                            <p>This page is provided to comply with:</p>
                            <ul className="space-y-2 pl-4">
                                <li className="flex gap-2"><span className="text-cyan-500">{' > '}</span> Google Play User Data Policy</li>
                                <li className="flex gap-2"><span className="text-cyan-500">{' > '}</span> Google Play Account Deletion Requirement</li>
                                <li className="flex gap-2"><span className="text-cyan-500">{' > '}</span> GDPR (where applicable)</li>
                                <li className="flex gap-2"><span className="text-cyan-500">{' > '}</span> Other applicable data protection laws</li>
                            </ul>
                        </section>

                        {/* CONTACT SECTION */}
                        <section className="space-y-4 pt-8 border-t border-white/10">
                            <h2 className="text-2xl font-mono text-cyan-400 font-bold uppercase tracking-widest">
                                10.0 // CONTACT US
                            </h2>
                            <div className="bg-black/40 p-6 rounded-lg border border-white/5 space-y-2 font-mono">
                                <p>If you have any questions about data deletion, contact:</p>
                                <p><span className="text-gray-500">EMAIL:</span> <a href="mailto:meta@lokaworld.app" className="text-white hover:text-cyan-400 transition-colors">meta@lokaworld.app</a></p>
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

export default DataDeletePage;
