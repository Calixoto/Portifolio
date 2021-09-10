import { Flex, Heading, HStack, VStack, Image, Text } from "@chakra-ui/react";


export function Projetos() {
    return (
        <>
            <Flex direction="column" m="auto" w="100%">
                <Heading align="center">
                    Projetos
                </Heading>



                <Flex justify="space-between" align="center">
                    <Image src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" w="300px" h="300px" />
                    <VStack w="800px" mr="0">
                        <HStack >
                            <VStack bg="whiteAlpha.500" p="8" alignItems="left">
                                <Image src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" w="50px" h="50px" />
                                <Text>
                                    lorem ipsum
                                </Text>
                                <Text>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, magni eum
                                </Text>
                            </VStack>
                            <VStack bg="whiteAlpha.500" p="8" alignItems="left">
                                <Image src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" w="50px" h="50px" />
                                <Text>
                                    lorem ipsum
                                </Text>
                                <Text>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, magni eum
                                </Text>
                            </VStack>
                        </HStack>
                        <HStack>
                            <VStack bg="whiteAlpha.500" p="8" alignItems="left">
                                <Image src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" w="50px" h="50px" />
                                <Text>
                                    lorem ipsum
                                </Text>
                                <Text>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, magni eum
                                </Text>
                            </VStack>
                            <VStack bg="whiteAlpha.500" p="8" alignItems="left">
                                <Image src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" w="50px" h="50px" />
                                <Text>
                                    lorem ipsum
                                </Text>
                                <Text>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, magni eum
                                </Text>
                            </VStack>
                        </HStack>
                    </VStack>
                </Flex>


            </Flex>

            <div>
                {/* <Example /> */}
            </div>
        </>
    );
}