import { Metadata } from "next";
import { Anchor, Shield, Activity } from "lucide-react";

export const metadata: Metadata = {
    title: "About FloPro Pools | Marine-Grade Asset Preservation",
    description: "We are not just pool cleaners. We are Asset Managers protecting your investment from salt, sun, and storms in Charlotte Harbor.",
};

export default function AboutPage() {
    return (
        <main className="bg-navy-950 text-titanium-100">
            {/* Hero Section */}
            <div className="relative isolate overflow-hidden py-24 sm:py-32">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-navy-950 to-navy-950 -z-10"></div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-titanium-200/10 border border-titanium-200/20 text-sm font-medium text-signal-orange mb-6">
                            <Activity className="w-4 h-4" />
                            <span>Asset Preservation Protocol</span>
                        </div>
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">The FloPro Standard</h2>
                        <p className="mt-6 text-lg leading-8 text-titanium-200/80">
                            Living in Port Charlotte means battling salt air, intense UV, and storm debris. We don't just skim leaves; we preserve your mechanical assets.
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-x-16 gap-y-16 lg:grid-cols-2 lg:items-start">
                        <div>
                            <h3 className="text-2xl font-bold tracking-tight text-white mb-6">More Than Pool Service</h3>
                            <div className="prose prose-invert text-titanium-200/80">
                                <p className="mb-6">
                                    From checking cage integrity in Rotonda to ensuring pet safety in North Port, FloPro is the Asset Manager your home deserves.
                                    We understand the unique challenges of the Charlotte Harbor coast.
                                </p>
                                <p className="mb-6">
                                    <strong>Salt mist from the canals eats away at heater coils.</strong> Intense UV degrades plastic fittings.
                                    Our "Marine-Grade" approach is designed to fight these elements proactively.
                                </p>
                                <p>
                                    We don't compete on price. We compete on protection. When you hire FloPro, you're hiring a team that treats your pool
                                    like the expensive mechanical asset it is, not just a hole in the ground with water in it.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                                <Anchor className="w-5 h-5 text-signal-orange" />
                                Service Area Coverage
                            </h3>
                            <ul className="space-y-4 text-titanium-200">
                                <li className="flex items-center p-3 rounded-lg bg-white/5 border border-white/5">
                                    <span className="w-2 h-2 bg-signal-orange rounded-full mr-3 shadow-[0_0_10px_rgba(249,115,22,0.5)]"></span>
                                    Punta Gorda Isles (Canal Specialist)
                                </li>
                                <li className="flex items-center p-3 rounded-lg bg-white/5 border border-white/5">
                                    <span className="w-2 h-2 bg-signal-orange rounded-full mr-3 shadow-[0_0_10px_rgba(249,115,22,0.5)]"></span>
                                    North Port (Gated & Family Homes)
                                </li>
                                <li className="flex items-center p-3 rounded-lg bg-white/5 border border-white/5">
                                    <span className="w-2 h-2 bg-signal-orange rounded-full mr-3 shadow-[0_0_10px_rgba(249,115,22,0.5)]"></span>
                                    Rotonda West (Snowbird Watch)
                                </li>
                                <li className="flex items-center p-3 rounded-lg bg-white/5 border border-white/5">
                                    <span className="w-2 h-2 bg-signal-orange rounded-full mr-3 shadow-[0_0_10px_rgba(249,115,22,0.5)]"></span>
                                    Englewood & Port Charlotte
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
