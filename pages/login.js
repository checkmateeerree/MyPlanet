import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Heading,
    Box,
    Button,
    Alert,
    AlertIcon,
    Stack,
    Center,
    Text
} from '@chakra-ui/react'
import Link from "next/link"
import { useRouter } from 'next/router';
import { getSession, signIn } from 'next-auth/react';
import { useEffect, useState } from 'react';

const login = () => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.replace('/');
      } else {
        setIsLoading(false);
      }
    });
  }, [router]);

  if (isLoading){
      return <p>Loading...</p>;
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }
  async function handleSubmit(event){
    event.preventDefault();

    console.log(email)
    console.log(password)

    const result = await signIn('credentials', {
        redirect: false,
        email: email,
        password: password,
      });

      console.log(result)

      if (result.error == null) {
        setError(false)
        // set some auth state
        router.replace('/');
      } else {
          setError(true)
          console.log(error)
      }
  }

  return (
    <Stack mx="auto" w="450px" spacing="24px" borderWidth='1px' borderRadius="5px" p="50px">
        {error && 
            <Alert status='error'>
                <AlertIcon />
                Email or Password invalid
            </Alert>
        }
        <Heading size="lg">Log in to MyPlanet</Heading>
        <Stack spacing='12px'>
            <FormControl onChange={handleEmailChange}>
                <FormLabel htmlFor='email'>Email</FormLabel>
                <Input id='email' type='email' />
                <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl onChange={handlePasswordChange}>
                <FormLabel htmlFor='password'>Password</FormLabel>
                <Input id='password' type='password' />
            </FormControl>
        </Stack>
        <Stack spacing="5px">
            <Button colorScheme="whatsapp" onClick={handleSubmit}>
                Sign in
            </Button>
            <Center>
                <Text>
                    or
                </Text>
            </Center>
            <Link href="/register">
                <Button colorScheme="twitter" >
                    Sign up 
                </Button>
            </Link>
       </Stack>
    </Stack>

  )
}

export default login