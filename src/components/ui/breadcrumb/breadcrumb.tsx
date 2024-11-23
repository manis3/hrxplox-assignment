import { Slash } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Breadcrumb({ slug, link }: { slug: string, link: string }) {
    return (
        <div className='flex gap-4 text-base text-text-breadcrumb font-medium'>
            <Link href={'/'}>Home</Link>
            <p>/</p>
            <Link href={link}>{slug}</Link>
        </div>
    )
}
