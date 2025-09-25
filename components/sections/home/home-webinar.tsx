import React from 'react';
import Button from '@/components/Button';

export default function HomeWebinar() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
          Jetzt registrieren: Webinar Localization GER 3.0
        </h2>

        <div className="mb-8 max-w-2xl mx-auto">
          <ul className="text-left space-y-4 text-lg text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3">•</span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3">•</span>
              Incididunt ut labore et dolore magna aliqua ut enim ad minim veniam
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3">•</span>
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3">•</span>
              Consequat duis aute irure dolor in reprehenderit in voluptate velit esse
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3">•</span>
              Cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat
            </li>
          </ul>
        </div>

        <Button
          variant="filled"
          color="midBlue"
          size="lg"
          showArrow={true}
          className="text-lg px-8 py-4"
        >
          Jetzt registrieren
        </Button>
      </div>
    </section>
  );
}