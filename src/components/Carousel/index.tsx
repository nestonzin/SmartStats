import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Flex, Image } from "@chakra-ui/react";
import { PrevButton, NextButton } from "./../Carousel/EmblaCarouselButtons";

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

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({stopOnInteraction:false, delay:4000})]);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <Flex w={["100%"]} justifyContent="center">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {CarouselImages.map((CarouselImage, index) => (
            <div className="embla__slide" key={`${CarouselImage}-${index}`}>
              <Image
                src={CarouselImage.Image}
                alt={CarouselImage.Alt}
                key={`${CarouselImage}-${index}`}
              />
            </div>
          ))}
        </div>
        <Flex
          justifyContent={["space-between"]}
          alignItems={["center"]}
          p={["1rem"]}
          position={["absolute"]}
          top={["30%"]}
          left={["25%"]}
          w={["75%"]}
        >
          <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
          <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
        </Flex>
      </div>
    </Flex>
  );
};
