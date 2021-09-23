import { Flex, Heading, HStack, VStack, Image, Text, Spacer, Link, IconButton, Button, Modal, ModalHeader, ModalCloseButton, ModalBody, ModalOverlay, ModalContent, Box, useDisclosure } from "@chakra-ui/react";
import { FiGithub, FiYoutube, FiPlus } from 'react-icons/fi'

export function Projetos() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Flex direction="column" m="auto" w="100%">
                <HStack>
                    <Heading mt={2} display="flex" align="start">
                        <Image src="/images/dtmoney.png" alt="dtMoney" mr={4} ml={1} />
                        dt money - Ignite
                    </Heading>
                    <Spacer />
                    <Link
                        target="_blank"
                        _hover={{ textDecoration: "none", opacity: 0.8 }}
                        href="https://dt-money-ignite-nefsb5o6a-calixoto.vercel.app/"
                    >
                        <Text
                            bg="#342680"
                            p={2}
                            borderRadius={8}
                        >
                            Acessar Site
                        </Text>
                    </Link>
                    <Link
                        target="_blank"
                        href="https://github.com/Calixoto/Chapter-Two"
                    >
                        <IconButton
                            bg="#333"
                            aria-label="Github"
                            _hover={{ opacity: 0.8 }}
                            icon={<FiGithub />}
                        />
                    </Link>
                    <Link
                        target="_blank"
                        href="https://youtube.com"
                    >
                        <IconButton
                            colorScheme="red"
                            aria-label="Youtube"
                            _hover={{ opacity: 0.8 }}
                            icon={<FiYoutube />}
                        />
                    </Link>
                </HStack>



                <Flex justify="space-between" align="center" p={14}>
                    <Image src="/images/p1.png" alt="Segun Adebayo" w="400px" h={420} />
                    <VStack w="800px" mr="0">
                        <HStack >
                            <VStack p="4" alignItems="left">
                                <Image src="/images/react.png" alt="Segun Adebayo" w="50px" h="45px" />
                                <Text>
                                    Ract JS
                                </Text>
                                <Text>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, magni eum
                                </Text>
                            </VStack>
                            <VStack p="4" alignItems="left">
                                <Image src="/images/sc.png" alt="Segun Adebayo" w="50px" h="50px" />
                                <Text>
                                    Styled Components
                                </Text>
                                <Text>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, magni eum
                                </Text>
                            </VStack>
                        </HStack>
                        <HStack>
                            <VStack p="4" alignItems="left">
                                <Image src="/images/miragejs.png" alt="Segun Adebayo" w="50px" h="50px" />
                                <Text>
                                    Mirage JS
                                </Text>
                                <Text>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, magni eum
                                </Text>
                            </VStack>
                            <VStack p="4" alignItems="left">
                                <Image src="/images/axios.svg" alt="Segun Adebayo" w="50px" h="50px" />
                                <Text>
                                    Axios
                                </Text>
                                <Text>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, magni eum
                                </Text>
                            </VStack>
                        </HStack>
                        <Button bg="gray.900" onClick={onOpen} p={4} align="center">
                            <FiPlus />
                            <Text ml={2}>Tecnologias</Text>
                        </Button>

                        <Modal onClose={onClose} isOpen={isOpen} isCentered>
                            <ModalOverlay />
                            <ModalContent bg="gray.900">
                                <ModalHeader>
                                </ModalHeader>
                                <ModalCloseButton />
                                <ModalBody >
                                    <Box py={2}>
                                        <Heading size="md">Context Api</Heading>
                                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, magni eum</Text>
                                    </Box>
                                    <Box py={2}>
                                        <Heading size="md">Context Api</Heading>
                                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, magni eum</Text>
                                    </Box>
                                    <Box py={2}>
                                        <Heading size="md">Context Api</Heading>
                                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, magni eum</Text>
                                    </Box>
                                </ModalBody>
                            </ModalContent>
                        </Modal>
                    </VStack>
                </Flex>
            </Flex>

            <div>
                {/* <Example /> */}
            </div>
        </>
    );
}