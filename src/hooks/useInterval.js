import { useRef, useEffect } from 'react';

/**
 * Declarative setInterval. The callback always sees the latest closure and
 * the timer is paused when `delay` is null. Cleans up automatically.
 * @param {() => void} callback - function to run on each tick
 * @param {number | null} delay - interval in ms, or null to pause
 */
export function useInterval(callback, delay) {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null || delay === undefined) return undefined;
    const id = setInterval(() => savedCallback.current(), delay);
    return () => clearInterval(id);
  }, [delay]);
}

export default useInterval;
