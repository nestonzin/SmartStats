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
    <Flex justifyContent={["center"]} w={["100%"]} h={["60vh"]}>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <Image as="img" src="carouselTest1.png" alt="" />
          </div>
          <div className="embla__slide">
            <Image as="img" src="carouselTest2.png" alt="" />
          </div>
          <div className="embla__slide">
            <Image as="img" src="carouselTest3.png" alt="" />
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
