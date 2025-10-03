"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function PeakShipChallenges() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      icon: "/images/00_ALLGEMEINES/Questionmark/AVA_Questionmark_darkblue.png",
      heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore?"
    },
    {
      icon: "/images/00_ALLGEMEINES/Questionmark/AVA_Questionmark_darkblue.png",
      heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore?"
    },
    {
      icon: "/images/00_ALLGEMEINES/Questionmark/AVA_Questionmark_darkblue.png",
      heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore?"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isPaused, slides.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      } else if (e.key === 'ArrowRight') {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slides.length]);

  // Touch swipe support
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.targetTouches[0]) {
      setTouchStart(e.targetTouches[0].clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.targetTouches[0]) {
      setTouchEnd(e.targetTouches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }

    if (touchStart - touchEnd < -75) {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  return (
    <section
      role="region"
      aria-label="Herausforderungen Slider"
      className="py-16 lg:py-20 px-8 min-h-[400px] flex items-center"
      style={{ background: 'var(--gradient-peakship)' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="max-w-4xl mx-auto w-full text-center">

        {/* Slides Container */}
        <div className="relative">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="transition-opacity duration-500 ease-in-out"
              style={{
                opacity: currentSlide === index ? 1 : 0,
                display: currentSlide === index ? 'block' : 'none'
              }}
            >
              {/* Question Mark Icon */}
              <div className="flex justify-center mb-8">
                <Image
                  src={slide.icon}
                  alt="Fragezeichen"
                  width={120}
                  height={120}
                  className="w-20 lg:w-[120px] h-auto"
                  style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))' }}
                />
              </div>

              {/* Heading */}
              <h2
                className="text-2xl lg:text-4xl font-semibold leading-tight mx-auto"
                style={{ maxWidth: '800px', color: 'var(--color-dark-blue)' }}
              >
                {slide.heading}
              </h2>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div
          className="flex justify-center items-center gap-3 mt-12"
          role="tablist"
          aria-label="Slide navigation"
        >
          {slides.map((_, index) => (
            <button
              key={index}
              role="tab"
              aria-selected={currentSlide === index}
              aria-label={`Folie ${index + 1} von ${slides.length}`}
              onClick={() => setCurrentSlide(index)}
              className="w-3 h-3 lg:w-3 lg:h-3 rounded-full transition-opacity duration-300 cursor-pointer"
              style={{
                backgroundColor: 'var(--color-dark-blue)',
                opacity: currentSlide === index ? 1 : 0.5
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
