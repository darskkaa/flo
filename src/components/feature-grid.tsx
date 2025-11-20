import { X, Check, AlertTriangle } from 'lucide-react';

export function FeatureGrid() {
    return (
        <section className="py-24 bg-navy-950 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-navy-950 to-navy-950 pointer-events-none"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
                        The FloPro Standard vs. "The Other Guy"
                    </h2>
                    <p className="text-lg text-titanium-200/60 max-w-2xl mx-auto">
                        Why we are the only Marine-Grade Asset Managers in Charlotte Harbor.
                    </p>
                </div>

                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl">
                    <div className="grid grid-cols-3 bg-white/5 p-6 text-sm font-bold text-titanium-100 tracking-wider uppercase border-b border-white/10">
                        <div className="col-span-1">Feature</div>
                        <div className="col-span-1 text-center text-white/40">Standard Pool Guy</div>
                        <div className="col-span-1 text-center text-signal-orange">FloPro Standard</div>
                    </div>

                    <div className="divide-y divide-white/5">
                        {[
                            {
                                feature: "Equipment Care",
                                standard: "Visual check only",
                                flopro: "Freshwater Rinse (Salt-Stop)",
                                standardIcon: X,
                                floproIcon: Check
                            },
                            {
                                feature: "Gate Safety",
                                standard: "Might leave open",
                                flopro: "GPS-Timestamped Photo",
                                standardIcon: AlertTriangle,
                                floproIcon: Check
                            },
                            {
                                feature: "Reporting",
                                standard: "Paper ticket (maybe)",
                                flopro: "Digital Skimmer API Report",
                                standardIcon: X,
                                floproIcon: Check
                            },
                            {
                                feature: "Water Chemistry",
                                standard: "Guess & Pour",
                                flopro: "LSI Balanced & Logged",
                                standardIcon: AlertTriangle,
                                floproIcon: Check
                            },
                            {
                                feature: "Storm Prep",
                                standard: "Ghosted",
                                flopro: "Proactive Securement",
                                standardIcon: X,
                                floproIcon: Check
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="grid grid-cols-3 p-6 items-center hover:bg-white/5 transition-colors group">
                                <div className="col-span-1 font-medium text-titanium-100">{item.feature}</div>
                                <div className="col-span-1 flex flex-col items-center justify-center text-white/40 text-center group-hover:text-white/60 transition-colors">
                                    <item.standardIcon className="w-5 h-5 mb-2 opacity-50" />
                                    <span className="text-sm">{item.standard}</span>
                                </div>
                                <div className="col-span-1 flex flex-col items-center justify-center text-white font-semibold text-center bg-signal-orange/10 -my-6 py-6 border-x border-signal-orange/20 relative">
                                    <div className="absolute inset-0 bg-signal-orange/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <item.floproIcon className="w-5 h-5 mb-2 text-signal-orange relative z-10" />
                                    <span className="text-sm relative z-10">{item.flopro}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
