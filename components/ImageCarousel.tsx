"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Slide = { src: string; alt: string };

export default function ImageCarousel({
  slides,
  interval = 4000,
}: {
  slides: Slide[];
  interval?: number;
}) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (!slides || slides.length <= 1) return;
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, interval);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [slides, interval]);

  if (!slides || slides.length === 0) return null;

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((s) => (
          <div key={s.src} className="flex-shrink-0 w-full">
            <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm shadow-slate-200/80">
              <Image src={s.src} alt={s.alt} width={1600} height={1200} className="h-auto w-full" />
            </div>
          </div>
        ))}
      </div>

      {slides.length > 1 && (
        <div className="absolute left-1/2 bottom-3 flex -translate-x-1/2 gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 w-8 rounded-full transition-colors ${
                i === index ? "bg-teal-700" : "bg-slate-200"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
