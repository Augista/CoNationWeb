import About5 from "@/components/sections/about/About5";
import Blogs2 from "@/components/sections/blogs/Blogs2";
import CallToAction2 from "@/components/sections/call-to-action/CallToAction2";
import Categories3 from "@/components/sections/categories/Categories3";
import CounterUp2 from "@/components/sections/counters/CounterUp2";
import Features4 from "@/components/sections/features/Features4";
import Features5 from "@/components/sections/features/Features5";
import Hero2 from "@/components/sections/hero-banners/Hero2";
import HotDeal3 from "@/components/sections/hot-deals/HotDeal3";
import Testimonials3 from "@/components/sections/testimonils/Testimonials3";
import Video from "@/components/sections/videos/Video";

const MainPage = () => {
  return (
    <main>
      <Hero2 />
      <Features5 />
      <About5 />
      <Categories3 />
      <CounterUp2 />      
      <HotDeal3 />
      <CallToAction2 />
      <Video />
      <Testimonials3 />
      <Blogs2 type={2} pb={"pb-70"} />
      <Features4 type={2} mb={" mb-120"} />
    </main>
  );
};

export default MainPage;
