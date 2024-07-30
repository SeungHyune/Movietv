import { useState, useEffect, RefObject } from 'react';

interface UseImageLoadStatusProps {
  ref: RefObject<HTMLImageElement>;
  src: string | undefined;
}

const useImgLoadStatus = ({ ref, src }: UseImageLoadStatusProps) => {
  const [isImgLoaded, setIsImgLoaded] = useState(false);

  useEffect(() => {
    if (!ref.current || !src) {
      return;
    }

    if (isImgLoaded) {
      setIsImgLoaded(false);
    }

    const updateStatus = (img: HTMLImageElement) => {
      const isLoaded = img.complete && img.naturalHeight !== 0;

      setIsImgLoaded(isLoaded);
    };

    ref.current.addEventListener(
      'load',
      () => updateStatus(ref.current as HTMLImageElement),
      { once: true },
    );
  }, [src]);

  return isImgLoaded;
};

export default useImgLoadStatus;
