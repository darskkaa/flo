import { HeroSection } from "@/components/hero-section";
import { FeatureGrid } from "@/components/feature-grid";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "North Port Pet-Friendly Pool Service | FloPro Pools",
    description: "Gate-shut verification and pet safety checks for North Port families. We ensure your pool area is secure after every visit.",
};

export default function NorthPortPage() {
    return (
        <main>
            <HeroSection defaultSegment="rental" />
            <FeatureGrid />
        </main>
    );
}
