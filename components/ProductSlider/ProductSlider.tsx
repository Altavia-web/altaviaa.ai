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

interface ProductSliderProps {
  autoPlaySpeed?: number;
}

const products: Product[] = [
  {
    id: 'datev-export',
    name: 'DATEV Export',
    image: '/images/DE/WebP/AVA_DATEV_DE.webp',
    color: '#009b87',
    link: '/schnittstelle-datev',
    description: 'Die Buchhaltungssoftware der DATEV ist in Deutschland der Standard in der Steuerberatung und Wirtschaftsprüfung...'
  },
  {
    id: 'lokalisierung',
    name: 'Lokalisierung Deutschland',
    image: '/images/DE/WebP/AVA_LOKALISIERUNG_DE.webp',
    color: '#003399',
    link: '/localization-germany',
    description: 'In der Beratung von Alta Via haben sich über die Jahre einige Ergänzungen bewährt, die die Arbeit mit NetSuite in Deutschland verbessern...'
  },
  {
    id: 'reisekosten',
    name: 'Reisekosten',
    image: '/images/DE/WebP/AVA_REISEKOSTEN_DE.webp',
    color: '#7bcfc9',
    link: '/reisekosten',
    description: 'Erfassen und verwalten Sie Reisekosten effizient in NetSuite mit automatischer Spesenabrechnung und Genehmigungsworkflows...'
  },
  {
    id: 'dunning',
    name: 'Mahnwesen (Dunning)',
    image: '/images/DE/WebP/AVA_MAHNWESEN_DE.webp',
    color: '#980000',
    link: '/dunning',
    description: 'Automatisieren Sie Ihr Mahnwesen mit intelligenten Eskalationsstufen und rechtssicheren Mahnvorlagen für den deutschen Markt...'
  },
  {
    id: 'peak-ship',
    name: 'Peak Ship',
    image: '/images/DE/WebP/AVA_PEAK SHIP_DE.webp',
    color: '#ffba00',
    link: '/peak-ship',
    description: 'Peak Ship optimiert Ihre Versandprozesse in NetSuite mit Integration zu allen gängigen Versanddienstleistern...'
  }
];

export default function ProductSlider({ autoPlaySpeed = 5000 }: ProductSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Calculate total slides based on items per view
  const totalSlides = Math.ceil(products.length / itemsPerView);

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

  // Auto-play functionality
  useEffect(() => {
    if (!isHovered && autoPlaySpeed > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
      }, autoPlaySpeed);

      return () => clearInterval(interval);
    }
  }, [isHovered, autoPlaySpeed, totalSlides]);

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
      <div className="max-w-7xl mx-auto">
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
            Wir liefern Lösungen, mit denen Sie die höchsten Gipfel von NetSuite erreichen
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
            Entdecken Sie unsere Anwendungen und machen Sie Ihr NetSuite-System fit für den DACH-Markt:
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
          <div className="overflow-hidden px-2">
            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`
              }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex-shrink-0 bg-white overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col"
                  style={{
                    width: `calc(((100% - ${(itemsPerView - 1) * 1.5}rem) / ${itemsPerView}) * 0.9)`,
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
                      Mehr erfahren
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
