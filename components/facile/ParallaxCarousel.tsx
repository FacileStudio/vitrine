"use client";

type ParallaxCarouselProps = {
  images: string[];
  className?: string;
};

export default function ParallaxCarousel({
  className = "",
}: ParallaxCarouselProps) {

  return (
    <div className={`w-1/2 overflow-hidden ${className}`}>
    </div>
  );
}