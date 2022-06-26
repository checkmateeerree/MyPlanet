import Head from 'next/head';
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
} from '@chakra-ui/react';
import Link from 'next/link';

export default function Hero() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Container maxW={'3xl'} backgroundColor="white">
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
          pt={{ base: 15, md: 31}}>
          <Heading
            fontWeight="bold"
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Become an<br />
            <Text as={'span'} color={'green.400'}>
              active climate activist
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            Learn more about climate change events occurring throughout the world.
            Actively contribute to ending climate change, one step at a time.
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Link href="/register">
                <Button
                colorScheme={'green'}
                bg={'green.400'}
                rounded={'full'}
                px={6}
                _hover={{
                    bg: 'green.500',
                }}>
                Get Started
                </Button>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}