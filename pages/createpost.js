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
    Text,
    Textarea
} from '@chakra-ui/react'
import Link from "next/link"
import { Router } from 'next/router';
import { useState } from 'react'
import { useRouter } from 'next/router';
import {useSession, getSession} from "next-auth/react"

const Createpost = () => {
  const [title, setTitle] = useState()
  const [text, setText] = useState()
  const router = useRouter()

  const handleTitleChange = (event) => {
     setTitle(event.target.value)
  }
  const handleTextChange = (event) => {
         setText(event.target.value)
}

const handleSubmit = async (event) => {
   event.preventDefault()
   try {
    const data = {
        title: title,
        text: text
    }
    const options = {
        method:"POST",
        body: JSON.stringify(data)
    }
    const result = await fetch("/api/createpost", options
    );
    console.log(result);
    router.replace("/")
  } catch (error) {
    console.log(error);
  }
}

const { data: session, status } = useSession()

  if (typeof window === "undefined") return null

  if (status==="loading") {
    return <p>Loading...</p>
  }

  if (status === "unauthenticated"){
    router.replace('/')
    return
  } else 

  return (
    <Stack mx="auto" w="450px" spacing="24px" borderWidth='1px' borderRadius="5px" p="50px">
        <Heading size="lg">Create a Post</Heading>
        <Stack spacing='12px'>
            <FormControl onChange={handleTitleChange}>
                <FormLabel htmlFor='title'>Title</FormLabel>
                <Input id='title' type='text' />
            </FormControl>
          
        </Stack>
        <Stack spacing='12px'>
            <Textarea onChange={handleTextChange} placeholder="Enter text">
                
            </Textarea>
          
        </Stack>
        <Stack spacing="5px">
            <Button colorScheme="twitter" onClick={handleSubmit}>
                Create Post
            </Button>
       </Stack>
    </Stack>

  )
}

export default Createpost