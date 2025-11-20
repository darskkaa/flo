'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Droplets, Wrench, Calendar, ArrowRight, CheckCircle2, Activity } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface HeroSectionProps {
    defaultSegment?: 'weekly' | 'biweekly' | 'monthly';
}

export function HeroSection({ defaultSegment = 'weekly' }: HeroSectionProps) {
    const [activeSegment, setActiveSegment] = useState<'weekly' | 'biweekly' | 'monthly'>(defaultSegment);

    const content = {
        weekly: {
            title: "Weekly Pool Service",
            subtitle: "Most Popular",
            description: "Complete pool cleaning and maintenance every week. Perfect for keeping your pool crystal clear year-round.",
            icon: Droplets,
            features: ["Chemical Balancing", "Skimming & Vacuuming", "Filter Cleaning"],
            bgImage: "/images/canal-pool.jpg",
        },
        biweekly: {
            title: "Bi-Weekly Service",
            subtitle: "Best Value",
            description: "Professional pool care every two weeks. Ideal for pools with moderate use and well-maintained equipment.",
            icon: Wrench,
            features: ["Equipment Check", "Chemical Testing", "Debris Removal"],
            bgImage: "/images/gated-pool.jpg",
        },
        monthly: {
            title: "Monthly Maintenance",
            subtitle: "Seasonal Homes",
            description: "Monthly inspections and maintenance perfect for snowbirds and seasonal residents. Includes photo reports.",
            icon: Calendar,
            features: ["Full Inspection", "Photo Reports", "Storm Prep"],
            bgImage: "/images/canal-pool.jpg",
        }
    };

    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
            {/* Dynamic Background Image */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeSegment}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    <Image
                        src={content[activeSegment].bgImage}
                        alt={content[activeSegment].subtitle}
                        fill
                        className="object-cover"
                        priority
                        quality={90}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-navy-950/95 via-navy-950/85 to-navy-950/70" />
                </motion.div>
            </AnimatePresence>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 pointer-events-none"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Text & Service Selector */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-titanium-200/10 border border-titanium-200/20 text-sm font-medium text-titanium-200 mb-6 backdrop-blur-sm">
                                <Activity className="w-4 h-4 text-signal-orange" />
                                <span>Professional Pool Care & Maintenance</span>
                            </div>

                            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 leading-tight text-white">
                                FloPro Pools: <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-titanium-100 to-titanium-200/70">
                                    Port Charlotte's Pool Experts
                                </span>
                            </h1>

                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-signal-orange/20 border-2 border-signal-orange text-signal-orange font-bold text-lg mb-6 animate-pulse">
                                <span>STARTING AT ONLY $99/MONTH</span>
                            </div>

                            <p className="text-xl text-titanium-200/80 mb-10 max-w-lg leading-relaxed">
                                Expert pool cleaning, maintenance, and repair services for Port Charlotte, Punta Gorda, North Port, and Englewood. We keep your pool crystal clear year-round.
                            </p>
                        </motion.div>

                        {/* Service Selector */}
                        <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                            <div className="flex border-b border-white/10">
                                {(['weekly', 'biweekly', 'monthly'] as const).map((segment) => (
                                    <button
                                        key={segment}
                                        onClick={() => setActiveSegment(segment)}
                                        className={cn(
                                            "flex-1 py-4 px-2 text-xs sm:text-sm font-semibold transition-all relative",
                                            activeSegment === segment ? "text-white" : "text-white/40 hover:text-white/70"
                                        )}
                                    >
                                        {segment === 'weekly' && "Weekly"}
                                        {segment === 'biweekly' && "Bi-Weekly"}
                                        {segment === 'monthly' && "Monthly"}

                                        {activeSegment === segment && (
                                            <motion.div
                                                layoutId="activeTab"
                                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-signal-orange"
                                            />
                                        )}
                                    </button>
                                ))}
                            </div>

                            <div className="p-8">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeSegment}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="flex items-center gap-3 mb-2">
                                            {(() => {
                                                const Icon = content[activeSegment].icon;
                                                return <Icon className="w-6 h-6 text-signal-orange" />;
                                            })()}
                                            <span className="text-sm font-medium text-signal-orange uppercase tracking-wider">
                                                {content[activeSegment].subtitle}
                                            </span>
                                        </div>

                                        <h3 className="text-2xl font-bold text-white mb-4">
                                            {content[activeSegment].title}
                                        </h3>

                                        <p className="text-titanium-200/80 mb-6 leading-relaxed">
                                            {content[activeSegment].description}
                                        </p>

                                        <ul className="space-y-3 mb-8">
                                            {content[activeSegment].features.map((feature, idx) => (
                                                <motion.li
                                                    key={idx}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: idx * 0.1 }}
                                                    className="flex items-center gap-3 text-sm text-titanium-100"
                                                >
                                                    <CheckCircle2 className="w-5 h-5 text-signal-orange/80 flex-shrink-0" />
                                                    {feature}
                                                </motion.li>
                                            ))}
                                        </ul>

                                        <Link
                                            href="/contact"
                                            className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-signal-orange px-8 py-4 text-sm font-bold text-white shadow-lg shadow-orange-900/30 hover:bg-orange-500 hover:shadow-orange-900/50 transition-all group"
                                        >
                                            Get Your Free Quote
                                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Visual */}
                    <div className="hidden lg:flex justify-center items-center relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-signal-orange/20 to-blue-500/20 blur-[120px] rounded-full opacity-40 animate-pulse"></div>
                        <motion.div
                            key={activeSegment}
                            initial={{ scale: 0.9, opacity: 0, rotateY: 10 }}
                            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative z-10 w-full max-w-md aspect-square rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 flex items-center justify-center shadow-2xl"
                        >
                            {(() => {
                                const Icon = content[activeSegment].icon;
                                return <Icon className="w-48 h-48 text-white/10" strokeWidth={0.5} />;
                            })()}

                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <div className="text-xs text-white/40 uppercase tracking-widest mb-1">Service Area</div>
                                        <div className="text-lg font-mono text-signal-orange">Port Charlotte, FL</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-xs text-white/40 uppercase tracking-widest mb-1">Since</div>
                                        <div className="text-lg font-mono text-white">2020</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
