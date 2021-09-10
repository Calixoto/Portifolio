import { Flex } from "@chakra-ui/layout";
import Hero from "../components/Hero";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <Flex direction="column" maxW="1400px" margin="0 auto">
      <Hero />
      <Slider />
    </Flex>
  )
}
