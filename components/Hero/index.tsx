import { Avatar, Button, Center, Flex, Heading, HStack, IconButton, Link, VStack } from "@chakra-ui/react";

import { FiGithub, FiLinkedin } from 'react-icons/fi'



export default function Hero() {
    return (

        <Center>
            <VStack mt={4}>
                <Heading size="lg" p={2}>Bem vindos 👊</Heading>
                <Heading size="xl" textAlign="center" maxW="650px">Sou estudante de engenharia da computação, tenho pratica em Front End</Heading>
                <HStack p={8}>
                    <Avatar boxSize="125px" mr={4} name="Lucas Calixto" src="https://github.com/calixoto.png" />
                    <VStack align="flex-start">
                        <p>Lucas Calixto</p>
                        <p>lucas70matheus@gmail.com</p>
                        <HStack>
                            <Link href="https://github.com/calixoto">
                                <IconButton
                                    bg="#333"
                                    aria-label="Github"
                                    _hover={{ opacity: 0.8 }}
                                    icon={<FiGithub />}
                                />
                            </Link>
                            <Link href="https://www.linkedin.com/in/tiagolivesan/">
                                <IconButton

                                    colorScheme="linkedin"
                                    aria-label="Linkedin"
                                    _hover={{ opacity: 0.8 }}
                                    icon={<FiLinkedin />}
                                />
                            </Link>
                        </HStack>
                    </VStack>
                </HStack>

            </VStack>

        </Center>

    )
} '  '