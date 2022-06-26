import { Box, Center, Heading, HStack, Select, Button, Stack, Grid, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import {useState, useEffect} from 'react'

const SignedInHome = () => {

  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('http://localhost:3000/api/posts')
      .then((res) => res.json())
      .then((data) => {
        setData(data.reverse())
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  const formattedData = data.map(post =>
    (
      
        <Box backgroundColor="lightgrey" width="535px" px="25px" py="10px" mb="20px">
          <Heading size="md">{post.title}</Heading>
          <Text py="25px" size="sm">{post.text}</Text>
          <Text size="sm">Post created at {post.timeCreated}</Text>
        </Box>

    ))

  return (
    <VStack spacing="25px" mx="auto">
        <Center>
          <HStack spacing="110px">
            <Heading>
                Community Posts
              </Heading> 
              <Link href="/createpost">
                <Button colorScheme="blue">
                  Create a Post
                </Button>
              </Link>
              
            </HStack>
        </Center>
        <VStack>
          <SimpleGrid columns={1}>
            {formattedData}
          </SimpleGrid>
        </VStack>
      
        
    </VStack>
  )
}

export default SignedInHome
