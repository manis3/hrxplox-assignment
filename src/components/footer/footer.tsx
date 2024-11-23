import React from 'react';
import Slogan from '../ui/logo/logo';
import FooterCard from './footerCard';
import { company, shop, support } from '@/consts/footer-consts';

export default function Footer() {
    return (
        <footer className='bg-background mt-24'>
            <div className='max-w-[1220px] mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 flex flex-col lg:flex-row gap-4'>
                <div className='flex flex-col gap-3 lg:w-1/4'>
                    <Slogan />
                    <p className='text-base'>
                        Unlock Your Business Potential with Customized Solutions
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:flex-1'>
                    <FooterCard title="Shop" links={shop} />
                    <FooterCard title="Support" links={support} />
                    <FooterCard title="Company" links={company} />
                </div>
            </div>
        </footer>
    );
}
