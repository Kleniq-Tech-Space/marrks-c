import Hero from "../components/home/Hero";
import WhyChoose from "../components/home/WhyChoose";
import CategoryShowcase from "../components/home/CategoryShowcase";
import FeaturedProducts from "../components/home/FeaturedProducts";
import ShowroomCta from "../components/home/ShowroomCta";
import Testimonial from "../components/home/Testimonial";
import Inspiration from "../components/home/Inspiration";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChoose />
      <CategoryShowcase />
      <FeaturedProducts />
      <ShowroomCta />
      <Testimonial />
      <Inspiration />
    </>
  );
}
