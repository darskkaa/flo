'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-navy-950 border-b border-white/10 sticky top-0 z-50 backdrop-blur-lg bg-navy-950/95">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-24">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0 flex items-center gap-4">
                            <Image
                                src="/images/flopro-logo.png"
                                alt="FloPro Pools"
                                width={80}
                                height={80}
                                className="w-20 h-20"
                            />
                            <span className="text-3xl font-bold text-white tracking-tight">
                                FloPro<span className="text-signal-orange">Pools</span>
                            </span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/services" className="text-titanium-200/80 hover:text-white font-medium transition-colors">
                            Services
                        </Link>
                        <Link href="/about" className="text-titanium-200/80 hover:text-white font-medium transition-colors">
                            About
                        </Link>
                        <Link href="/contact" className="text-titanium-200/80 hover:text-white font-medium transition-colors">
                            Contact
                        </Link>
                        <a
                            href="tel:9415550123"
                            className="inline-flex items-center justify-center rounded-lg bg-signal-orange px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-orange-900/30 hover:bg-orange-500 transition-all"
                        >
                            <Phone className="w-4 h-4 mr-2" />
                            (941) 555-0123
                        </a>
                    </div>

                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-titanium-200/80 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-signal-orange"
                        >
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-navy-900/95 backdrop-blur-lg border-t border-white/10">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link
                            href="/services"
                            className="block px-3 py-2 rounded-md text-base font-medium text-titanium-200/80 hover:text-white hover:bg-white/10"
                            onClick={() => setIsOpen(false)}
                        >
                            Services
                        </Link>
                        <Link
                            href="/about"
                            className="block px-3 py-2 rounded-md text-base font-medium text-titanium-200/80 hover:text-white hover:bg-white/10"
                            onClick={() => setIsOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className="block px-3 py-2 rounded-md text-base font-medium text-titanium-200/80 hover:text-white hover:bg-white/10"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </Link>
                        <div className="px-3 py-2">
                            <a
                                href="tel:9415550123"
                                className="w-full flex items-center justify-center rounded-lg bg-signal-orange px-4 py-2 text-base font-semibold text-white shadow-lg shadow-orange-900/30 hover:bg-orange-500"
                            >
                                <Phone className="w-4 h-4 mr-2" />
                                Call Now
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
