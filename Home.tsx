
import Navigation from "./Navigation";
import Hero from "./Hero";
import ProductCarousel from "./ProductCarousel";
import Testimonials from "./Testimonials";
import ServicesGrid from "./ServicesGrid";
import BlogPreview from "./BlogPreview";
import InstitutionalGateway from "./InstitutionalGateway";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="font-sans text-gray-700 bg-white">
      <Hero />
      <ProductCarousel />
      <Testimonials />
      <ServicesGrid />
      <BlogPreview />
      <InstitutionalGateway />
      <Footer />
    </div>
  );
}
