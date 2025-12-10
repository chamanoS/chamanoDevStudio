import React from "react";
import LandingHero from "../landinghero/LandingHero";
import Service from "../service/Service";
import ValueProposition from "../valueproposition/ValueProposition";
import FeaturedProjects from "../featuredprojects/FeaturedProjects";
import Testimonial from "../testimonials/Testimonials";




export default function LandingPage() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* Hero */}
      <LandingHero />
     
      {/* Services */}
      <Service />

      {/* value proposition */}
      <ValueProposition />

      {/* Featured projects */}
      <FeaturedProjects />

      {/* CTA / Testimonials */}
      <Testimonial />

      {/*Footer*/}
     
    </div>
  );
}