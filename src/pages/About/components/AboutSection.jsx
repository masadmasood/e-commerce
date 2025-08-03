import React from "react";
import { assets } from "../../../assets/assets";
import Title from "../../../components/Title";
import Newsletter from "../../../components/Newsletter";

export default function AboutSection() {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="text-2xl text-center pt-10 border-t">
          <Title text1={"ABOUT"} text2={"US"} />
        </div>

        <div className="my-10 flex flex-col lg:flex-row gap-16 items-start">
          <img
            src={assets.about_img}
            alt="about-img"
            className="w-full lg:max-w-[450px]"
          />
          <div className="flex flex-col justify-center gap-6 lg:w-2/4 text-gray-600">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque libero officia ducimus sed obcaecati nisi, ullam
              explicabo deserunt facere id, natus omnis optio eligendi. Libero,
              ad. Itaque perferendis cupiditate architecto corporis libero
              aliquid explicabo tenetur sint, dolor dolore, id.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              omnis soluta repudiandae culpa id repellendus, ducimus quos
              impedit maxime dolore, eius itaque iste debitis, aliquid tempore
              veniam.
            </p>
            <p className="text-lg">
              <b className="text-gray-800">Our Mission</b>
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusamus provident architecto incidunt! Adipisci numquam deserunt
              sunt quia nihil enim quibusdam ea officiis! Incidunt officia aut
              nisi! Quo excepturi nisi vitae debitis deserunt itaque aut quidem?
            </p>
          </div>
        </div>

        <div className="text-xl pt-8 pb-4">
          <Title text1={"WHY"} text2={"CHOOSE US"} />
        </div>

        <div className="flex flex-col lg:flex-row text-sm mb-20 gap-4">
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <p className="text-base">
              <b>Quality Assurance:</b>
            </p>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
              iure fuga atque officiis at cupiditate nihil voluptates eum magnam
              unde suscipit eius, eveniet labore accusamus amet. Eveniet
              deserunt doloribus provident.
            </p>
          </div>

          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <p className="text-base">
              <b>Convenience:</b>
            </p>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
              iure fuga atque officiis at cupiditate nihil voluptates eum magnam
              unde suscipit eius, eveniet labore accusamus amet. Eveniet
              deserunt doloribus provident.
            </p>
          </div>

          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <p className="text-base">
              <b>Exceptional Customar Service:</b>
            </p>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
              iure fuga atque officiis at cupiditate nihil voluptates eum magnam
              unde suscipit eius, eveniet labore accusamus amet. Eveniet
              deserunt doloribus provident.
            </p>
          </div>
        </div>

        <Newsletter />
      </div>
    </>
  );
}
