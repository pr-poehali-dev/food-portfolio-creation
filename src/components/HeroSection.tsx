
import React from 'react';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';

const HeroSection: React.FC = () => {
  return (
    <Section className="bg-gradient-to-b from-green-50 to-white pt-28 pb-20">
      <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold leading-tight text-green-800">
            Свежие натуральные продукты прямо к вашему столу
          </h1>
          <p className="text-lg text-gray-700">
            Мы выращиваем и поставляем самые качественные продукты для вашего здорового питания. Без ГМО, пестицидов и химикатов.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg">
              Заказать
            </Button>
            <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-6 text-lg">
              Каталог
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-4 -top-4 w-24 h-24 bg-orange-300 rounded-full opacity-20 animate-pulse" />
          <img
            src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=1170&auto=format&fit=crop"
            alt="Свежие овощи и фрукты"
            className="w-full h-auto rounded-2xl shadow-xl animate-fade-in z-10 relative"
          />
          <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-green-300 rounded-full opacity-20 animate-pulse" />
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
