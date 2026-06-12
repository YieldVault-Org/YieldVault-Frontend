import { useState, useCallback } from 'react';

/**
 * Boolean state with stable toggle/on/off helpers. Handy for modals,
 * dropdowns and other show/hide UI.
 * @param {boolean} [initial=false]
 * @returns {[boolean, { toggle: () => void, on: () => void, off: () => void }]}
 */
export function useToggle(initial = false) {
  const [value, setValue] = useState(Boolean(initial));

  const toggle = useCallback(() => setValue((v) => !v), []);
  const on = useCallback(() => setValue(true), []);
  const off = useCallback(() => setValue(false), []);

  return [value, { toggle, on, off }];
}

export default useToggle;
