import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { TrustBar } from '@/components/sections/TrustBar';
import { Audiences } from '@/components/sections/Audiences';
import { Pricing } from '@/components/sections/Pricing';
import { Quality } from '@/components/sections/Quality';
import { WhyUs } from '@/components/sections/WhyUs';
import { PreOrder } from '@/components/sections/PreOrder';
import { SamplePack } from '@/components/sections/SamplePack';
import { Gallery } from '@/components/sections/Gallery';
import { Testimonials } from '@/components/sections/Testimonials';
import { Faq } from '@/components/sections/Faq';
import { Quote } from '@/components/sections/Quote';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <a
        href="#pricing"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:text-ink-950"
      >
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Audiences />
        <Pricing />
        <Quality />
        <WhyUs />
        <PreOrder />
        <SamplePack />
        <Gallery />
        <Testimonials />
        <Faq />
        <Quote />
      </main>
      <Footer />
    </div>
  );
}

export default App;
