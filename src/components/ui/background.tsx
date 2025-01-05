"use client";
import React from "react";
import { useMediaQuery } from 'react-responsive';
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

export default function Background() {
  const hovered = true;

  // Define media queries
  const isMdOrLarger = useMediaQuery({ query: '(min-width: 768px)' });

  // Set dotSize based on screen size
  const dotSize = isMdOrLarger ? 2 : 3;

  return (
    <div
      className="absolute min-h-[calc(100vh-40px)] md:min-h-[calc(100vh-80px)] min-w-[calc(100vw-40px)] md:min-w-[calc(100vw-80px)] top-5 left-5 md:top-10 md:left-10"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0"
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-transparent"
              colors={[
                [59, 130, 246],
              ]}
              opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
              dotSize={dotSize}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {/* Radial gradient for the cute fade */}
      <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)]" />
    </div>
  );
}