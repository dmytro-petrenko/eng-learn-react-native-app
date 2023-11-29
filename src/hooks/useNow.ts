import { useState, useEffect } from 'react';

export const useNow = (updateInterval: number, enabled: number | null) => {
  const [now, setNow] = useState<number>(Date.now());

  useEffect(() => {
    if (!enabled) return;

    setNow(Date.now());
    const interval = setInterval(() => {
      setNow(Date.now());
    }, updateInterval);
    return () => {
      clearInterval(interval);
    };
  }, [updateInterval, enabled]);

  return now;
};
