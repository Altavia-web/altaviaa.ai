import React from 'react';
import Button from '@/components/Button';

export default function HomeCta() {
  return (
    <section className="py-16 px-6" style={{background: 'var(--gradient-mid-to-sky)'}}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div style={{color: 'var(--color-mid-blue)'}}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Bereit für den nächsten Höhenmeter?
            </h2>
            <h3 className="text-xl font-semibold mb-6" style={{color: 'var(--color-dark-blue)'}}>
              Partner werden:
            </h3>
            <p className="text-lg mb-8 leading-relaxed">
              Nutzen Sie unser Partnerprogramm – inklusive Vertriebsunterlagen,
              Testzugängen und direktem Kontakt. Erweitern Sie Ihr NetSuite-Angebot
              um professionelle deutsche Lokalisierungslösungen und bieten Sie
              Ihren Kunden die Tools, die sie für den deutschen Markt benötigen.
            </p>
            <Button
              variant="filled"
              color="midBlue"
              size="lg"
              showArrow={true}
              className="text-lg px-8 py-4"
            >
              Demo vereinbaren
            </Button>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <img
                src="/images/AVA_Poles_Grad.svg"
                alt="Alta Via Applications Poles Gradient"
                className="max-w-full h-auto max-h-96"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}