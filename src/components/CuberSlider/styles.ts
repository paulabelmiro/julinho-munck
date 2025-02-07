import styled from "styled-components";

export const CubeSliderContainer = styled.div`
.swiper {
  width: 400px;
  height: 400px;
  @media screen and (max-width: 768px) {
    width: 280px;
    height: 280px;
  }
}

.swiper-slide {
  background-position: center;
  background-size: cover;

  @media screen and (max-width: 768px) {
    img {
      width: 280px;
      height: 280px;
    }
  }
}

.swiper-slide img {
  display: block;
  width: 100%;
}
`