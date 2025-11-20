'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { X, Anchor, Shield, Camera } from 'lucide-react';

interface Project {
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
    icon: typeof Anchor;
    link: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "PGI Canal Home: Corrosion Protected",
        category: "Canal Protection",
        image: "/images/canal-pool.jpg",
        description: "Marine-grade corrosion defense protocol for a Punta Gorda Isles waterfront property. Includes freshwater equipment rinse and sacrificial anode monitoring.",
        icon: Anchor,
        link: "/services/punta-gorda-isles-canal-protection"
    },
    {
        id: 2,
        title: "North Port Pet-Safe Oasis",
        category: "Rental & Family",
        image: "/images/gated-pool.jpg",
        description: "GPS-verified gate security and pet-safe service protocols for a North Port family home with rental turnover management.",
        icon: Shield,
        link: "/services/north-port-pet-friendly-pool-service"
    }
];

export function ProjectGallery() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section className="py-24 bg-gradient-to-b from-navy-950 to-navy-900 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-titanium-200/10 border border-titanium-200/20 text-sm font-medium text-signal-orange mb-6 backdrop-blur-sm">
                        <Camera className="w-4 h-4" />
                        <span>Our Work</span>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl mb-4">
                        Asset Protection in Action
                    </h2>
                    <p className="text-lg text-titanium-200/60 max-w-2xl mx-auto">
                        Real pools. Real protection. Real results from the Charlotte Harbor coast.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="group relative rounded-2xl overflow-hidden cursor-pointer"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                            </div>

                            {/* Content Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <div className="flex items-center gap-2 mb-2">
                                    <project.icon className="w-5 h-5 text-signal-orange" />
                                    <span className="text-xs font-medium text-signal-orange uppercase tracking-wider">
                                        {project.category}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-sm text-titanium-200/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                                    {project.description}
                                </p>
                            </div>

                            {/* Glassmorphism border on hover */}
                            <div className="absolute inset-0 border-2 border-signal-orange/0 group-hover:border-signal-orange/50 rounded-2xl transition-all duration-300 pointer-events-none"></div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-navy-950/95 backdrop-blur-xl z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25 }}
                            className="relative max-w-4xl w-full bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close button */}
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="grid md:grid-cols-2">
                                {/* Image */}
                                <div className="relative aspect-square md:aspect-auto">
                                    <Image
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-8 flex flex-col justify-center">
                                    <div className="flex items-center gap-2 mb-4">
                                        <selectedProject.icon className="w-6 h-6 text-signal-orange" />
                                        <span className="text-sm font-medium text-signal-orange uppercase tracking-wider">
                                            {selectedProject.category}
                                        </span>
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h3>
                                    <p className="text-titanium-200/80 leading-relaxed mb-6">
                                        {selectedProject.description}
                                    </p>
                                    <div className="flex gap-4">
                                        <Link
                                            href="/contact"
                                            className="flex-1 px-6 py-3 rounded-lg bg-signal-orange text-white font-semibold hover:bg-orange-500 transition-all text-center"
                                        >
                                            Request Quote
                                        </Link>
                                        <Link
                                            href={selectedProject.link}
                                            className="flex-1 px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold hover:bg-white/20 transition-all text-center"
                                        >
                                            Learn More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
