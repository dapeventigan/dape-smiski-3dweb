import { useEffect } from 'react';

function usePreventZoom(scrollCheck = true, keyboardCheck = true) {
  useEffect(() => {
    const handleKeydown = (e) => {
      if (
        keyboardCheck &&
        e.ctrlKey &&
        (e.keyCode === 61 || // +
          e.keyCode === 107 || // numpad +
          e.keyCode === 173 || // Firefox -
          e.keyCode === 109 || // numpad -
          e.keyCode === 187 || // Chrome +
          e.keyCode === 189) // Chrome -
      ) {
        e.preventDefault();
      }
    };

    const handleWheel = (e) => {
      if (scrollCheck && e.ctrlKey) {
        e.preventDefault();
      }
    };

    document.addEventListener("keydown", handleKeydown);
    document.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      document.removeEventListener("keydown", handleKeydown);
      document.removeEventListener("wheel", handleWheel);
    };
  }, [scrollCheck, keyboardCheck]);
}

export default usePreventZoom;
