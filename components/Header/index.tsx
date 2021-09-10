import { Flex, Link } from "@chakra-ui/react"

export function Header() {
    return (
        <Flex w="100%" bg="gray.900" p="4" borderBottom="1px" borderBottomColor="white">

            <Flex as="header" p="4">
                <Link mr="8">
                    Projetos
                </Link>
                <Link mr="8">
                    Contato
                </Link>
            </Flex>

        </Flex>
    )
}