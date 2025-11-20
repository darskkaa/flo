'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Anchor, Camera, Lock } from 'lucide-react';
import Link from 'next/link';

export function TrustBeacon() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-40">
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ type: "spring", damping: 25 }}
                        className="absolute bottom-16 right-0 w-80 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 shadow-2xl"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-signal-orange/20 flex items-center justify-center">
                                <ShieldCheck className="w-5 h-5 text-signal-orange" />
                            </div>
                            <h3 className="text-lg font-bold text-white">FloPro Guarantee</h3>
                        </div>

                        <ul className="space-y-3 mb-4">
                            {[
                                { icon: Lock, text: "Gate-Shut Verified" },
                                { icon: Anchor, text: "Corrosion-Stop Protocol" },
                                { icon: Camera, text: "Remote-Monitored" }
                            ].map((item, idx) => (
                                <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-center gap-3 text-sm text-titanium-100"
                                >
                                    <item.icon className="w-4 h-4 text-signal-orange/80 flex-shrink-0" />
                                    <span>{item.text}</span>
                                </motion.li>
                            ))}
                        </ul>

                        <Link
                            href="/about"
                            className="block w-full text-center px-4 py-2 rounded-lg bg-signal-orange/20 border border-signal-orange/30 text-signal-orange text-sm font-semibold hover:bg-signal-orange/30 transition-all"
                        >
                            Learn More
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onHoverStart={() => setIsExpanded(true)}
                onHoverEnd={() => setIsExpanded(false)}
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-14 h-14 rounded-full bg-signal-orange shadow-2xl shadow-orange-900/60 flex items-center justify-center text-white hover:shadow-orange-900/80 hover:scale-110 transition-all group relative ring-2 ring-white/20"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute inset-0 rounded-full bg-signal-orange opacity-30"
                />
                <ShieldCheck className="w-6 h-6 relative z-10" />
            </motion.button>
        </div>
    );
}
