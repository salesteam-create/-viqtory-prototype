"use client";

import { useEffect, useState } from "react";

type CountUpOptions = {
  duration?: number;
  decimals?: number;
  start?: boolean;
};

export function useCountUp(
  target: number,
  options: CountUpOptions = {}
): number {
  const { duration = 1200, decimals = 0, start = false } = options;
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    let raf: number;
    const startTime = performance.now();
    const factor = Math.pow(10, decimals);
    const tick = (now: number) => {
      const t = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(target * eased * factor) / factor);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, decimals, start]);

  return value;
}
