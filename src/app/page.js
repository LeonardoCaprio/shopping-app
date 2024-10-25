import Hero from "@/components/Hero";
import NewsProducts from "@/components/NewsProducts";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
      <main>
        <Hero />
        <NewsProducts />
        <Testimonial />
      </main>
  );
}
