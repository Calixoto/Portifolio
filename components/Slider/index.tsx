import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Flex } from "@chakra-ui/react";
import { Projetos } from '../Projetos/Projetos1';

SwiperCore.use([Navigation, Pagination, A11y]);

export default function Slider() {
    return (
        <Flex w="100%" maxW="1400px" mx="auto"   >
            <Swiper
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 20000, }}
                style={{ width: '100%', flex: '1' }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <Flex>
                        <Projetos />
                    </Flex>
                </SwiperSlide>
                <SwiperSlide>
                    <Flex bg="greenyellow">
                        <Projetos />
                    </Flex>
                </SwiperSlide>
                <SwiperSlide>
                    <Flex bg="blackAlpha.700">
                        <Projetos />
                    </Flex>
                </SwiperSlide>
            </Swiper>
        </Flex>
    )
}