import { assets } from "../../../assets/assets";

export default function HeroSection() {
  return (
    <>
      <section className="h-max container mx-auto md:flex ">
        {/* Left */}
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-50 lg:px-16 px-4 py-10">
          <div className="text-[#414141] text-left">
            <div className="flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#414141]"></span>
              <span className="font-medium">OUR BESTSELLERS</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl leading-relaxed md:my-3 my-1 !font-prata">
              Latest Collections
            </h1>

            <div className="flex items-center gap-2">
              <span className="font-medium">Shop Now</span>
              <span className="w-8 h-0.5 bg-[#414141]"></span>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="w-full lg:w-1/2">
          <img src={assets.hero_img} alt="hero-img" />
        </div>
      </section>
    </>
  );
}
