import React from 'react'
import { Center, Button, VStack } from '@chakra-ui/react'
import Link from 'next/link'

const Resources = () => {
  return (
    <Center height="50vh" mt="50px"> 
        <VStack spacing="25px" px="50px" py="100px" borderWidth="1px" borderRadius="10px">
            <Link href="https://www.tomorrow.io/weather/blog/most-influential-climate-charities-to-donate/">
                <Button size="lg" colorScheme="whatsapp">
                    Click here to check out some climate change charities!
                </Button>
            </Link>
        
       
            <Link href="https://en.wikipedia.org/wiki/List_of_climate_change_initiatives">
                <Button size="lg" colorScheme="twitter">
                    Click here to check out more climate action initiatives!
                </Button>
            </Link>
   
            <Link href="https://www.idealist.org/en/careers/7-climate-change-organizations-you-should-know">
                <Button size="lg" colorScheme="red">
                    Click here to check out more climate action organizations!
                </Button>
            </Link>
        </VStack>
    </Center>

  )
}

export default Resources