import React from 'react'
import { Card } from '../ui/card'
import Image from 'next/image';
import { Badge } from '../ui/badge/badge';
import { cn } from '@/utils/cn';

export default function CategoriesCard({ badgeTitle, show, imageHeight = 350, imageWidth = 350, imageSrc = "/image.jpg", className, wrapperCardClassName }: { badgeTitle?: string, show?: boolean, imageHeight?: number, imageWidth?: number, imageSrc?: string, className?: string, wrapperCardClassName?: string }) {
    return (
        <Card className={cn("relative overflow-hidden aspect-square rounded-md !p-0", wrapperCardClassName)} padding={"0px"}>
            {show && <Badge>{badgeTitle}</Badge>}
            <Image
                src={imageSrc}
                alt="Category Image"
                height={imageHeight}
                width={imageWidth}
                priority
                className={cn("object-cover w-full h-full transition-transform duration-300 ", className)}
            />
        </Card>


    )
}
