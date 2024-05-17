import { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { siteConfig } from '@/config/site';

const images = [
    siteConfig.list[0].img,
    siteConfig.list[1].img,
    siteConfig.list[2].img,
    siteConfig.list[1].img,
    siteConfig.list[0].img
];

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const nextSlide = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
                setIsTransitioning(false);
            }, 100); // Temps de la transition
        }
    };

    const prevSlide = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
                setIsTransitioning(false);
            }, 100); // Temps de la transition
        }
    };

    return (
        <div className="relative flex-col sm:hidden">
            <div className="relative overflow-hidden">
                <div
                    className="transition-transform duration-500 ease-in-out flex"
                    style={{
                        transform: `translateX(-${currentSlide * 100}%)`,
                    }}
                >
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="w-full"
                            style={{
                                flex: '0 0 100%',
                                transition: 'transform 0.5s ease',
                            }}
                        />
                    ))}
                </div>
            </div>
            <div className="w-full flex justify-center items-center mt-4 bottom-8 gap-4 opacity-70">
                <button onClick={prevSlide} className="text-sm" name='preview' aria-label='Slide left'>
                    <ChevronLeft className=" items-center h-full" width={14}/>
                </button>
                <div className="text-white text-sm  items-center h-[24px]">
                   {currentSlide + 1}/{images.length}
                </div>
                <button onClick={nextSlide} className="text-sm" name='next' aria-label='Slide right'>
                    <ChevronRight  width={14}/>
                </button>
            </div>
        </div>
    );
};

export default Carousel;
