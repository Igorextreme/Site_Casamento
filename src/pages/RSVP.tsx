
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/components/ui/use-toast";

const RSVP = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    attendance: "yes",
    guests: "0",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRadioChange = (value: string) => {
    setFormData({
      ...formData,
      attendance: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbyIgD9FfErHoAWxve9pd0O03YjDysnHFMiq0hnTGl3VMqQJarfh-1eURbZbcMA9OX01zw/exec", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) throw new Error("Erro ao enviar dados");
  
      toast({
        title: "Resposta enviada!",
        description: "Obrigado pela sua confirmação.",
      });
  
      setFormData({
        name: "",
        email: "",
        phone: "",
        attendance: "yes",
        guests: "0",
        message: "",
      });
  
    } catch (err) {
      console.error(err);
      toast({
        title: "Erro",
        description: "Houve um problema ao enviar sua resposta.",
      });
    }
  };
  

  return (
    <div className="py-12 md:py-16">
      <div className="wedding-container">
        <h1 className="section-title">Confirme sua presença</h1>
        <p className="section-subtitle">
          Por favor confirme sua presença até 18 de Junho de 2025
        </p>

        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nome Completo</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome completo"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu.email@exemplo.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Telefone</Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(00) 00000-0000"
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Você poderá comparecer?</Label>
              <RadioGroup
                value={formData.attendance}
                onValueChange={handleRadioChange}
                className="flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="yes" />
                  <Label htmlFor="yes">Sim, eu vou</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="no" />
                  <Label htmlFor="no">Infelizmente não</Label>
                </div>
              </RadioGroup>
            </div>

            {formData.attendance === "yes" && (
              <div className="space-y-2">
                <Label htmlFor="guests">Número de acompanhantes</Label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-wedding-green focus:border-transparent"
                  required
                >
                  <option value="0">Sem acompanhante</option>
                  <option value="1">1 acompanhante</option>
                  <option value="2">2 acompanhantes</option>
                  <option value="3">3 acompanhantes</option>
                </select>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="message">Mensagem aos noivos (opcional)</Label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Escreva uma mensagem para os noivos..."
                className="w-full border border-gray-300 rounded-md py-2 px-3 h-32 focus:outline-none focus:ring-2 focus:ring-wedding-green focus:border-transparent"
              />
            </div>

            <Button type="submit" className="wedding-button w-full">
              Enviar confirmação
            </Button>
          </form>
        </div>

        <div className="max-w-2xl mx-auto mt-8 text-center">
          <p className="text-gray-700">
            Em caso de dúvidas, entre em contato conosco: <br />
            <a href="mailto:igor.nicole@exemplo.com" className="text-wedding-green hover:underline">
              igor.nicole@exemplo.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RSVP;
