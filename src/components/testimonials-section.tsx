'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Michael R.",
        location: "Punta Gorda Isles",
        rating: 5,
        text: "FloPro's salt-stop protocol saved my heater. After 3 years on the canal, my equipment looks brand new. The GPS photos give me peace of mind.",
        service: "Canal Protection"
    },
    {
        name: "Jennifer K.",
        location: "North Port",
        rating: 5,
        text: "As a landlord with 3 rental properties, the gate verification photos are a lifesaver. No more liability concerns about open gates.",
        service: "Pet-Safe Service"
    },
    {
        name: "Robert & Linda S.",
        location: "Rotonda West",
        rating: 5,
        text: "We spend summers in Michigan. The weekly video reports let us see our pool from 1,200 miles away. It's like having eyes on our property.",
        service: "Snowbird Monitoring"
    }
];

export function TestimonialsSection() {
    return (
        <section className="py-24 bg-gradient-to-b from-navy-900 to-navy-950 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-signal-orange/5 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-lg text-titanium-200/60 max-w-2xl mx-auto">
                        Real feedback from real pool owners across Charlotte Harbor.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-white/20 transition-all relative"
                        >
                            <Quote className="absolute top-6 right-6 w-12 h-12 text-signal-orange/20" />

                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-signal-orange text-signal-orange" />
                                ))}
                            </div>

                            <p className="text-titanium-100 leading-relaxed mb-6 relative z-10">
                                "{testimonial.text}"
                            </p>

                            <div className="border-t border-white/10 pt-4">
                                <div className="font-semibold text-white">{testimonial.name}</div>
                                <div className="text-sm text-titanium-200/60">{testimonial.location}</div>
                                <div className="text-xs text-signal-orange mt-1">{testimonial.service}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
