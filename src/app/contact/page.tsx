import { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
    title: "Contact Us | FloPro Pools",
    description: "Get in touch with FloPro Pools for Marine-Grade pool service in Port Charlotte, Punta Gorda, and North Port. Call (941) 555-0123 or request a quote.",
};

export default function ContactPage() {
    return (
        <main className="bg-navy-950 text-white min-h-screen">
            <div className="relative py-24 sm:py-32">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-navy-950 to-navy-950"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-4">
                            Contact FloPro Pools
                        </h1>
                        <p className="text-lg text-titanium-200/60 max-w-2xl mx-auto">
                            Ready to protect your pool investment? Reach out to our Marine-Grade Asset Management team.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
                                <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-signal-orange/20 flex items-center justify-center flex-shrink-0">
                                            <Phone className="w-5 h-5 text-signal-orange" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-white mb-1">Phone</h3>
                                            <a href="tel:9415550123" className="text-titanium-200/80 hover:text-signal-orange transition-colors">
                                                (941) 555-0123
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-signal-orange/20 flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-5 h-5 text-signal-orange" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-white mb-1">Email</h3>
                                            <a href="mailto:service@flopropools.com" className="text-titanium-200/80 hover:text-signal-orange transition-colors">
                                                service@flopropools.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-signal-orange/20 flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-5 h-5 text-signal-orange" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-white mb-1">Service Area</h3>
                                            <p className="text-titanium-200/80">
                                                Port Charlotte, Punta Gorda, North Port, Englewood, Rotonda West
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-signal-orange/20 flex items-center justify-center flex-shrink-0">
                                            <Clock className="w-5 h-5 text-signal-orange" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-white mb-1">Business Hours</h3>
                                            <p className="text-titanium-200/80">
                                                Monday - Friday: 8:00 AM - 6:00 PM<br />
                                                Saturday: 9:00 AM - 4:00 PM<br />
                                                Sunday: Closed
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
                            <h2 className="text-2xl font-bold text-white mb-6">Request a Quote</h2>
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-titanium-200 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-signal-orange focus:border-transparent transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-titanium-200 mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-signal-orange focus:border-transparent transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-titanium-200 mb-2">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-signal-orange focus:border-transparent transition-all"
                                        placeholder="(941) 555-0123"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="service" className="block text-sm font-medium text-titanium-200 mb-2">
                                        Service Needed *
                                    </label>
                                    <select
                                        id="service"
                                        name="service"
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-navy-900 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-signal-orange focus:border-transparent transition-all"
                                    >
                                        <option value="">Select a service</option>
                                        <option value="canal">PGI Canal Protection</option>
                                        <option value="rental">North Port Pet-Safe Service</option>
                                        <option value="snowbird">Rotonda Snowbird Monitoring</option>
                                        <option value="maintenance">Weekly Maintenance</option>
                                        <option value="repair">Equipment Repair</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-titanium-200 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-signal-orange focus:border-transparent transition-all resize-none"
                                        placeholder="Tell us about your pool and service needs..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full px-8 py-4 rounded-lg bg-signal-orange text-white font-bold hover:bg-orange-500 transition-all shadow-lg shadow-orange-900/30 hover:shadow-orange-900/50"
                                >
                                    Request Quote
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
