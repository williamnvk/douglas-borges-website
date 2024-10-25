"use client";

import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Select,
  Textarea,
  VStack,
  Grid,
  GridItem,
  Text,
  HStack,
  Button,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import {
  BtnBold,
  BtnItalic,
  BtnUnderline,
  BtnStrikeThrough,
  Editor,
  EditorProvider,
  Toolbar,
} from "react-simple-wysiwyg";
import html2canvas from "html2canvas";

interface FormData {
  title: string;
  subtitle: string;
  description: string;
  titleSize: string;
  color: "black" | "white";
}

export default function DynamicCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState<FormData>({
    title: "",
    subtitle: "",
    description: "",
    titleSize: "24px",
    color: "black",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const generateSlug = (text: string): string => {
    // Remove as tags HTML do texto
    const plainText = text.replace(/<[^>]*>/g, "");

    return plainText
      .toLowerCase()
      .normalize("NFD") // Normaliza caracteres acentuados
      .replace(/[\u0300-\u036f]/g, "") // Remove acentos
      .replace(/[^\w\s-]/g, "") // Remove caracteres especiais
      .replace(/\s+/g, "-") // Substitui espaços por hífens
      .replace(/-+/g, "-") // Remove hífens duplicados
      .substring(0, 60) // Limita o tamanho do slug
      .replace(/^-+|-+$/g, ""); // Remove hífens do início e fim
  };

  const handleDownload = async () => {
    if (cardRef.current) {
      try {
        const canvas = await html2canvas(cardRef.current, {
          scale: 10, // Aumenta a qualidade da imagem
          backgroundColor: formData.color === "black" ? "#000000" : "#FFFFFF",
        });

        // Gera o slug do título
        const titleSlug = generateSlug(formData.title || "sem-titulo");

        // Cria o nome do arquivo
        const fileName = `${titleSlug}_${formData.color}.png`;

        const link = document.createElement("a");
        link.download = fileName;
        link.href = canvas.toDataURL("image/png");
        link.click();
      } catch (error) {
        console.error("Erro ao gerar a imagem:", error);
      }
    }
  };

  return (
    <Container maxW="container.xl" py={10}>
      <Grid templateColumns="repeat(2, 1fr)" gap={8}>
        <GridItem>
          <VStack spacing={4} align="stretch">
            <FormControl>
              <FormLabel>Título</FormLabel>
              <EditorProvider>
                <Editor
                  name="title"
                  value={formData.title}
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  onChange={handleChange}
                >
                  <Toolbar>
                    <BtnBold />
                    <BtnUnderline />
                    <BtnStrikeThrough />
                    <BtnItalic />
                  </Toolbar>
                </Editor>
              </EditorProvider>
            </FormControl>

            <FormControl>
              <FormLabel>Subtítulo</FormLabel>
              <EditorProvider>
                <Editor
                  name="subtitle"
                  value={formData.subtitle}
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  onChange={handleChange}
                >
                  <Toolbar>
                    <BtnBold />
                    <BtnUnderline />
                    <BtnStrikeThrough />
                    <BtnItalic />
                  </Toolbar>
                </Editor>
              </EditorProvider>
            </FormControl>

            <FormControl>
              <FormLabel>Descrição</FormLabel>
              <Textarea
                name="description"
                rows={4}
                value={formData.description}
                onChange={handleChange}
                placeholder="Digite a descrição"
              />
            </FormControl>

            <FormControl>
              <FormLabel>Tamanho do Título</FormLabel>
              <Select
                name="titleSize"
                value={formData.titleSize}
                onChange={handleChange}
              >
                <option value="56px">56px</option>
                <option value="64px">64px</option>
                <option value="72px">72px</option>
                <option value="80px">80px</option>
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Cor do Texto</FormLabel>
              <Select
                name="color"
                value={formData.color}
                onChange={handleChange}
              >
                <option value="black">Preto</option>
                <option value="white">Branco</option>
              </Select>
            </FormControl>

            <Button onClick={handleDownload} mt={4}>
              Baixar para Instagram
            </Button>
          </VStack>
        </GridItem>

        <GridItem>
          <Box
            ref={cardRef}
            w="800px"
            h="800px"
            bg={formData.color === "black" ? "black" : "white"}
            color={formData.color === "black" ? "white" : "black"}
            p={32}
          >
            <VStack spacing={6} align="stretch" h="full">
              <Box
                fontSize={formData.titleSize}
                fontFamily="heading"
                style={{ lineHeight: 1.1 }}
              >
                <span
                  dangerouslySetInnerHTML={{
                    __html:
                      formData.title ||
                      "Exemplo de título para postagem no instagram.",
                  }}
                ></span>
              </Box>
              {formData.subtitle.length > 0 && (
                <Box
                  fontSize="24px"
                  fontFamily="heading"
                  style={{ lineHeight: 1.1 }}
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html:
                        formData.subtitle ||
                        "Exemplo de subtítulo para postagem no instagram.",
                    }}
                  ></span>
                </Box>
              )}
              {formData.description.length > 0 && (
                <Text>{formData.description}</Text>
              )}

              <VStack flex={1} justify="flex-end">
                <HStack
                  w="full"
                  fontSize="16px"
                  fontFamily="heading"
                  gap={8}
                  align="center"
                >
                  <Box
                    style={{
                      borderRadius: "50%",
                      backgroundImage: `url(/assets/instagram.jpg)`,
                      backgroundPosition: "center",
                      backgroundSize: "auto 100%",
                    }}
                    w="64px"
                    h="64px"
                  ></Box>
                  <VStack align="flex-start" gap={0} flex={1}>
                    <span>
                      Douglas <strong>Borges</strong>
                    </span>
                    <span>@douglasborges</span>
                  </VStack>
                </HStack>
              </VStack>
            </VStack>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
}
