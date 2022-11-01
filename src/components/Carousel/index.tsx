import { Flex, Image, Box } from "@chakra-ui/react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { CaretDoubleRight, CaretDoubleLeft } from "phosphor-react";

export const Carousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <Flex
      w={["100%"]}
      justifyContent="center"
    >
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <Image as="img" src="carousel1.jpg" alt="" />
          </div>
          <div className="embla__slide">
            <Image as="img" src="carousel2.jpg" alt="" />
          </div>
          <div className="embla__slide">
            <Image as="img" src="carousel3.png" alt="" />
          </div>
          <div className="embla__slide">
            <Image as="img" src="carousel4.png" alt="" />
          </div>
        </div>
        <Flex w="100%" alignItems="center" justifyContent="space-around">
          <button className="embla__prev" onClick={scrollPrev}>
            <CaretDoubleLeft />
          </button>
          <button className="embla__next" onClick={scrollNext}>
            <CaretDoubleRight />
          </button>
        </Flex>
      </div>
    </Flex>
  );
};
