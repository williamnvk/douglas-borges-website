import {
  VStack,
  Heading,
  Box,
  Accordion,
} from "@chakra-ui/react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqData: FAQItem[];
}

export function FAQSection({ faqData }: FAQSectionProps) {
  return (
    <VStack
      as="section"
      w="full"
      align="flex-start"
      gap={{ base: 4, sm: 6 }}
      py={{ base: 4, sm: 6, md: 8 }}
    >
      <Heading as="h2" fontSize={{ base: "xl", sm: "2xl", md: "4xl" }}>
        Perguntas Frequentes
      </Heading>

      <Box
        borderRadius={{ base: "lg", md: "md" }}
        overflow="hidden"
        borderWidth={2}
        borderColor="gray.100"
        w="full"
      >
        <Accordion.Root w="full">
          {faqData.map((faq, index) => (
            <Accordion.Item
              key={index}
              borderColor="gray.200"
              border="none"
              value={faq.question}
            >
              <h3>
                <Accordion.ItemTrigger
                  py={{ base: 4, sm: 6 }}
                  px={{ base: 4, sm: 6 }}
                >
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontWeight="600"
                    fontSize={{ base: "sm", sm: "md", md: "lg" }}
                  >
                    {faq.question}
                  </Box>
                  <Accordion.ItemIndicator />
                </Accordion.ItemTrigger>
              </h3>
              <Accordion.ItemContent>
                <Accordion.ItemBody
                  pb={{ base: 4, sm: 6 }}
                  px={{ base: 4, sm: 6 }}
                  fontSize={{ base: "xs", sm: "sm", md: "md" }}
                  color="gray.700"
                  lineHeight="1.6"
                >
                  {faq.answer}
                </Accordion.ItemBody>
              </Accordion.ItemContent>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </Box>
    </VStack>
  );
}