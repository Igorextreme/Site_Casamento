
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const gifts = [
  {
    id: 1,
    name: "Lua de mel",
    description: "Contribua para nossa viagem de lua de mel",
    price: "R$ 100 - R$ 1.000",
    link: "#"
  },
  {
    id: 2,
    name: "Jogo de jantar",
    description: "Um belo conjunto para nossos jantares especiais",
    price: "R$ 450",
    link: "#"
  },
  {
    id: 3,
    name: "Eletrodomésticos",
    description: "Ajude-nos a equipar nossa cozinha",
    price: "Vários valores",
    link: "#"
  },
  {
    id: 4,
    name: "Decoração",
    description: "Itens para decorar nosso novo lar",
    price: "R$ 150 - R$ 500",
    link: "#"
  },
  {
    id: 5,
    name: "Contribuição em dinheiro",
    description: "Para ajudar no que mais precisarmos",
    price: "Valor livre",
    link: "#"
  },
  {
    id: 6,
    name: "Móveis",
    description: "Para mobiliar nossa casa",
    price: "Vários valores",
    link: "#"
  }
];

const GiftRegistry = () => {
  return (
    <div className="py-12 md:py-16">
      <div className="wedding-container">
        <h1 className="section-title">Lista de Presentes</h1>
        <p className="section-subtitle">
          Sua presença é nosso maior presente, mas se quiser nos presentear, estas são algumas sugestões
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {gifts.map((gift) => (
            <Card key={gift.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <h3 className="font-dancing text-2xl text-wedding-green mb-2">{gift.name}</h3>
                <p className="text-gray-600 mb-4">{gift.description}</p>
                <p className="font-medium mb-4">{gift.price}</p>
                <a href={gift.link} target="_blank" rel="noopener noreferrer">
                  <Button className="wedding-button w-full">Ver presente</Button>
                </a>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="font-dancing text-3xl text-wedding-green mb-4">Informações para PIX</h2>
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
            <p className="font-medium mb-2">Chave PIX: 000.000.000-00</p>
            <p className="mb-4">Nome: Igor Noivo</p>
            <p className="text-gray-600">
              Se preferir transferir um valor, use o PIX acima. 
              Agradecemos por sua generosidade!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftRegistry;
