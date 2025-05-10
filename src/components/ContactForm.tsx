
import React from 'react';
import { Section } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const ContactForm: React.FC = () => {
  return (
    <Section id="contact" className="bg-green-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-green-800 mb-4">
          Свяжитесь с нами
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Оставьте заявку, и мы перезвоним вам для уточнения деталей заказа
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-white shadow-md border-none">
          <CardContent className="p-6">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input id="name" placeholder="Введите ваше имя" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" placeholder="+7 (___) ___-__-__" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Электронная почта</Label>
                <Input id="email" type="email" placeholder="example@mail.ru" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Комментарий к заказу</Label>
                <Textarea 
                  id="message" 
                  placeholder="Укажите какие продукты вас интересуют и другие пожелания"
                  rows={4}
                />
              </div>
              
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                Отправить заявку
              </Button>
            </form>
          </CardContent>
        </Card>
        
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-green-800">Наши контакты</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center">
                  <Icon name="Phone" className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Телефон</p>
                  <p className="font-medium">+7 (800) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center">
                  <Icon name="Mail" className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Электронная почта</p>
                  <p className="font-medium">info@eco-farm.ru</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center">
                  <Icon name="MapPin" className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Адрес</p>
                  <p className="font-medium">г. Москва, ул. Фермерская, д. 123</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-green-800">График работы</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Понедельник - Пятница</span>
                <span className="font-medium">09:00 - 20:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Суббота</span>
                <span className="font-medium">10:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Воскресенье</span>
                <span className="font-medium">10:00 - 16:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactForm;
