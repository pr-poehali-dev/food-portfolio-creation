
import React from 'react';
import { Section } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: "Leaf",
      title: "Экологически чистые",
      description: "Все наши продукты выращены без использования пестицидов и химических удобрений"
    },
    {
      icon: "Timer",
      title: "Всегда свежие",
      description: "Доставляем продукты в день сбора, чтобы сохранить все полезные свойства"
    },
    {
      icon: "Heart",
      title: "Полезные",
      description: "Богаты витаминами и минералами, необходимыми для здоровья"
    },
    {
      icon: "Home",
      title: "Фермерские",
      description: "Выращены с любовью на небольших фермерских хозяйствах нашего региона"
    }
  ];

  return (
    <Section id="about" className="bg-white">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="relative">
            <div className="absolute -left-6 -top-6 w-32 h-32 bg-green-100 rounded-full opacity-70" />
            <img
              src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1470&auto=format&fit=crop"
              alt="Фермер за работой"
              className="rounded-2xl shadow-lg w-full relative z-10"
            />
            <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-orange-100 rounded-full opacity-70" />
          </div>
        </div>
        
        <div>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-green-800 mb-6">
            О нашей ферме
          </h2>
          <p className="text-gray-700 mb-6">
            Наша семейная ферма находится в экологически чистом районе, в 50 километрах от города. Уже более 15 лет мы выращиваем натуральные продукты питания, используя только органические методы земледелия.
          </p>
          <p className="text-gray-700 mb-10">
            Мы верим, что здоровое питание начинается с качественных продуктов, поэтому тщательно следим за всеми этапами выращивания - от выбора семян до сбора урожая и доставки.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <Card key={index} className="bg-green-50 border-none">
                <CardContent className="p-6">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Icon name={feature.icon} className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
