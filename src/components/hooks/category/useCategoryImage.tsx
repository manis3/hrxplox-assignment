"use client"
import React, { useState } from 'react'

export default function useCategoryImage() {
    const [isImageZoomIn, _setIsImageZoomIn] = useState<boolean>(true);

    const setIsImageZoomIn = () => {
        _setIsImageZoomIn(prev => !prev)

    }
    return {
        isImageZoomIn,
        setIsImageZoomIn,
    }

}
