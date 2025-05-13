
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SaveTheDate from './SaveTheDate'; 
import { RevealOnScroll } from "@/components/RevealOnScroll"; 
import { MapPin } from "lucide-react";


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
  className="relative bg-cover bg-center min-h-[60vh] flex items-center justify-center"
  style={{
    backgroundImage: 'url("/lovable-uploads/2c098c29-c0d3-4764-834a-b49d1792d25e.png")',
  }}
>
  {/* Overlay escura */}
  <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

  {/* Conteúdo da contagem */}
  <div className="text-center text-white z-10 px-4 w-full">
    <h2 className="font-dancing text-3xl md:text-5xl mb-4">Contagem Regressiva</h2>
    <p className="text-lg md:text-2xl mb-6">Faltam apenas...</p>

    {/* Contadores */}
    <div className="flex justify-center flex-wrap gap-3 md:gap-6">
      {[
        { label: "Dias", value: timeLeft.days },
        { label: "Horas", value: timeLeft.hours },
        { label: "Minutos", value: timeLeft.minutes },
        { label: "Segundos", value: timeLeft.seconds },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white bg-opacity-90 text-wedding-green rounded-xl shadow-lg px-3 py-4 md:px-5 md:py-6 w-20 md:w-28 flex flex-col items-center justify-center text-center border border-[#d4af37]"
        >
          <div className="text-2xl md:text-5xl font-bold font-mono tracking-wider">
            {String(item.value).padStart(2, "0")}
          </div>
          <div className="text-xs md:text-base mt-2 font-semibold uppercase">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  </div>
  
</div>

  

      {/* Conteúdo geral */}
      <div
  className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white px-4 py-16 bg-cover bg-center"
  
>
  {/* Overlay escura para contraste */}
  <div className="absolute inset-0 bg-white z-0"></div>

  {/* Conteúdo acima da overlay */}
  <div className="relative z-10 flex flex-col items-center">
    {/* Nomes dos noivos */}
    <h1 className="font-dancing text-5xl md:text-7xl text-wedding-green mb-4 tracking-widest drop-shadow-lg">
      Igor & Nicole
    </h1>

    <p className="text-2xl md:text-3xl text-black italic mb-4 drop-shadow-md">
      Estamos prestes a viver o dia mais especial das nossas vidas!
    </p>

    <div className="w-32 h-0.5 bg-[#d4af37] mx-auto mb-4 rounded-full"></div>

    <p className="text-lg md:text-xl text-black mb-8 drop-shadow-md">
      15 de Junho de 2025
    </p>
{/* Localização */}
<a
    href="https://maps.app.goo.gl/T7jsSDhvKy33yoof9"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-wedding-green hover:underline text-lg md:text-xl mb-8"
  >
    <MapPin className="w-5 h-5" />
    Espaço Monteiro
  </a>
    {/* Botões */}
    <div className="flex flex-col md:flex-row gap-4 justify-center">
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

<RevealOnScroll>
  <SaveTheDate />
</RevealOnScroll>

      {/* About Section */}
      <div className="py-16 bg-white">
        <div className="wedding-container">
          <h2 className="section-title">Nossa História</h2>
          <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-700 mb-6">
            Nicole e Igor se conheceram ainda na infância ela com 10 anos, ele com 11. Aos 13 anos, Igor mudou-se para o Rio de Janeiro e retornou ao Piauí aos 19, com o intuito de visitar seus familiares. Após seis anos, o destino os reencontrou, e eles retomaram o contato como bons amigos.
            <br /><br />
            Igor voltou ao Rio sem imaginar que, em breve, retornaria novamente desta vez, para ficar definitivamente. No dia 13 de abril de 2021, iniciaram um relacionamento marcado por companheirismo, superações e amadurecimento.
            <br /><br />
            Depois de muitos momentos compartilhados, no dia 6 de julho de 2024, tomaram juntos a mais importante decisão de suas vidas. E logo mais você poderá prestigiar esse momento juntamente com eles..
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
