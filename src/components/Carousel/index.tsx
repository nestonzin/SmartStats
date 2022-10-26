import { Flex, Image, Text } from "@chakra-ui/react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
// import "pure-react-carousel/dist/react-carousel.es.css";

export const Carousel: React.FC = () => {
  const carouselImgs = ["/carousel1.png", "/carousel2.jpg", "/carousel3.jpg"];

  return (
    <Flex>
      <CarouselProvider
        naturalSlideHeight={100}
        naturalSlideWidth={125}
        totalSlides={carouselImgs.length}
      >
        <Slider>
          {carouselImgs.map((carouselImg, index) => (
            <Slide key={index} index={index}>
              <Image src={carouselImg} alt={""} maxW="5rem" />
              {/* <Text color={["black"]}>Ola</Text> */}
            </Slide>
          ))}
        </Slider>
      </CarouselProvider>
    </Flex>
  );
};
