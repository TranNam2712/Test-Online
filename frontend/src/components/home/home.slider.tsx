import { useEffect, useState } from "react";
import {
  RiArrowLeftCircleLine,
  RiArrowRightCircleLine,
} from "@remixicon/react";

interface ImageSliderProps {
  images: string[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  autoSlide = true,
  autoSlideInterval = 5000,
}) => {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const next = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [current]);

  return (
    <div className="hidden relative md:block  overflow-hidden w-full h-[400px] rounded-xl shadow-lg group">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Slide ${i + 1}`}
            className="w-full h-[400px] object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/50 hover:bg-white p-2 rounded-full hidden group-hover:block"
      >
        <RiArrowLeftCircleLine color="white" />
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/50 hover:bg-white p-2 rounded-full hidden group-hover:block"
      >
        <RiArrowRightCircleLine color="white" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              i === current ? "bg-blue-600" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
