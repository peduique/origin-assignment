import { useEffect } from 'react';

interface UseKeyPressProps {
  callback?: (type: KeyboardEvent) => void;
  keys: string[];
}

export const useKeyPress = ({
  keys = [],
  callback,
}: UseKeyPressProps): void => {
  useEffect(() => {
    const handleKeyPress = (ev: KeyboardEvent) => {
      return keys.includes(ev.key) ? callback?.(ev) : null;
    };

    window.addEventListener('keyup', handleKeyPress);
    return () => window.removeEventListener('keyup', handleKeyPress);
  }, [keys, callback]);
};

export default useKeyPress;
