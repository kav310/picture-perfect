import React from "react";
import Button from "../layout/Button";
import Image from "next/image";
import HeroImage from "../../assets/images/heroImage.svg"

const HeroSectionComponent = () => {
  return (
    <section className="bg-white">
      <div className="grid py-8 px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="place-self-center mr-auto lg:col-span-8">
          <div className="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl">
            What a good work process looks like
          </div>
          <div className="mb-2 max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Leave the past in the past. You can have access to elite talent.This
            second. This instant.
          </div>
          <Button>Get Started</Button>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-4 lg:flex">
        <Image
            src={HeroImage}
            alt="picture of a girl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSectionComponent;
