"use client";

import { Button, Field, Textarea } from "@chakra-ui/react";
import { useState } from "react";

export default function MessageForm() {
  const [message, setMessage] = useState("");

  const whatsappNumber = "5542988381261";

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <>
      <Field.Root>
        <Field.Label>Mensagem</Field.Label>
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Digite sua mensagem aqui..."
          rows={6}
        />
      </Field.Root>

      <Button
        colorPalette="green"
        size="lg"
        onClick={handleWhatsAppClick}
        disabled={!message}
      >
        Enviar mensagem
      </Button>
    </>
  );
}
