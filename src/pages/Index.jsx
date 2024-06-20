import { Container, Text, VStack, Heading, Image, Box } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">
          All About Apples
        </Heading>
        <Image src="/images/apple-banner.jpg" alt="Apples" borderRadius="md" />
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            History of Apples
          </Heading>
          <Text fontSize="md" textAlign="justify">
            Apples have been grown for thousands of years in Asia and Europe and were brought to North America by European colonists. Apple trees are large if grown from seed, but small if grafted onto roots (rootstock). There are more than 7,500 known cultivars of apples, resulting in a range of desired characteristics. Different cultivars are bred for various tastes and uses, including cooking, eating raw, and cider production.
          </Text>
        </Box>
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Interesting Facts
          </Heading>
          <Text fontSize="md" textAlign="justify">
            - Apples are a member of the rose family.
            <br />
            - The science of apple growing is called pomology.
            <br />
            - Apples float because 25% of their volume is air.
            <br />
            - The largest apple ever picked weighed three pounds.
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;