import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
    });
  }, []);

  return (
    <section className="mt-6 max-w-7xl mx-auto px-5 flex flex-col gap-y-5 items-center lg:flex-row lg:justify-between">
      <div
        className="flex flex-col items-center lg:items-start gap-y-3 lg:gap-y-7 order-1 max-lg:order-2 lg:w-5/12 max-lg:max-w-[800px] text-center lg:text-start max-lg:pb-4"
        data-aos="fade-right">
        <h1 className="text-base xs:text-xl lg:text-start lg:text-2xl font-bold relative">
          Your Gateway to Endless Entertainment
          <img
            src="underline.jpg"
            alt="underline"
            className="absolute left-0 -bottom-2 w-[380px] max-lg:max-w-[266px] h-2 max-lg:hidden select-none"
          />
        </h1>
        <span className="text-xs xxs:text-sm xs:text-base lg:text-lg !leading-6 xs:!leading-7 lg:leading-8 text-slate-600">
          Discover AminMovie, where you can enjoy a wide range of movies and
          series anytime, anywhere. With an easy-to-use interface and
          personalized recommendations, finding your next favorite is a breeze.
        </span>
        <div className="flex gap-x-5">
          <a
            href="#Movies"
            className="flex items-center justify-center gap-x-1 bg-[#da47c2c2] max-w-[190px] max-xxs:text-sm max-vxs:text-xs text-center p-2 text-white rounded-full uppercase">
            get watching
            <i className="bi bi-arrow-bar-right text-xl pt-1"></i>
          </a>
        </div>
      </div>
      <div
        className="max-w-[550px] order-2 max-lg:order-1 max-lg:max-w-[450px]"
        data-aos="fade-left">
        <img src="hero.jpg" alt="movie" />
      </div>
    </section>
  );
}

export default HeroSection;
