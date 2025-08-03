import React from "react";
import { Input, Typography, Button } from "@material-tailwind/react";

export default function Newsletter() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="text-center my-8 mx-auto p-4 container h-max">
      <Typography variant="h4" color="blue-gray" className="font-medium">
        Subscribe now & get 20% off
      </Typography>
      <Typography color="gray" className="mt-2">
        Lorem ipsum is simply dummy text of the printing and typesetting
        industry
      </Typography>

      <form
        className="w-full md:w-1/2 flex flex-col md:flex-row mx-auto my-6"
        onSubmit={handleSubmit}
      >
        <Input
          type="email"
          placeholder="Enter your email"
          required
          className="!text-base rounded-none p-4 !border !border-gray-400 min-h-14 placeholder:text-gray-500 placeholder:opacity-100 text-gray-700 flex-1"
          labelProps={{
            className: "hidden",
          }}
        />
        <button
          type="submit"
          className="mt-6 md:mt-0  bg-black w-full md:w-auto text-white min-h-14 rounded-none lg:px-8 py-4 px-4 text-sm uppercase hover:bg-gray-900 transition-all duration-300"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
