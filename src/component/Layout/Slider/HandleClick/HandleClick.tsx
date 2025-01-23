import Slider from 'react-slick';

export const handleNextClick = (sliderRef: React.RefObject<Slider | null>) => {
    if (sliderRef.current) {
        sliderRef.current.slickNext();
    }
};

export const handlePrevClick = (sliderRef: React.RefObject<Slider | null>) => {
    if (sliderRef.current) {
        sliderRef.current.slickPrev();
    }
};
