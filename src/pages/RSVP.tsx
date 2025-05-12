import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/components/ui/use-toast";

const RSVP = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    tipoConvite: "Individual",
    name: "",
    phone: "",
    quantidade: "",
    integrantes: "",
    attendance: "Sim",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRadioChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = new FormData();
    data.append("entry.2111817451", formData.tipoConvite);
    data.append("entry.517608033", formData.name);
    data.append("entry.1130232256", formData.phone);
    data.append("entry.1940540319", formData.attendance);

    if (formData.tipoConvite === "Família") {
      data.append("entry.1779383198", formData.quantidade);
      data.append("entry.991493757", formData.integrantes);
    }

    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLScrSxsc078ydDs8PUFKRP1zhZkw0amq2ooH6DdnlMFtVW0qVA/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          body: data,
        }
      );

      toast({
        title: "Resposta enviada!",
        description: "Obrigado pela sua confirmação.",
      });

      setFormData({
        tipoConvite: "Individual",
        name: "",
        phone: "",
        quantidade: "",
        integrantes: "",
        attendance: "Sim",
      });
    } catch {
      toast({
        title: "Erro ao enviar",
        description: "Verifique sua conexão e tente novamente.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="py-12 md:py-16">
      <div className="wedding-container">
        <h1 className="section-title">Confirme sua presença</h1>
        <p className="section-subtitle">
          Por favor confirme sua presença até 08 de Junho de 2025
        </p>

        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label>Tipo de Convite</Label>
              <RadioGroup
                value={formData.tipoConvite}
                onValueChange={(val) => handleRadioChange("tipoConvite", val)}
                className="flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Individual" id="individual" />
                  <Label htmlFor="individual">Individual</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Família" id="familia" />
                  <Label htmlFor="familia">Família</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome"
                required
              />
            </div>

            {formData.tipoConvite === "Família" && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="quantidade">Quantidade de pessoas</Label>
                  <Input
                    id="quantidade"
                    name="quantidade"
                    type="number"
                    min="1"
                    max="10"
                    value={formData.quantidade}
                    onChange={handleChange}
                    placeholder="Ex: 3"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="integrantes">Nome dos integrantes</Label>
                  <Input
                    id="integrantes"
                    name="integrantes"
                    value={formData.integrantes}
                    onChange={handleChange}
                    placeholder="Ex: Igor e Nicole"
                    required
                  />
                </div>
              </>
            )}

            <div className="space-y-2">
              <Label htmlFor="phone">Telefone</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Ex: 86998004507"
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Você confirma presença?</Label>
              <RadioGroup
                value={formData.attendance}
                onValueChange={(val) => handleRadioChange("attendance", val)}
                className="flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Sim" id="sim" />
                  <Label htmlFor="sim">Sim</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Não" id="nao" />
                  <Label htmlFor="nao">Não</Label>
                </div>
              </RadioGroup>
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
              Whatsapp: (86) 99855-3437
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RSVP;
