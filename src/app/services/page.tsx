import { Metadata } from "next";
import Link from "next/link";
import { Anchor, Shield, Wifi, Wrench, Droplets, Camera } from "lucide-react";

export const metadata: Metadata = {
    title: "Our Services | FloPro Pools",
    description: "Marine-Grade pool services for Port Charlotte, Punta Gorda, and North Port. From canal corrosion defense to snowbird monitoring.",
};

const services = [
    {
        icon: Anchor,
        title: "PGI Canal Protection",
        description: "Specialized corrosion defense protocol for canal-front properties. Freshwater equipment rinse and sacrificial anode monitoring.",
        link: "/services/punta-gorda-isles-canal-protection",
        features: ["Salt-Stop Rinse", "Anode Checks", "Cage Integrity"]
    },
    {
        icon: Shield,
        title: "North Port Pet-Safe Service",
        description: "GPS-verified gate security and pet-safe protocols for families and rental properties.",
        link: "/services/north-port-pet-friendly-pool-service",
        features: ["Gate-Shut Photos", "Pet Safety", "Renter Reports"]
    },
    {
        icon: Wifi,
        title: "Rotonda Snowbird Monitoring",
        description: "Remote pool monitoring with weekly video reports and digital chemical logs for seasonal residents.",
        link: "/services/rotonda-west-snowbird-monitoring",
        features: ["Video Reports", "Digital Logs", "Storm Prep"]
    },
    {
        icon: Wrench,
        title: "Equipment Maintenance & Repair",
        description: "Professional diagnosis and repair of pumps, heaters, filters, and automation systems.",
        link: "/contact",
        features: ["Pump Repair", "Heater Service", "Filter Cleaning"]
    },
    {
        icon: Droplets,
        title: "Chemical Balancing & Water Testing",
        description: "LSI-balanced chemistry with digital logging. Prevent corrosion and scaling with precision water management.",
        link: "/contact",
        features: ["LSI Balancing", "Digital Logs", "Algae Prevention"]
    },
    {
        icon: Camera,
        title: "Digital Service Reporting",
        description: "GPS-timestamped reports with photos and chemical readings delivered to your phone after every visit.",
        link: "/contact",
        features: ["GPS Timestamps", "Photo Documentation", "Mobile Access"]
    }
];

export default function ServicesPage() {
    return (
        <main className="bg-navy-950 text-white">
            <div className="relative py-24 sm:py-32">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-navy-950 to-navy-950"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-4">
                            Marine-Grade Pool Services
                        </h1>
                        <p className="text-lg text-titanium-200/60 max-w-2xl mx-auto">
                            Engineered for the Charlotte Harbor coast. From corrosion defense to remote monitoring.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, idx) => (
                            <Link
                                key={idx}
                                href={service.link}
                                className="group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-signal-orange/50 hover:bg-white/10 transition-all"
                            >
                                <div className="w-14 h-14 rounded-full bg-signal-orange/20 flex items-center justify-center mb-6 group-hover:bg-signal-orange/30 transition-all">
                                    <service.icon className="w-7 h-7 text-signal-orange" />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                                <p className="text-titanium-200/80 mb-6 leading-relaxed">{service.description}</p>

                                <ul className="space-y-2 mb-6">
                                    {service.features.map((feature, fidx) => (
                                        <li key={fidx} className="flex items-center gap-2 text-sm text-titanium-100">
                                            <span className="w-1.5 h-1.5 rounded-full bg-signal-orange"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex items-center gap-2 text-signal-orange font-semibold text-sm group-hover:gap-3 transition-all">
                                    Learn More
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-lg bg-signal-orange px-8 py-4 text-sm font-bold text-white shadow-lg shadow-orange-900/30 hover:bg-orange-500 hover:shadow-orange-900/50 transition-all"
                        >
                            Request a Custom Quote
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
