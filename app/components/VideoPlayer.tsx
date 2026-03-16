"use client";

import { useRef, useState } from "react";

export default function VideoPlayer({
  src,
  className = "",
}: {
  src: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [showControls, setShowControls] = useState(false);
  const touchActiveRef = useRef(false);
  const touchStartRef = useRef({ x: 0, y: 0 });

  return (
    <div
      className={`relative rounded-xl overflow-hidden bg-black ${className}`}
      onMouseEnter={() => { if (!touchActiveRef.current) setShowControls(true); }}
      onMouseLeave={() => { if (!touchActiveRef.current) setShowControls(false); }}
    >
      <video
        ref={ref}
        autoPlay
        muted
        loop
        playsInline
        controls={showControls}
        preload="metadata"
        className="w-full aspect-video object-contain"
      >
        <source src={src} type="video/mp4" />
      </video>
      {!showControls && (
        <div
          className="absolute inset-0 z-10"
          onTouchStart={(e) => {
            touchStartRef.current = {
              x: e.touches[0].clientX,
              y: e.touches[0].clientY,
            };
          }}
          onTouchEnd={(e) => {
            const dx = e.changedTouches[0].clientX - touchStartRef.current.x;
            const dy = e.changedTouches[0].clientY - touchStartRef.current.y;
            if (Math.abs(dx) < 10 && Math.abs(dy) < 10) {
              touchActiveRef.current = true;
              setShowControls(true);
            }
          }}
        />
      )}
    </div>
  );
}
