import Link from 'next/link';
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-navy-900 text-slate-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <span className="text-2xl font-bold text-white tracking-tight">FloPro<span className="text-blue-400">Pools</span></span>
                        <p className="mt-4 text-sm leading-6 max-w-md">
                            Marine-Grade Asset Management for the Charlotte Harbor Coast.
                            Specializing in corrosion defense for PGI canals and safety verification for North Port families.
                        </p>
                        <div className="flex space-x-6 mt-6">
                            <a href="#" className="text-slate-400 hover:text-white">
                                <Facebook className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-slate-400 hover:text-white">
                                <Instagram className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-slate-400 hover:text-white">
                                <Linkedin className="h-6 w-6" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Services</h3>
                        <ul className="mt-4 space-y-4">
                            <li>
                                <Link href="/services/punta-gorda-isles-canal-maintenance" className="text-sm hover:text-white">
                                    PGI Canal Defense
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/north-port-pet-friendly-pool-service" className="text-sm hover:text-white">
                                    North Port Pet Safety
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/rotonda-west-snowbird-watch" className="text-sm hover:text-white">
                                    Rotonda Snowbird Watch
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Contact</h3>
                        <ul className="mt-4 space-y-4">
                            <li className="flex items-start">
                                <MapPin className="h-5 w-5 mr-2 text-blue-400 flex-shrink-0" />
                                <span className="text-sm">Serving Port Charlotte, Punta Gorda, North Port, & Englewood</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="h-5 w-5 mr-2 text-blue-400 flex-shrink-0" />
                                <span className="text-sm">(941) 555-0123</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="h-5 w-5 mr-2 text-blue-400 flex-shrink-0" />
                                <span className="text-sm">service@flopropools.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-slate-800 pt-8">
                    <p className="text-sm text-slate-400 text-center">
                        &copy; {new Date().getFullYear()} FloPro Pools. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
