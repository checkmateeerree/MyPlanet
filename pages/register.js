import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Heading,
    Box,
    Button,
    ButtonGroup,
    Stack,
    Center,
    Text
} from '@chakra-ui/react'
import Link from "next/link"
import { Router } from 'next/router';
import { useState } from 'react'
import { useRouter } from 'next/router';

async function createUser(username, email, password) {
    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong!');
    }
  
    return data;
  }


const register = () => {
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [password, setPasssword] = useState()
  const router = useRouter()

  const handleUserNameChange = (event) => {
     setUsername(event.target.value)
  }
  const handleEmailChange = (event) => {
         setEmail(event.target.value)
}
const handlePasswordChange = (event) => {
    setPasssword(event.target.value)
}
const handleSubmit = async (event) => {
   event.preventDefault()
   try {
    const result = await createUser(username, email, password);
    console.log(result);
    router.replace("/")
  } catch (error) {
    console.log(error);
  }
}


  return (
    <Stack mx="auto" w="450px" spacing="24px" borderWidth='1px' borderRadius="5px" p="50px">
        <Heading size="lg">Create an account</Heading>
        <Stack spacing='12px'>
            <FormControl onChange={handleUserNameChange}>
                <FormLabel htmlFor='username'>Username</FormLabel>
                <Input id='username' type='text' />
            </FormControl>
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
            <Button colorScheme="twitter" onClick={handleSubmit}>
                Sign up
            </Button>
            <Center>
                <Text>
                    or
                </Text>
            </Center>
            <Link href="/login">
                <Button colorScheme="whatsapp">
                    Sign in
                </Button>
            </Link>
       </Stack>
    </Stack>

  )
}

export default register