"use client";

import React, { useEffect, useRef } from "react";
import QRious from "qrious";
import ClipboardJS from "clipboard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const presents = [
  {
    label: "Cueca de um grande guerreiro",
    value: 100,
    image: "/lovable-uploads/cueca.png",
     pixCode: "00020126580014BR.GOV.BCB.PIX0136fdf18050-ede9-435a-8948-6a819a93a2f25204000053039865406100.005802BR5925Francisco Igor Silva Sant6009SAO PAULO62140510orwQ9WHJTA6304B4F4",
    cardLink: "https://mpago.la/2Rk7KcD"
  },
  {
    label: "Amo vocês, mas gastei no look",
    value: 220,
    image: "/lovable-uploads/look.png",
     pixCode: "00020126580014BR.GOV.BCB.PIX0136fdf18050-ede9-435a-8948-6a819a93a2f25204000053039865406220.005802BR5925Francisco Igor Silva Sant6009SAO PAULO62140510PMZAXvFWun6304534B",
    cardLink: "https://mpago.la/2qJZTon"
  },
  {
    label: "Deus te iluminou e você resolveu ajudar na viagem",
    value: 550,
    image: "/lovable-uploads/viagem.png",
     pixCode: "00020126580014BR.GOV.BCB.PIX0136fdf18050-ede9-435a-8948-6a819a93a2f25204000053039865406550.005802BR5925Francisco Igor Silva Sant6009SAO PAULO62140510mQVRgNCXmt63048858",
    cardLink: "https://mpago.la/1BeTbDT"
  },
  {
    label: "Só pra dizer que não dei nada",
    value: 100,
    image: "/lovable-uploads/nada.png",
     pixCode: "00020126580014BR.GOV.BCB.PIX0136fdf18050-ede9-435a-8948-6a819a93a2f25204000053039865406100.005802BR5925Francisco Igor Silva Sant6009SAO PAULO62140510orwQ9WHJTA6304B4F4",
    cardLink: "https://mpago.la/2Rk7KcD"
  },
  {
    label: "Cota pra perguntar quando o casal terá filhos",
    value: 160,
    image: "/lovable-uploads/filhos.png",
     pixCode: "00020126580014BR.GOV.BCB.PIX0136fdf18050-ede9-435a-8948-6a819a93a2f25204000053039865406160.005802BR5925Francisco Igor Silva Sant6009SAO PAULO62140510hJUsjchGVD63049AEA",
    cardLink: "https://mpago.la/1H9jHUD"
  },
  {
    label: "Taco caso o noivo não se comporte",
    value: 130,
    image: "/lovable-uploads/taco.png",
     pixCode: "00020126580014BR.GOV.BCB.PIX0136fdf18050-ede9-435a-8948-6a819a93a2f25204000053039865406130.005802BR5925Francisco Igor Silva Sant6009SAO PAULO621405105NClne9OV463040744",
    cardLink: "https://mpago.la/2qinG2v"
  },
  {
    label: "Tampão de ouvido pro noivo (ronco da noiva)",
    value: 125,
    image: "/lovable-uploads/tampao.png",
     pixCode: "00020126580014BR.GOV.BCB.PIX0136fdf18050-ede9-435a-8948-6a819a93a2f25204000053039865406125.005802BR5925Francisco Igor Silva Sant6009SAO PAULO62140510lgaSIzYXpO6304F742",
    cardLink: "https://mpago.la/2ue2G3L"
  },
  {
    label: "Relógio pra noiva parar de se atrasar",
    value: 140,
    image: "/lovable-uploads/relogio.png",
     pixCode: "00020126580014BR.GOV.BCB.PIX0136fdf18050-ede9-435a-8948-6a819a93a2f25204000053039865406140.005802BR5925Francisco Igor Silva Sant6009SAO PAULO62140510dW1uOFf1xC63042AFE",
    cardLink: "https://mpago.la/2DLUvci"
  },
  {
    label: "Alexa pra a noiva não mandar só no noivo",
    value: 360,
    image: "/lovable-uploads/alexa.png",
     pixCode: "00020126580014BR.GOV.BCB.PIX0136fdf18050-ede9-435a-8948-6a819a93a2f25204000053039865406360.005802BR5925Francisco Igor Silva Sant6009SAO PAULO62140510UsZzbLhFSh63046F79",
    cardLink: "https://mpago.la/2MWSaBD"
  },
  {
    label: "Vale um dia de descanso pós-casamento",
    value: 180,
    image: "/lovable-uploads/descanso.png",
     pixCode: "00020126580014BR.GOV.BCB.PIX0136fdf18050-ede9-435a-8948-6a819a93a2f25204000053039865406180.005802BR5925Francisco Igor Silva Sant6009SAO PAULO62140510tqIYOjKS1S6304579C",
    cardLink: "https://mpago.la/1Q3hzpi"
  },
  {
    label: "Ajuda nos 14 meses de aluguel",
    value: 250,
    image: "/lovable-uploads/aluguel.png",
     pixCode: "00020126580014BR.GOV.BCB.PIX0136fdf18050-ede9-435a-8948-6a819a93a2f25204000053039865406250.005802BR5925Francisco Igor Silva Sant6009SAO PAULO62140510XvzJxFZEib630426F7",
    cardLink: "https://mpago.la/1H9Xz5A"
  },
  {
    label: "Caneca personalizada do casal",
    value: 150,
    image: "/lovable-uploads/caneca.png",
     pixCode: "00020126580014BR.GOV.BCB.PIX0136fdf18050-ede9-435a-8948-6a819a93a2f25204000053039865406150.005802BR5925Francisco Igor Silva Sant6009SAO PAULO62140510gWCz0y89jG63046676",
    cardLink: "https://mpago.la/22bqVS8"
  },
  {
    label: "Bebe reborn de aluguel",
    value: 340,
    image: "/lovable-uploads/bebe-reborn.png",
     pixCode: "00020126580014BR.GOV.BCB.PIX0136fdf18050-ede9-435a-8948-6a819a93a2f25204000053039865406340.005802BR5925Francisco Igor Silva Sant6009SAO PAULO621405102ARTmEih6T630418FC",
    cardLink: "https://mpago.la/1ryEm3y"
  },
  {
    label: "Adote um boleto atrasado",
    value: 120,
    image: "/lovable-uploads/boleto.png",
     pixCode: "00020126580014BR.GOV.BCB.PIX0136fdf18050-ede9-435a-8948-6a819a93a2f25204000053039865406120.005802BR5925Francisco Igor Silva Sant6009SAO PAULO62140510I2C6PbyoT76304366D",
    cardLink: "https://mpago.la/1MLje3T"
  }
];


