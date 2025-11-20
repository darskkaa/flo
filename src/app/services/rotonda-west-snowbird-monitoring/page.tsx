import { HeroSection } from "@/components/hero-section";
import { FeatureGrid } from "@/components/feature-grid";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Rotonda West Snowbird Monitoring | FloPro Pools",
    description: "Remote pool monitoring for seasonal residents in Rotonda West. Weekly video reports and digital logs so you never worry while away.",
};

export default function RotondaPage() {
    return (
        <main>
            <HeroSection defaultSegment="monthly" />
            <FeatureGrid />
        </main>
    );
}
