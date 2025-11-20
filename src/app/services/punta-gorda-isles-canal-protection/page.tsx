import { HeroSection } from "@/components/hero-section";
import { FeatureGrid } from "@/components/feature-grid";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Punta Gorda Isles Canal Protection | FloPro Pools",
    description: "Specialized pool service for PGI canal homes. We fight salt corrosion and protect your equipment with our Marine-Grade protocol.",
};

export default function PgiPage() {
    return (
        <main>
            <HeroSection defaultSegment="canal" />
            <FeatureGrid />
        </main>
    );
}
