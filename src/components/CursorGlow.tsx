import { useEffect } from 'react';

const CursorGlow = () => {
  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
      document.body.classList.add('cursor-active');
    };

    const hideCursor = () => {
      document.body.classList.remove('cursor-active');
    };

    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mouseleave', hideCursor);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseleave', hideCursor);
      document.body.classList.remove('cursor-active');
    };
  }, []);

  return null;
};

export default CursorGlow;