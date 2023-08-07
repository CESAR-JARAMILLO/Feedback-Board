import AddFeedbackBtn from '@/components/buttons/AddFeedbackBtn'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Box, Button, Divider, Flex, Image, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'

const RoadmapPage = () => {
  const router = useRouter()

  return (
    <Box minH="100vh" bg="#F2F4FE">
      <Flex py="26px" px="24px" bg="#373F68" color="#FFF" fontSize="13px" justifyContent="space-between" alignItems="center">
        <Flex direction="column">
          <Flex as="button" onClick={() => router.push("/")} gap={2} alignItems="center">
            <ChevronLeftIcon boxSize={5} />
            <Text fontWeight="bold">Go Back</Text>
          </Flex>
          <Text mt="4px" fontSize="18px" fontWeight="bold">Roadmap</Text>
        </Flex>
        <AddFeedbackBtn />
      </Flex>

      <Flex fontSize="13px" fontWeight="bold" borderBottom="1px solid #8C92B3" h="60px" w="100%">
        <Flex flexGrow={1} alignItems="center" justifyContent="center">
          <Text color="#979797">Planned (2)</Text>
        </Flex>
        <Flex pos="relative" direction="column" flexGrow={1} alignItems="center" justifyContent="center">
          <Text color="#3A4374">Planned (2)</Text>
          <Divider pos="absolute"  bottom="-1px" border="4px solid #AD1FEA" />
        </Flex>
        <Flex flexGrow={1} alignItems="center" justifyContent="center">
          <Text color="#979797">Planned (2)</Text>
        </Flex>
      </Flex>

      <Box my="24px" ml="24px">
        <Box></Box>
        <Text mb="4px" color="#3A4374" fontSize="18px" fontWeight="bold">In-Progress (3)</Text>
        <Text color="#647196" fontSize="13px">Features currently being developed</Text>
      </Box>

      {/* Progress Card */}
      <Box mb="16px" mx="24px">
        <Box
          height="8px"
          bg="#AD1FEA"
          borderTopLeftRadius={10}
          borderTopRightRadius={10}
        />
        <Flex 
          fontSize="13px"
          p="24px"
          direction="column"
          bg="#FFF"
          borderBottomLeftRadius={10}
          borderBottomRightRadius={10}
        >
          <Flex mb="16px">
            <Box 
              my="auto" 
              h="8px" 
              w="8px" 
              bg="#AD1FEA"
              borderRadius="50%" 
              mr="16px" 
            />
            <Text color="#647196">In Progress</Text>
          </Flex>
          <Box mb="8px">
            <Text mb="9px" fontWeight="bold">Add tags for solutions</Text>
            <Text color="#647196">Easier to search for solutions based on a specific stack.</Text>
          </Box>
          <Button
            w="50%"
            fontSize="13px"
            fontWeight="semibold" 
            borderRadius="10px" 
            bg="#F2F4FF"
            color="#4661E6"
            mb="16px"
          >
            Enhancement
          </Button>
          <Flex justify="space-between">
            <Button
              w="25%"
              fontSize="13px"
              fontWeight="semibold" 
              borderRadius="10px" 
              bg="#F2F4FF"
              color="#3A4374"
            >
              <Image mr={2} src="/images/shared/icon-arrow-up.svg"/>
              112
            </Button>
            <Flex alignItems="center" gap={2}>
              <Image w="18px" h="16px" src="/images/shared/icon-comments.svg"/>
              <Text fontWeight="bold">2</Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
      
      {/* Progress Card */}
      <Box mb="16px" mx="24px">
        <Box
          height="8px"
          bg="#AD1FEA"
          borderTopLeftRadius={10}
          borderTopRightRadius={10}
        />
        <Flex 
          fontSize="13px"
          p="24px"
          direction="column"
          bg="#FFF"
          borderBottomLeftRadius={10}
          borderBottomRightRadius={10}
        >
          <Flex mb="16px">
            <Box 
              my="auto" 
              h="8px" 
              w="8px" 
              bg="#AD1FEA"
              borderRadius="50%" 
              mr="16px" 
            />
            <Text color="#647196">In Progress</Text>
          </Flex>
          <Box mb="8px">
            <Text mb="9px" fontWeight="bold">Add tags for solutions</Text>
            <Text color="#647196">Easier to search for solutions based on a specific stack.</Text>
          </Box>
          <Button
            w="50%"
            // onClick={onClick} 
            fontSize="13px"
            fontWeight="semibold" 
            borderRadius="10px" 
            bg="#F2F4FF"
            color="#4661E6"
            mb="16px"
          >
            Enhancement
          </Button>
          <Flex justify="space-between">
            <Button
              w="25%"
              fontSize="13px"
              fontWeight="semibold" 
              borderRadius="10px" 
              bg="#F2F4FF"
              color="#3A4374"
            >
              <Image mr={2} src="/images/shared/icon-arrow-up.svg"/>
              112
            </Button>
            <Flex alignItems="center" gap={2}>
              <Image w="18px" h="16px" src="/images/shared/icon-comments.svg"/>
              <Text fontWeight="bold">2</Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
      
      {/* Progress Card */}
      <Box mb="16px" mx="24px">
        <Box
          height="8px"
          bg="#AD1FEA"
          borderTopLeftRadius={10}
          borderTopRightRadius={10}
        />
        <Flex 
          fontSize="13px"
          p="24px"
          direction="column"
          bg="#FFF"
          borderBottomLeftRadius={10}
          borderBottomRightRadius={10}
        >
          <Flex mb="16px">
            <Box 
              my="auto" 
              h="8px" 
              w="8px" 
              bg="#AD1FEA"
              borderRadius="50%" 
              mr="16px" 
            />
            <Text color="#647196">In Progress</Text>
          </Flex>
          <Box mb="8px">
            <Text mb="9px" fontWeight="bold">Add tags for solutions</Text>
            <Text color="#647196">Easier to search for solutions based on a specific stack.</Text>
          </Box>
          <Button
            w="50%"
            // onClick={onClick} 
            fontSize="13px"
            fontWeight="semibold" 
            borderRadius="10px" 
            bg="#F2F4FF"
            color="#4661E6"
            mb="16px"
          >
            Enhancement
          </Button>
          <Flex justify="space-between">
            <Button
              w="25%"
              fontSize="13px"
              fontWeight="semibold" 
              borderRadius="10px" 
              bg="#F2F4FF"
              color="#3A4374"
            >
              <Image mr={2} src="/images/shared/icon-arrow-up.svg"/>
              112
            </Button>
            <Flex alignItems="center" gap={2}>
              <Image w="18px" h="16px" src="/images/shared/icon-comments.svg"/>
              <Text fontWeight="bold">2</Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>

    </Box>
  )
}

export default RoadmapPage