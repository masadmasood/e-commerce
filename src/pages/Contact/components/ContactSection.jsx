import React from "react";
import { assets } from "../../../assets/assets";
import Title from "../../../components/Title";
import Newsletter from "../../../components/Newsletter";

export default function ContactSection() {
  return (
    <div className="container mx-auto px-4">
      <div className="text-2xl text-center pt-10 border-t">
        <Title text1="CONTACT" text2="US" />
      </div>

      <div className="my-10 mb-28 gap-10 flex flex-col justify-center lg:flex-row">
        <img
          src={assets.contact_img}
          alt="about-img"
          className="w-full lg:max-w-[480px]"
        />
        <div className="flex flex-col justify-center items-start">
          <h1 className="font-semibold text-xl text-gray-600">Our Store</h1>
          <p className="text-gray-500 my-4">
            54709 Williams Station <br /> Suite 350, Washington, USA
          </p>
          <p className="text-gray-500">
            Tel: (415) 555-0132 <br />
            Email: admin@forever.com
          </p>

          <h1 className="font-semibold text-xl text-gray-600 mt-4 mb-2">
            Careers At Forever
          </h1>
          <p className="text-gray-500">
            Learn more about our teams and job openings
          </p>
          <button className="mt-8 border-2 border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>

      <Newsletter />
    </div>
  );
}
