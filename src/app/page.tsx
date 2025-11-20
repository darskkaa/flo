import { HeroSection } from "@/components/hero-section";
import { ComparisonSection } from "@/components/comparison-section";
import { ProjectGallery } from "@/components/project-gallery";
import { TestimonialsSection } from "@/components/testimonials-section";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ComparisonSection />
      <ProjectGallery />
      <TestimonialsSection />
    </div>
  );
}
