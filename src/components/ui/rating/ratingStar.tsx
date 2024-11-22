import { cva, VariantProps } from 'class-variance-authority'
import React from 'react'
import { FaStar } from 'react-icons/fa';

const ratingStyles = cva('flex gap-1.5', {
    variants: {
        size: {
            sm: "text-sm",
            md: "text-md",
            lg: "text-lg",
        },
        colorScheme: {
            default: "text-rating",
            gray: "text-background",
            blue: 'text-blue-400',
        },
    },
    defaultVariants: {
        size: "md",
        colorScheme: "default",
    }
})

interface RatingProps extends VariantProps<typeof ratingStyles> {
    rating: number;
    maxRating?: number;
    className?: string;
}

const Rating: React.FC<RatingProps> = ({ className, rating, maxRating = 5, size, colorScheme }) => {
    return (
        <div className={ratingStyles({ size, colorScheme, className })}>
            {[...Array(maxRating)].map((_, index) => (
                <FaStar
                    key={index}
                    className={index < rating ? 'fill-current' : 'text-gray-300'}
                />
            ))}
        </div>
    );
};

export default Rating;
