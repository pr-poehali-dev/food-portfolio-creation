import React from "react";
import { Section } from "@/components/ui/section";
import ProductCard from "./ProductCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Пример данных продуктов
const products = [
  {
    id: "1",
    name: "Органические яблоки",
    description: "Сладкие и сочные яблоки, выращенные без пестицидов",
    image:
      "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?q=80&w=1470&auto=format&fit=crop",
    price: 189,
    unit: "кг",
    organic: true,
    category: "fruits",
  },
  {
    id: "2",
    name: "Фермерская морковь",
    description: "Свежая хрустящая морковь с фермерских угодий",
    image:
      "https://images.unsplash.com/photo-1590868309235-ea34bed7bd7f?q=80&w=1767&auto=format&fit=crop",
    price: 79,
    unit: "кг",
    organic: true,
    category: "vegetables",
  },
  {
    id: "3",
    name: "Домашний творог",
    description: "Нежный творог из свежего молока без добавок",
    image:
      "https://images.unsplash.com/photo-1571861711154-a08a75a36e28?q=80&w=1374&auto=format&fit=crop",
    price: 320,
    unit: "500г",
    organic: true,
    category: "dairy",
  },
  {
    id: "4",
    name: "Мёд цветочный",
    description: "Натуральный мёд с пасеки, собранный с полевых цветов",
    image:
      "https://images.unsplash.com/photo-1587049352851-8d4c89133924?q=80&w=1480&auto=format&fit=crop",
    price: 450,
    unit: "0.5л",
    organic: true,
    category: "other",
  },
  {
    id: "5",
    name: "Свежая капуста",
    description: "Сочная белокочанная капуста с грядки",
    image:
      "https://images.unsplash.com/photo-1613148700241-b4817f98c3c0?q=80&w=1516&auto=format&fit=crop",
    price: 59,
    unit: "кг",
    organic: false,
    category: "vegetables",
  },
  {
    id: "6",
    name: "Клубника",
    description: "Сладкая спелая клубника, выращенная без химикатов",
    image:
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=1470&auto=format&fit=crop",
    price: 299,
    unit: "250г",
    organic: true,
    category: "fruits",
  },
  {
    id: "7",
    name: "Фермерский сыр",
    description: "Твёрдый выдержанный сыр домашнего приготовления",
    image:
      "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=1374&auto=format&fit=crop",
    price: 580,
    unit: "300г",
    organic: true,
    category: "dairy",
  },
  {
    id: "8",
    name: "Домашний хлеб",
    description: "Цельнозерновой хлеб на закваске из экологичной муки",
    image:
      "https://images.unsplash.com/photo-1585478259715-876a6a81fc08?q=80&w=1471&auto=format&fit=crop",
    price: 160,
    unit: "шт",
    organic: true,
    category: "other",
  },
];

const ProductGallery: React.FC = () => {
  return (
    <Section id="products" className="bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-green-800 mb-4">
          Наша продукция
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Свежие и натуральные продукты прямо с фермы для вашего здорового
          питания
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="w-full max-w-md mx-auto grid grid-cols-2 md:grid-cols-5 mb-8">
          <TabsTrigger value="all">Все</TabsTrigger>
          <TabsTrigger value="fruits">Фрукты</TabsTrigger>
          <TabsTrigger value="vegetables">Овощи</TabsTrigger>
          <TabsTrigger value="dairy">Молочное</TabsTrigger>
          <TabsTrigger value="other">Другое</TabsTrigger>
        </TabsList>

        <TabsContent
          value="all"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </TabsContent>

        {["fruits", "vegetables", "dairy", "other"].map((category) => (
          <TabsContent
            key={category}
            value={category}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {products
              .filter((product) => product.category === category)
              .map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
          </TabsContent>
        ))}
      </Tabs>
    </Section>
  );
};

export default ProductGallery;