const GiftRegistry = () => {
  const { toast } = useToast();
  const qrRef = useRef<HTMLCanvasElement>(null);

  const pixCode =
    "00020126580014BR.GOV.BCB.PIX0136fdf18050-ede9-435a-8948-6a819a93a2f25204000053039865802BR5925Francisco Igor Silva Sant6009SAO PAULO62140510mITBFd82dW6304CD9E";

  useEffect(() => {
    if (qrRef.current) {
      new QRious({
        element: qrRef.current,
        value: pixCode,
        size: 160,
      });
    }

    const clipboard = new ClipboardJS(".copy-btn", {
      text: () => pixCode,
    });

    clipboard.on("success", () => {
      toast({
        title: "Chave Pix copiada!",
        description: "Você pode colar no app do banco agora. 📋💚",
      });
    });

    clipboard.on("error", () => {
      toast({
        variant: "destructive",
        title: "Erro ao copiar Pix",
        description: "Por favor, copie manualmente ou tente novamente.",
      });
    });

    return () => clipboard.destroy();
  }, []);

  return (
    <div className="py-12 md:py-16 bg-white">
      <div className="wedding-container text-center">
        <h1 className="section-title">Lista de Presentes</h1>
        <p className="section-subtitle mb-6 max-w-xl mx-auto">
          Se quiser nos abençoar com um presente simbólico, aqui vão algumas ideias:
        </p>

        {/* Grade de presentes */}
<div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto px-4 sm:px-0">
  {presents.map((item, index) => (
    <Card key={index} className="p-4 text-left shadow-md border">
      <img
        src={item.image}
        alt={item.label}
        className="w-full h-40 object-contain rounded-lg mb-4"
      />
      <div className="font-semibold text-gray-800 mb-2">{item.label}</div>
      <div className="flex gap-2 flex-wrap">
  <Button
    className="bg-[#1b4332] text-white hover:bg-[#14532d] copy-btn"
    data-clipboard-text={item.pixCode}
    onClick={() => {
      new QRious({
        element: qrRef.current!,
        value: item.pixCode,
        size: 160,
      });
      toast({
        title: "Chave Pix copiada!",
        description: "Você pode colar no app do banco agora. 📋💚",
      });
    }}
  >
    PIX R$ {item.value}
  </Button>

  <a href={item.cardLink} target="_blank" rel="noopener noreferrer">
    <Button variant="outline">Cartão R$ {item.value}</Button>
  </a>
</div>

    </Card>
  ))}
</div>


        {/* PIX direto */}
        <div className="my-10 border-t pt-10 w-full max-w-xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">Prefere contribuir de outra forma?</h2>

          <Card className="p-6 bg-[#102e1d] text-white mb-6">
            <blockquote className="text-sm mb-4 italic">
              Provérbios 22:9 — "Quem é generoso será abençoado..."
            </blockquote>
          </Card>

          <a
            href="https://link.mercadopago.com.br/igordev23"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-full mb-6">Deseja usar o cartão? 💳</Button>
          </a>

          <Card className="p-6 w-full">
            <h3 className="font-dancing text-2xl text-wedding-green mb-2">Use o QR Code do Pix</h3>
            <p className="text-gray-600 mb-4">
              Abra o app do seu banco, escaneie o código abaixo ou copie a chave Pix.
            </p>

            <div className="flex justify-center mb-4">
              <canvas ref={qrRef} className="border rounded p-2 w-40 h-40 object-contain" />
            </div>

            <Button className="copy-btn w-full mb-6" data-clipboard-text={pixCode}>
              Copiar chave Pix
            </Button>

            <div className="space-y-2 text-sm text-gray-700 text-left">
              <div className="flex justify-between">
                <span className="font-medium">Chave Pix:</span>
                <span className="text-right truncate">Aleatória</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Nome:</span>
                <span className="text-right">Francisco Igor Silva Santos</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">CPF:</span>
                <span className="text-right">•••.050.043-••</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Banco:</span>
                <span className="text-right">260 - Nu Pagamentos S.A.</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Identificador:</span>
                <span className="text-right">mITBFd82dW</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GiftRegistry;
