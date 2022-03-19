import { Center, Container, Flex } from '@chakra-ui/react'
import React from 'react'

const BucketModal = ({bucketData}) => {
  return (
      <Center bgColor="blackAlpha.400" w="100vw" h="100vh" position="absolute" top="0" left="0">
    <Container maxW="1200px">
        <Flex flexDirection="column" w="100%" h="80vh" bgColor="white">
            <div>Hello Test</div>
        </Flex>
    </Container>
    </Center>
  )
}

export default BucketModal