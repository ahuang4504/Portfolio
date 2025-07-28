"use client";

import { useState } from "react";

const PhotoGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Temple in China",
      description:
        "One of my favorite pictures I've ever taken, snapped on a visit to family in China.",
      image: "/temple.jpeg",
    },
    {
      title: "Hiking with Family",
      description:
        "Hiking a mountain near where my mom grew up with family on a very hot day with no shade. 😵‍💫",
      image: "/hike.jpeg",
    },
    {
      title: "IM Football",
      description: "My intramural flag football team! 💪",
      image: "/football.JPG",
    },
    {
      title: "Monsterra",
      description: "One of my favorite drawings and plants: the monstera.",
      image: "/monsterra.jpg",
    },
    {
      title: "Snowboarding",
      description:
        "Snowboarding in Canada with my cousins. To all skiers, snowboarding is way more fun! 😸",
      image: "/snowboard.jpeg",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="box-3d p-6 w-full min-w-[350px]">
      <h3 className="font-heading text-lg text-[#2F4156] mb-4">Gallery</h3>

      <div className="relative">
        <div className="flex justify-center">
          <div className="bg-[#F5EFEB] rounded p-2 inline-block">
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="max-w-full h-[240px] object-cover rounded"
            />
          </div>
        </div>

        <div className="mt-4 text-left">
          <h4 className="font-heading text-lg text-[#2F4156] mb-2">
            {slides[currentSlide].title}
          </h4>
          <p className="text-[#666666] text-sm leading-relaxed">
            {slides[currentSlide].description}
          </p>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-[#2F4156] p-2 rounded-full transition-all"
          aria-label="Previous slide"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-[#2F4156] p-2 rounded-full transition-all"
          aria-label="Next slide"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? "bg-[#2F4156]" : "bg-[#E8E0DA]"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="text-center mt-2 text-xs text-[#666666]">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
};

export default PhotoGallery;
