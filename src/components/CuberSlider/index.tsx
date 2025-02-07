// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, EffectCube, Pagination } from 'swiper/modules';

import services01 from "../../../public/servicos-01.jpg";
import services02 from "../../../public/servicos-02.jpg";
import services03 from "../../../public/servicos-03.jpg";
import services04 from "../../../public/servicos-04.jpg";
import Image from 'next/image';
import { CubeSliderContainer } from './styles';

export default function CuberSlider() {
    return (
        <CubeSliderContainer>
            <Swiper
                effect={'cube'}
                grabCursor={true}
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={true}
                modules={[Autoplay, EffectCube, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Image src={services01} width={400} height={400} alt='Nossos serviços' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={services02} width={400} height={400} alt='Nossos serviços' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={services03} width={400} height={400} alt='Nossos serviços' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={services04} width={400} height={400} alt='Nossos serviços' />
                </SwiperSlide>
            </Swiper>
        </CubeSliderContainer>
    )
}