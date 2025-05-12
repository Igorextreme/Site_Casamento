
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";


const Index = () => {
  const weddingDate = new Date("2025-06-15T00:00:00");
const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

useEffect(() => {
  const timer = setInterval(() => {
    const now = new Date();
    const distance = weddingDate.getTime() - now.getTime();

    if (distance > 0) {
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / 1000 / 60) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    } else {
      clearInterval(timer);
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  }, 1000);

  return () => clearInterval(timer);
}, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Couple's Photo Background */}
      <div 
        className="py-20 md:py-32 bg-cover bg-center relative"
        style={{ 
          backgroundImage: 'url("/lovable-uploads/2c098c29-c0d3-4764-834a-b49d1792d25e.png")',
        }}
      >
        {/* Overlay to darken the image and make text more readable */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        <div className="wedding-container text-center relative z-10">
          <div className="max-w-xl mx-auto bg-white bg-opacity-90 rounded-lg p-8 shadow-lg">
              {/* Logo circular com borda dourada suave */}
        <div className="mx-auto mb-8 w-32 h-32 rounded-full border-4 border-[#d4af37] flex items-center justify-center p-1 bg-white shadow-lg">
          <img 
            src="/lovable-uploads/9e5adae7-b59c-44be-a9a7-d77b0f35c856.png" 
            alt="Logo Igor & Nicole" 
            className="h-24 w-auto rounded-full"
          />
        </div>
            
            {/* Nome dos noivos */}
    <h1 className="font-dancing text-6xl md:text-8xl text-wedding-green mb-4 animate-fade-in tracking-widest">
      Igor & Nicole
    </h1>

          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-gray-600 italic mb-6 animate-fade-in">
            Estamos nos casando!
          </p>

          {/* Linha decorativa */}
          <div className="w-32 h-0.5 bg-[#d4af37] mx-auto mb-6 rounded-full"></div>

          {/* Data */}
          <p className="text-lg md:text-xl text-gray-700 mb-10 animate-fade-in font-light tracking-wide">
            15 de Junho de 2025
          </p>
          {/* Botões */}
    <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-in">
      <Link to="/rsvp">
        <Button className="wedding-button border border-[#d4af37] text-[#d4af37] bg-transparent hover:bg-[#d4af37] hover:text-white transition-all duration-300">
          Confirme sua presença
        </Button>
      </Link>
      <Link to="/gifts">
        <Button className="wedding-button border border-[#d4af37] text-[#d4af37] bg-transparent hover:bg-[#d4af37] hover:text-white transition-all duration-300">
          Presentes
        </Button>
      </Link>
      <Link to="/guidelines">
        <Button className="wedding-button border border-[#d4af37] text-[#d4af37] bg-transparent hover:bg-[#d4af37] hover:text-white transition-all duration-300">
          Manual do Convidado
        </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

{/* Countdown Section */}
<div className="py-16 bg-black text-center text-white">
  <div className="wedding-container">
    <h2 className="font-dancing text-4xl md:text-5xl mb-6">Contagem Regressiva</h2>
    <p className="text-xl md:text-2xl mb-8">Faltam apenas...</p>
    <div className="flex justify-center gap-4 md:gap-6">
      {[
        { label: "Dias", value: timeLeft.days },
        { label: "Horas", value: timeLeft.hours },
        { label: "Minutos", value: timeLeft.minutes },
        { label: "Segundos", value: timeLeft.seconds }
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white bg-opacity-90 text-wedding-green rounded-lg shadow-md px-4 py-6 md:px-6 md:py-8 w-24 md:w-28"
        >
          <div className="text-3xl md:text-5xl font-bold font-mono">
            {String(item.value).padStart(2, "0")}
          </div>
          <div className="text-sm md:text-base mt-2 font-semibold">{item.label}</div>
        </div>
      ))}
    </div>
  </div>
</div>


      {/* About Section */}
      <div className="py-16 bg-white">
        <div className="wedding-container">
          <h2 className="section-title">Nossa História</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-gray-700 mb-6">
              Bem-vindos ao nosso site de casamento! Estamos muito felizes em compartilhar esse momento especial com vocês.
              Nossa jornada juntos tem sido maravilhosa, e agora queremos celebrar nossa união com as pessoas que mais amamos.
            </p>
            <Link to="/rsvp">
              <Button className="wedding-button">Participe da cerimônia</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Color Scheme Section */}
      <div className="py-16 bg-gray-50">
        <div className="wedding-container">
          <h2 className="section-title">Esquema de Cores</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-24 h-24 rounded-full bg-white border-2 border-gray-200 mx-auto mb-4"></div>
                <h3 className="font-dancing text-2xl text-wedding-green mb-2">Branco</h3>
                <p className="text-gray-700">é a cor da noiva</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-24 h-24 rounded-full bg-wedding-green mx-auto mb-4"></div>
                <h3 className="font-dancing text-2xl text-wedding-green mb-2">Verde</h3>
                <p className="text-gray-700">é a cor das madrinhas</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-24 h-24 rounded-full bg-blue-400 mx-auto mb-4"></div>
                <h3 className="font-dancing text-2xl text-wedding-green mb-2">Azul</h3>
                <p className="text-gray-700">é a cor das damas de honra</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-wedding-green text-white">
        <div className="wedding-container text-center">
          <h2 className="font-dancing text-4xl md:text-5xl mb-8">Venha celebrar conosco!</h2>
          <Link to="/rsvp">
            <Button className="bg-white text-wedding-green hover:bg-wedding-pink hover:text-wedding-green py-3 px-8 rounded-md font-medium transition-all">
              Confirme sua presença
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
