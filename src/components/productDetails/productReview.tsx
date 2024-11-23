import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar/Avatar';
import Rating from '../ui/rating/ratingStar';

export default function ProductReview() {
  return (
    <div>
      <div className="flex gap-10">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-8 text-text-grayScaleCharcoal">
          <Rating rating={3} colorScheme={'default'} size={'md'} />
          <div className="space-y-3 text-lg ">
            <h2 className="font-bold">Absolutely amazing product!</h2>
            <p className="text-text-proseBody">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quisquam corrupti placeat qui tempora ipsam quis ea, voluptatibus
              officia quasi deserunt pariatur est in adipisci a, itaque, molestiae dolore ut!
            </p>
          </div>

          <div className="text-base">
            <p className=" font-bold">user Name</p>
            <p className="text-text-proseBody">Date</p>
          </div>
        </div>
      </div>
    </div>
  );
}
