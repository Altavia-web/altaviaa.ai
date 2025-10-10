'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  image: string;
  color: string;
  link: string;
  description: string;
}

interface ProductSliderENProps {
  autoPlaySpeed?: number;
  currentProductSlug?: string;
}

const products: Product[] = [
  {
    id: 'datev-export',
    name: 'DATEV Interface',
    image: '/images/EN/WebP/AVA_Interface-DATEV_EN.webp',
    color: '#009b87',
    link: '/en/datev-interface',
    description: 'DATEV accounting software is the standard in tax consulting and auditing in Germany...'
  },
  {
    id: 'bmd-export',
    name: 'BMD Interface',
    image: '/images/EN/WebP/AVA_BMD_EN.webp',
    color: '#ff6120',
    link: '/en/bmd-interface',
    description: 'Seamless integration with BMD accounting software for Austrian businesses...'
  },
  {
    id: 'lokalisierung',
    name: 'German Localization',
    image: '/images/EN/WebP/AVA_LOKALISIERUNG_DE_EN.webp',
    color: '#003399',
    link: '/en/localization-germany',
    description: 'Through years of consulting at Alta Via, several enhancements have proven valuable for working with NetSuite in Germany...'
  },
  {
    id: 'lokalisierung-at',
    name: 'Austrian Localization',
    image: '/images/EN/WebP/AVA_LOKALISIERUNG_AT_EN.webp',
    color: '#003399',
    link: '/en/austrian-localization',
    description: 'Comprehensive localization features for Austrian legal and tax requirements...'
  },
  {
    id: 'reisekosten',
    name: 'Travel Expenses',
    image: '/images/EN/WebP/AVA_REISEKOSTEN_EN.webp',
    color: '#7bcfc9',
    link: '/en/travel-expenses',
    description: 'Record and manage travel expenses efficiently in NetSuite with automatic expense accounting and approval workflows...'
  },
  {
    id: 'dunning',
    name: 'Dunning Management',
    image: '/images/EN/WebP/AVA_MAHNWESEN_EN.webp',
    color: '#980000',
    link: '/en/dunning',
    description: 'Automate your dunning process with intelligent escalation levels and legally compliant dunning templates for the German market...'
  },
  {
    id: 'peak-ship',
    name: 'Peak Ship',
    image: '/images/EN/WebP/AVA_PEAK SHIP_EN.webp',
    color: '#ffba00',
    link: '/en/peak-ship',
    description: 'Peak Ship optimizes your shipping processes in NetSuite with integration to all major shipping service providers...'
  }
];

export default function ProductSliderEN({ autoPlaySpeed = 5000, currentProductSlug }: ProductSliderENProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Filter out current product if specified
  const filteredProducts = currentProductSlug
    ? products.filter(p => !p.link.includes(currentProductSlug))
    : products;

  // Duplicate products for infinite loop
  const duplicatedProducts = [...filteredProducts, ...filteredProducts];

  // Calculate total slides based on filtered products
  const totalSlides = filteredProducts.length;

  // Handle responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play functionality with infinite loop
  useEffect(() => {
    if (!isHovered && autoPlaySpeed > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => prev + 1);
      }, autoPlaySpeed);

      return () => clearInterval(interval);
    }
  }, [isHovered, autoPlaySpeed]);

  // Reset to start seamlessly when reaching the end
  useEffect(() => {
    if (currentIndex >= totalSlides) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
        setTimeout(() => {
          setIsTransitioning(true);
        }, 50);
      }, 500);
    }
  }, [currentIndex, totalSlides]);

  // Navigation handlers
  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToPrevious, goToNext]);

  // Touch handlers for mobile swipe
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
      goToNext();
    }

    if (touchStart - touchEnd < -75) {
      goToPrevious();
    }
  };

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="font-bold mb-4"
            style={{
              fontFamily: 'Titillium Web',
              fontSize: '44px',
              lineHeight: '110%',
              color: '#002e64'
            }}
          >
            We Deliver Solutions for You to Reach NetSuite&apos;s Highest Peaks
          </h2>
          <p
            className="mx-auto"
            style={{
              fontFamily: 'Titillium Web',
              fontSize: '18px',
              lineHeight: '140%',
              color: '#000000',
              maxWidth: '800px'
            }}
          >
            Discover our applications and make your NetSuite system fit for the DACH market:
          </p>
        </div>

        {/* Slider Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full flex items-center justify-center transition-all hover:opacity-90"
            style={{
              backgroundColor: 'rgba(80, 149, 203, 0.7)',
              left: '-10px',
              transform: 'translateX(-100%) translateY(-50%)'
            }}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-7 h-7" style={{ color: '#000000' }} />
          </button>

          <button
            onClick={goToNext}
            className="absolute top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full flex items-center justify-center transition-all hover:opacity-90"
            style={{
              backgroundColor: 'rgba(80, 149, 203, 0.7)',
              right: '-10px',
              transform: 'translateX(100%) translateY(-50%)'
            }}
            aria-label="Next slide"
          >
            <ChevronRight className="w-7 h-7" style={{ color: '#000000' }} />
          </button>

          {/* Product Cards */}
          <div className="overflow-hidden">
            <div
              className="flex gap-6"
              style={{
                transform: `translateX(calc(-${currentIndex} * (calc(${100 / itemsPerView}% - ${(itemsPerView - 1) * 1.5 / itemsPerView}rem) + 1.5rem)))`,
                transition: isTransitioning ? 'transform 500ms ease-in-out' : 'none'
              }}
            >
              {duplicatedProducts.map((product, index) => (
                <div
                  key={`${product.id}-${index}`}
                  className="flex-shrink-0 bg-white overflow-hidden flex flex-col"
                  style={{
                    width: `calc(${100 / itemsPerView}% - ${(itemsPerView - 1) * 1.5 / itemsPerView}rem)`,
                    borderRadius: '12px'
                  }}
                >
                  {/* Product Image with Color Overlay */}
                  <div
                    className="relative flex items-center justify-center"
                    style={{
                      backgroundColor: product.color,
                      aspectRatio: '1 / 1'
                    }}
                  >
                    <div className="relative w-full h-full p-4">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  </div>

                  {/* Product Content */}
                  <div className="p-6 flex-1 flex flex-col pb-8">
                    <h3
                      className="font-bold mb-3"
                      style={{
                        fontFamily: 'Titillium Web',
                        fontSize: '24px',
                        lineHeight: '110%',
                        color: '#002e64'
                      }}
                    >
                      {product.name}
                    </h3>
                    <p
                      className="mb-6 flex-1"
                      style={{
                        fontFamily: 'Titillium Web',
                        fontSize: '16px',
                        lineHeight: '140%',
                        color: '#000000'
                      }}
                    >
                      {product.description}
                    </p>
                    <Link
                      href={product.link}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all hover:opacity-90"
                      style={{
                        backgroundColor: '#5095cb',
                        color: '#ffffff',
                        fontFamily: 'Titillium Web',
                        fontSize: '16px'
                      }}
                    >
                      Learn more
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8" role="tablist" aria-label="Slide navigation">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="w-3 h-3 rounded-full transition-all hover:scale-110"
              style={{
                backgroundColor: currentIndex === index ? '#5095cb' : '#d1d5db'
              }}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={currentIndex === index ? 'true' : 'false'}
              role="tab"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
