
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Главная', href: '#' },
    { name: 'Продукты', href: '#products' },
    { name: 'О нас', href: '#about' },
    { name: 'Контакты', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
            <Icon name="Leaf" className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold font-playfair text-green-800">ЭкоФерма</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href}
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
            <Icon name="Phone" className="h-4 w-4 mr-2" />
            Связаться
          </Button>
          <Button className="bg-green-600 hover:bg-green-700 text-white">
            <Icon name="ShoppingCart" className="h-4 w-4 mr-2" />
            Корзина
          </Button>
        </div>
        
        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-green-600">
            <Icon name="ShoppingCart" className="h-5 w-5" />
          </Button>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-green-800">
                <Icon name="Menu" className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-white">
              <div className="flex flex-col gap-6 pt-10">
                <a href="#" className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                    <Icon name="Leaf" className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-lg font-bold font-playfair text-green-800">ЭкоФерма</span>
                </a>
                
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link, index) => (
                    <a 
                      key={index} 
                      href={link.href}
                      className="text-gray-700 hover:text-green-600 transition-colors font-medium py-2 border-b border-gray-100"
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
                
                <div className="flex flex-col gap-3 mt-4">
                  <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                    <Icon name="Phone" className="h-4 w-4 mr-2" />
                    Связаться
                  </Button>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    <Icon name="ShoppingCart" className="h-4 w-4 mr-2" />
                    Корзина
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
