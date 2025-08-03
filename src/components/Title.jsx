import React from "react";

export default function Title({ text1, text2 }) {
  return (
    <div className="inline-flex flex-col sm:flex-row items-center gap-2 mb-3 text-center">
      <p className="text-gray-500 uppercase">
        {text1} <span className="text-gray-700 font-semibold">{text2}</span>
      </p>
      <p className="w-16 sm:w-8 h-0.5 bg-gray-700"></p>
    </div>
  );
}