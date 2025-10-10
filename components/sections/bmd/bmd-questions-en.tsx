'use client';

import React, { useState, useEffect } from 'react';

const questions = [
  {
    id: 1,
    text: 'Do you want to export accounting data from NetSuite easily and import it into BMD without duplicate entries?'
  },
  {
    id: 2,
    text: 'Should the transfer of VAT postings from NetSuite to BMD be structured, accurate, and BMD-compliant?'
  },
  {
    id: 3,
    text: 'Are you looking for a solution that seamlessly supports Austrian standards and ensures complete compliance?'
  }
];

export default function BmdQuestionsEN() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % questions.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative flex items-center justify-center py-16"
      style={{
        minHeight: '72vh',
        background: 'var(--gradient-bmd)'
      }}
    >
      {/* Content */}
      <div className="relative z-10 mx-auto px-6 text-center" style={{ width: '60%' }}>
        {/* Question Mark Icon */}
        <div className="mb-8 flex justify-center">
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24 lg:w-32 lg:h-32"
          >
            <circle cx="60" cy="60" r="55" stroke="white" strokeWidth="6" />
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="white"
              fontSize="80"
              fontWeight="700"
              fontFamily="Titillium Web"
              dy="5"
            >
              ?
            </text>
          </svg>
        </div>

        {/* Question Text - Slider */}
        <div className="relative overflow-hidden" style={{ minHeight: '200px' }}>
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`
            }}
          >
            {questions.map((question) => (
              <div
                key={question.id}
                className="w-full flex-shrink-0"
              >
                <p
                  style={{
                    fontFamily: 'Titillium Web',
                    fontWeight: 600,
                    fontSize: '28px',
                    lineHeight: '140%',
                    letterSpacing: '0',
                    color: '#ffffff'
                  }}
                >
                  {question.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {questions.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="w-3 h-3 rounded-full transition-all hover:scale-110"
              style={{
                backgroundColor: currentIndex === index ? '#ffffff' : 'rgba(255, 255, 255, 0.4)'
              }}
              aria-label={`Go to question ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
