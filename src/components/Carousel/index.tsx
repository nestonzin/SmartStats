import { Flex, Image, Box } from "@chakra-ui/react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { CaretDoubleRight, CaretDoubleLeft } from "phosphor-react";

export const Carousel: React.FC = () => {
  const CarouselImages = [
    {
      Image: "carousel1.jpg",
      Alt: "Desenho do faker",
    },
    {
      Image: "carousel4.png",
      Alt: "Desenho de jogadores do mundial",
    },
    {
      Image: "carousel3.png",
      Alt: "Imagem da plateia de mundial",
    },
    {
      Image: "carousel2.jpg",
      Alt: "Imagem do estadio do mundial",
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <Flex w={["100%"]} justifyContent="center">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {CarouselImages.map((CarouselImage) => (
            <div className="embla__slide" key={null}>
              <Image
                src={CarouselImage.Image}
                alt={CarouselImage.Alt}
                key={null}
              />
            </div>
          ))}
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
