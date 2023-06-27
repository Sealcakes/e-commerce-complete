import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from './EmblaCarousel.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className={styles.embla}>
      <button className={styles.embla__prev} onClick={scrollPrev}><FontAwesomeIcon icon={faChevronLeft} /></button>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((slide, idx) => (
            <div className={styles.embla__slide} key={idx}>
              <img
                className={styles.embla__slide__img}
                src={slide}
              />
            </div>
          ))}
        </div>
      </div>
      
      <button class={styles.embla__next} onClick={scrollNext}><FontAwesomeIcon icon={faChevronRight} /></button>
    </div>
  )
}

export default EmblaCarousel;
