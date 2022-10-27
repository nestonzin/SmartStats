import { Flex, Image } from "@chakra-ui/react";
import useEmblaCarousel from "embla-carousel-react";

export const Carousel: React.FC = () => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <Flex justifyContent={["center"]} w={["100%"]} h={["50vh"]}>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <Image as="img" src="carousel1.png" alt="" />
          </div>
          <div className="embla__slide">
            <Image as="img" src="carousel2.jpg" alt="" />
          </div>
          <div className="embla__slide">
            <Image as="img" src="carousel3.jpg" alt="" />
          </div>
        </div>
      </div>
    </Flex>
  );
};
