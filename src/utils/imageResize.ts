export const imageResize = (
  currentImage: string,
  currentSize: number,
  changeSize: number,
): string => {
  const changeImage = currentImage.replace(
    String(currentSize),
    String(changeSize),
  );
  return changeImage;
};
