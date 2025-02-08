"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta19() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="w-full max-w-lg">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Unlock Your Coding Potential
          </h2>
          <p className="md:text-md">
            Join our course and start your journey to mastering the art of
            coding today!
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Button title="Enroll">Enroll</Button>
            <Button title="Learn More" variant="secondary">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
