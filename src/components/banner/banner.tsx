import React from 'react';
import Button from '@/components/ui/button/ButtonWithLoadingState';
import { Card } from '@/components/ui/card';

export default function Banner() {
  return (
    <Card className="flex flex-col justify-end" colorScheme={'banner-card'} rounded={'16'} padding={'48px'}>
      <div className=" w-1/2 space-y-4">
        <p className="flex-wrap text-[30px] lg:text-[40px] font-medium text-text-primary leading-tight">Grab Upto 50% Off On Selected Clothes</p>
        <Button rounded={'full'} className="text-lg">
          Shop Now
        </Button>
      </div>
    </Card>
  );
}