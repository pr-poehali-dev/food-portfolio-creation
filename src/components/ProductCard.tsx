
import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  unit: string;
  organic?: boolean;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  image,
  price,
  unit,
  organic = false,
  className,
}) => {
  return (
    <Card 
      className={cn("overflow-hidden transition-all duration-200 hover:shadow-lg group", className)}
    >
      <div className="relative overflow-hidden aspect-square">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
        {organic && (
          <div className="absolute top-3 right-3 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium">
            Эко
          </div>
        )}
      </div>
      <CardHeader>
        <CardTitle className="font-playfair">{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-xl font-semibold text-green-700">
          {price} ₽ <span className="text-sm font-normal text-gray-500">/ {unit}</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm" className="border-green-600 text-green-600 hover:bg-green-50">
          <Icon name="Info" className="h-4 w-4 mr-2" />
          Подробнее
        </Button>
        <Button className="bg-green-600 hover:bg-green-700 text-white">
          <Icon name="ShoppingCart" className="h-4 w-4 mr-2" />
          В корзину
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
