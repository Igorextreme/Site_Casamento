"use client";

import React, { useEffect, useRef } from "react";
import QRious from "qrious";
import ClipboardJS from "clipboard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const GiftRegistry = () => {
  const { toast } = useToast();
  const qrRef = useRef<HTMLCanvasElement>(null);

  const pixCode =
    "00020126580014BR.GOV.BCB.PIX0136fdf18050-ede9-435a-8948-6a819a93a2f25204000053039865802BR5925Francisco Igor Silva Sant6009SAO PAULO62140510mITBFd82dW6304CD9E";

  useEffect(() => {
    // Gera o QR Code
    if (qrRef.current) {
      new QRious({
        element: qrRef.current,
        value: pixCode,
        size: 160,
      });
    }

    // ClipboardJS para copiar Pix
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
    <div className="py-12 md:py-16">
      <div className="wedding-container">
        <h1 className="section-title">Presentear com PIX ou Cartão</h1>
        <p className="section-subtitle mb-6">
          Sua presença é nosso maior presente. Se quiser nos abençoar, aqui estão as formas de contribuição:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 items-start">
          {/* LEFT SIDE */}
          <Card className="p-6 bg-[#102e1d] text-white">
            <blockquote className="text-sm mb-4 italic">
              Provérbios 22:9 — "Quem é generoso será abençoado..."
            </blockquote>
          </Card>

          {/* Botão cartão */}
          <div className="mt-6 md:mt-0">
            <a
              href="https://link.mercadopago.com.br/igordev23"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="copy-button w-full mb-6">
                Deseja usar o cartão? 💳
              </Button>
            </a>
          </div>

          {/* RIGHT SIDE - QR e PIX */}
          <Card className="p-6">
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

            <div className="space-y-2 text-sm text-gray-700">
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
