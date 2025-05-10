
import React from 'react';
import Icon from '@/components/ui/icon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Icon name="Leaf" className="h-5 w-5 text-green-600" />
              </div>
              <span className="text-xl font-bold font-playfair text-white">ЭкоФерма</span>
            </div>
            <p className="text-green-100 mb-4">
              Натуральные продукты питания с нашей фермы прямо к вашему столу
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-green-700 hover:bg-green-600 p-2 rounded-full transition-colors">
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
              <a href="#" className="bg-green-700 hover:bg-green-600 p-2 rounded-full transition-colors">
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
              <a href="#" className="bg-green-700 hover:bg-green-600 p-2 rounded-full transition-colors">
                <Icon name="Telegram" className="h-5 w-5" />
              </a>
              <a href="#" className="bg-green-700 hover:bg-green-600 p-2 rounded-full transition-colors">
                <Icon name="Youtube" className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-green-100 hover:text-white transition-colors">Главная</a></li>
              <li><a href="#products" className="text-green-100 hover:text-white transition-colors">Наши продукты</a></li>
              <li><a href="#about" className="text-green-100 hover:text-white transition-colors">О нас</a></li>
              <li><a href="#contact" className="text-green-100 hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Категории продуктов</h3>
            <ul className="space-y-2">
              <li><a href="#products" className="text-green-100 hover:text-white transition-colors">Фрукты</a></li>
              <li><a href="#products" className="text-green-100 hover:text-white transition-colors">Овощи</a></li>
              <li><a href="#products" className="text-green-100 hover:text-white transition-colors">Молочные продукты</a></li>
              <li><a href="#products" className="text-green-100 hover:text-white transition-colors">Мёд и варенье</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Icon name="MapPin" className="h-5 w-5 text-green-300 mt-0.5" />
                <span className="text-green-100">г. Москва, ул. Фермерская, д. 123</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="Phone" className="h-5 w-5 text-green-300" />
                <span className="text-green-100">+7 (800) 123-45-67</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="Mail" className="h-5 w-5 text-green-300" />
                <span className="text-green-100">info@eco-farm.ru</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="Clock" className="h-5 w-5 text-green-300" />
                <span className="text-green-100">Пн-Пт: 9:00 - 20:00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 mt-6 border-t border-green-700 text-center text-green-200 text-sm">
          <p>© {new Date().getFullYear()} ЭкоФерма. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
