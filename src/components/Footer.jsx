import React from "react";
import { assets } from "../assets/assets";
export default function Footer() {
  return (
    <footer className="mt-32 mx-auto container h-max px-4">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm">
        <div>
          <img src={assets.logo} alt="logo" className="mb-5 w-32" />
          <p className="md:w-2/3 w-full text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            quis. Soluta voluptatibus optio ipsam enim. Rerum perferendis
            repellendus, earum reprehenderit, explicabo fugiat sit voluptates
            obcaecati dolorum laboriosam maiores voluptate nemo.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600 space-y-1">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="uppercase text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600 space-y-1">
            <li>+1-212-456-7890</li>
            <li>contact@foreveryou.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t-2">
        <p className="py-5 text-sm text-center text-[#414141]">
          &copy; 2024 ForeverYou. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
