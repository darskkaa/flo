'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export function SplashScreen() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950"
                >
                    {/* Ripple Effect Background */}
                    <div className="absolute inset-0 overflow-hidden">
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-signal-orange/30"
                                initial={{ width: 0, height: 0, opacity: 0 }}
                                animate={{
                                    width: [0, 800, 1200],
                                    height: [0, 800, 1200],
                                    opacity: [0, 0.5, 0],
                                }}
                                transition={{
                                    duration: 3,
                                    delay: i * 0.5,
                                    repeat: Infinity,
                                    ease: "easeOut"
                                }}
                            />
                        ))}
                    </div>

                    {/* Logo with 3D Effect */}
                    <motion.div
                        className="relative z-10"
                        initial={{ scale: 0.5, rotateY: -180, opacity: 0 }}
                        animate={{ scale: 1, rotateY: 0, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                        <motion.div
                            animate={{
                                y: [0, -20, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="relative"
                        >
                            <Image
                                src="/images/flopro-logo.png"
                                alt="FloPro Pools"
                                width={300}
                                height={300}
                                className="w-72 h-72 drop-shadow-2xl"
                            />

                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-signal-orange/20 blur-3xl rounded-full animate-pulse" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="mt-8 text-center"
                        >
                            <h1 className="text-4xl font-bold text-white mb-2">
                                FloPro<span className="text-signal-orange">Pools</span>
                            </h1>
                            <p className="text-titanium-200/60 text-sm">Loading your pool care experience...</p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
