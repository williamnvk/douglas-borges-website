"use client";

import { Button, FormControl, Textarea } from "@chakra-ui/react";
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
      <FormControl>
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Digite sua mensagem aqui..."
          rows={6}
        />
      </FormControl>

      <Button
        colorScheme="green"
        size="lg"
        onClick={handleWhatsAppClick}
        isDisabled={!message}
      >
        Enviar mensagem
      </Button>
    </>
  );
}
