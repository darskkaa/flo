'use client';

import { X, Check, AlertTriangle, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function ComparisonSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="py-24 bg-navy-950 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-navy-950 to-navy-950 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-signal-orange/10 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-titanium-200/10 border border-titanium-200/20 text-sm font-medium text-signal-orange mb-6 backdrop-blur-sm">
                        <ShieldCheck className="w-4 h-4" />
                        <span>The FloPro Difference</span>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl mb-4">
                        Engineered for Excellence
                    </h2>
                    <p className="text-lg text-titanium-200/60 max-w-2xl mx-auto">
                        Why we are the only Marine-Grade Asset Managers in Charlotte Harbor.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-8 mb-12"
                >
                    {/* The Other Guys Card */}
                    <motion.div
                        variants={itemVariants}
                        className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-white/20 transition-all"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
                                <X className="w-6 h-6 text-red-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white/60">"The Other Guys"</h3>
                        </div>

                        <ul className="space-y-4">
                            {[
                                { text: "Visual checks only", icon: AlertTriangle },
                                { text: "Paper tickets (maybe)", icon: X },
                                { text: "Generic chemicals & processes", icon: AlertTriangle },
                                { text: "Might leave gate open", icon: X },
                                { text: "No storm preparation", icon: X }
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-white/40">
                                    <item.icon className="w-5 h-5 mt-0.5 flex-shrink-0 text-red-400/60" />
                                    <span className="text-sm">{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* The FloPro Standard Card */}
                    <motion.div
                        variants={itemVariants}
                        className="bg-gradient-to-br from-signal-orange/10 to-blue-500/10 backdrop-blur-md rounded-2xl border border-signal-orange/30 p-8 hover:border-signal-orange/50 transition-all shadow-xl shadow-orange-900/20 relative overflow-hidden"
                    >
                        {/* Animated glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-signal-orange/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-full bg-signal-orange/20 flex items-center justify-center">
                                    <Check className="w-6 h-6 text-signal-orange" />
                                </div>
                                <h3 className="text-xl font-bold text-white">The FloPro Standard</h3>
                            </div>

                            <ul className="space-y-4">
                                {[
                                    { text: "GPS-Timestamped Digital Reports", icon: Check },
                                    { text: "Freshwater Equipment Rinse (Salt-Stop)", icon: Check },
                                    { text: "Cage Integrity Verification", icon: Check },
                                    { text: "Marine-Grade Chemistry & Protocols", icon: Check },
                                    { text: "Proactive Storm Securement", icon: Check }
                                ].map((item, idx) => (
                                    <motion.li
                                        key={idx}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex items-start gap-3 text-white"
                                    >
                                        <item.icon className="w-5 h-5 mt-0.5 flex-shrink-0 text-signal-orange" />
                                        <span className="text-sm font-medium">{item.text}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-center"
                >
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 text-sm font-bold text-white hover:bg-white/20 hover:border-white/30 transition-all group"
                    >
                        See Our Technology in Action
                        <motion.span
                            className="ml-2"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                            →
                        </motion.span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
