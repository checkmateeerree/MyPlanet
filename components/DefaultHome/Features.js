import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    HStack,
    VStack,
  } from '@chakra-ui/react';
 
  
  // Replace test data with your own
 const features = [
     {id: 0, title: 'Fundraisers', text: 'Host/Donate to credible fundraisers that have a specific mission and action plan.'},
     {id: 1, title: 'Discussion', text: 'Discuss climate-related issues with people all around the world to gain new perspectives.'},
     {id: 2, title: 'Events', text: 'Create or learn about climate-change activist events taking place near you.'},
     {id: 3, title: 'News', text: 'Post about or read breaking climate-change news. '},
]
  
  export default function Features() {
    return (
      <Box p="100" backgroundColor="lightgreen">
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading fontSize={'3xl'}>What is MyPlanet?</Heading>
          <Text color={'gray.600'} fontSize={'xl'}>
            MyPlanet is a one-stop shop social network for all things 
            climate-change related, whether it be fundraisers, news, or 
            general discussion.
          </Text>
        </Stack>
  
        <Container maxW={'6xl'} mt={10}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
            {features.map((feature) => (
              <HStack key={feature.id} align={'top'}>
                <Box color={'green.400'} px={2}>
                  <Icon />
                </Box>
                <VStack align={'start'}>
                  <Text fontWeight={600}>{feature.title}</Text>
                  <Text color={'gray.600'}>{feature.text}</Text>
                </VStack>
              </HStack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    );
  }