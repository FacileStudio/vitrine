"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";

type ParallaxCarouselProps = {
  images: string[];
  className?: string;
};

export default function ParallaxCarousel({
  images,
  className = "",
}: ParallaxCarouselProps) {

  return (
    <div className={`w-1/2 overflow-hidden ${className}`}>
    </div>
  );
}