import { ourService } from '@/consts/our-services';
import React from 'react';

export default function OurServices() {
    return (
        <div className='mt-8'>
            <p className='text-2xl text-gray-900 sm:text-3xl mb-6'>Our Services</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                {ourService && ourService.map((service, index) => (
                    <div key={index} className='p-4 rounded-lg flex  space-x-6 gap-2'>
                        <div>
                            {service.icon}
                        </div>
                        <div>
                            <h3 className='text-xl font-bold'>{service.title}</h3>
                            <p className='text-zinc-600 text-base mt-3'>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
