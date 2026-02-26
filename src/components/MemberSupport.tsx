import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SupportCard {
  image: string;
  title: string;
  description: string;
  cta: string;
}

const supportCards: SupportCard[] = [
  {
    image: 'https://images.ctfassets.net/473zoc40547p/2MmRL0qUaxUrlYJWqoZvaM/ad63e193da416422ff19dddaecb262a8/PF_Web_HP_Content_Block_USA_Today_Award.png?fm=avif&w=2560&fit=fill',
    title: 'AWARD-WINNING MEMBER SUPPORT',
    description:
      'We’re proud to be recognized on America’s Best Customer Service list, a reflection of our team’s commitment to creating a friendly environment where everyone feels accepted and respected.',
    cta: 'Join the Club',
  },
  {
    image: 'https://images.ctfassets.net/473zoc40547p/1AEd1AlUbTcDdkQ2KGzuiK/c934313c28dd62a1540080b384b533ba/BCGuest.webp?fm=avif&w=2560&fit=fill',
    title: '24/7 ACCESS TO FACILITIES',
    description:
      'Our members can enjoy access to all gym equipment and classes anytime, ensuring flexibility for every schedule.',
    cta: 'Learn More',
  },
  {
    image: 'https://images.ctfassets.net/473zoc40547p/nbA3yYXOooLBSxki5vgyc/5a7c156d367565c5c785ff03faf211bb/07.12.24_Web_Re-Design_Virtual_Tour_Update.jpg?fm=avif&w=2560&fit=fill',
    title: 'EXPERT TRAINERS',
    description:
      'Work with certified trainers who provide personalized fitness plans to help you achieve your goals.',
    cta: 'Meet the Team',
  },
];

const MemberSupport: React.FC = () => {
  const [active, setActive] = useState(0);

  const prev = () => setActive((prevIndex) => (prevIndex - 1 + supportCards.length) % supportCards.length);
  const next = () => setActive((prevIndex) => (prevIndex + 1) % supportCards.length);

  return (
    <section className="py-16 bg-iron-dark-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8">
        
        {/* Image */}
        <img
          src={supportCards[active].image}
          alt={supportCards[active].title}
          className="w-full md:w-1/2 rounded-lg shadow-lg object-cover border border-iron-dark-4"
        />

        {/* Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="section-title mb-4">{supportCards[active].title}</h2>
          <p className="text-iron-gray-light mb-6">{supportCards[active].description}</p>

          <button className="btn-primary">{supportCards[active].cta}</button>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center md:justify-start gap-2 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 flex items-center justify-center border border-iron-dark-4 text-iron-gray-light hover:text-iron-red hover:border-iron-red transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <span className="text-iron-gray-light font-semibold">
              {active + 1}/{supportCards.length}
            </span>

            <button
              onClick={next}
              className="w-10 h-10 flex items-center justify-center border border-iron-dark-4 text-iron-gray-light hover:text-iron-red hover:border-iron-red transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemberSupport;