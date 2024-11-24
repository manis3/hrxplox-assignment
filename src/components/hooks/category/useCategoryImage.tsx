'use client';
import React, { useState } from 'react';

export default function useCategoryImage({ imageSrc }: { imageSrc: string }) {
  const [previewImage, _setPreviewImage] = useState<string>(imageSrc)
  const [isImageZoomIn, _setIsImageZoomIn] = useState<boolean>(true);

  const setPreviewImage = (url: string) => {
    _setPreviewImage(url)
  }
  const setIsImageZoomIn = () => {
    _setIsImageZoomIn((prev) => !prev);
  };
  return {
    isImageZoomIn,
    setIsImageZoomIn,
    setPreviewImage,
    previewImage
  };
}
